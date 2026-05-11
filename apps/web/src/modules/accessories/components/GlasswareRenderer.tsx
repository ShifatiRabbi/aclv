import React from 'react';
import type { Equipment } from '../types';
import type { AnyMeasurement } from '../types';

interface GlasswareRendererProps {
  equipment: Equipment;
  measurement: AnyMeasurement;
}

// ---------------------------------------------------------------------------
// Scaling helpers
// ---------------------------------------------------------------------------
const TARGET_H = 450;
const TARGET_W = 350;
const MAX_SCALE = 5;

function computeScale(height_mm: number, diameter_mm: number): number {
  const diam = diameter_mm || 40; // fallback for items with no round cross-section
  const scaleH = TARGET_H / height_mm;
  const scaleW = TARGET_W / diam;
  return Math.min(MAX_SCALE, Math.min(scaleH, scaleW));
}

// ---------------------------------------------------------------------------
// Type-safe field accessors (all extra fields are optional in AnyMeasurement)
// ---------------------------------------------------------------------------
function get<T>(m: AnyMeasurement, key: string, fallback: T): T {
  return (m as Record<string, unknown>)[key] !== undefined
    ? ((m as Record<string, unknown>)[key] as T)
    : fallback;
}

// ---------------------------------------------------------------------------
// Graduation renderer — reusable for any graduated vessel
// ---------------------------------------------------------------------------
function Graduations({
  capacity_ml,
  graduation_step_ml,
  topY,
  bottomY,
  rightEdge,
  scale,
  topDown = false,
}: {
  capacity_ml: number;
  graduation_step_ml: number;
  topY: number;
  bottomY: number;
  rightEdge: number;
  scale: number;
  topDown?: boolean;
}) {
  if (!graduation_step_ml || !capacity_ml) return null;

  const graduationHeight = (bottomY - topY) * 0.8;
  const pxPerMl = graduationHeight / capacity_ml;
  const startY = topDown ? topY + 10 : bottomY - 10;
  const lines: React.ReactNode[] = [];

  for (let v = 0; v <= capacity_ml; v += graduation_step_ml) {
    const y = topDown
      ? startY + v * pxPerMl
      : startY - v * pxPerMl;
    const isMajor = v % (graduation_step_ml * 5) === 0 || v === capacity_ml || v === 0;
    const lineLen = isMajor ? 20 : 12;

    lines.push(
      <line
        key={`g-${v}`}
        x1={rightEdge - lineLen}
        y1={y}
        x2={rightEdge}
        y2={y}
        stroke="#1e293b"
        strokeWidth={isMajor ? 1.5 : 0.8}
      />
    );

    if (isMajor && (v > 0 || topDown)) {
      lines.push(
        <text
          key={`l-${v}`}
          x={rightEdge + 8}
          y={y + 4}
          fontSize="11"
          fontFamily="monospace"
          fontWeight="bold"
          fill="#334155"
        >
          {v.toFixed(graduation_step_ml < 1 ? 1 : 0)}
        </text>
      );
    }
  }
  return <>{lines}</>;
}

// ---------------------------------------------------------------------------
// SVG glass reflect gradient — shared defs
// ---------------------------------------------------------------------------
function GlassDefs() {
  return (
    <defs>
      <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="white" stopOpacity="0.05" />
        <stop offset="20%"  stopColor="white" stopOpacity="0.30" />
        <stop offset="40%"  stopColor="white" stopOpacity="0.10" />
        <stop offset="100%" stopColor="white" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#94a3b8" stopOpacity="1" />
        <stop offset="50%"  stopColor="#e2e8f0" stopOpacity="1" />
        <stop offset="100%" stopColor="#64748b" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="rubberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#475569" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <radialGradient id="ceramicGrad" cx="40%" cy="35%">
        <stop offset="0%"   stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </radialGradient>
    </defs>
  );
}

// ---------------------------------------------------------------------------
// Individual shape renderers
// ---------------------------------------------------------------------------

function BeakerShape({ cx, topY, bottomY, radius }: { cx: number; topY: number; bottomY: number; radius: number }) {
  return (
    <g>
      <path
        d={`M ${cx - radius},${topY}
           L ${cx - radius},${bottomY - 5}
           Q ${cx - radius},${bottomY} ${cx - radius + 5},${bottomY}
           L ${cx + radius - 5},${bottomY}
           Q ${cx + radius},${bottomY} ${cx + radius},${bottomY - 5}
           L ${cx + radius},${topY}
           L ${cx + radius + 10},${topY - 5}
           L ${cx - radius},${topY} Z`}
        fill="rgba(173,216,230,0.15)"
        stroke="#64748b"
        strokeWidth="2"
      />
      <rect x={cx - radius + 4} y={topY + 10} width={radius * 0.4} height={(bottomY - topY) - 20}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.6} />
    </g>
  );
}

function ErlenmeyerShape({
  cx, topY, bottomY, radius, neckR, neckH,
}: { cx: number; topY: number; bottomY: number; radius: number; neckR: number; neckH: number }) {
  return (
    <g>
      <path
        d={`M ${cx - neckR},${topY}
           L ${cx - neckR},${topY + neckH}
           L ${cx - radius},${bottomY - 5}
           Q ${cx - radius},${bottomY} ${cx - radius + 5},${bottomY}
           L ${cx + radius - 5},${bottomY}
           Q ${cx + radius},${bottomY} ${cx + radius},${bottomY - 5}
           L ${cx + neckR},${topY + neckH}
           L ${cx + neckR},${topY} Z`}
        fill="rgba(173,216,230,0.15)"
        stroke="#64748b"
        strokeWidth="1.5"
      />
      <rect x={cx - neckR + 3} y={topY + 10} width={neckR * 0.5} height={(bottomY - topY) - 20}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.6} />
    </g>
  );
}

function SeparatoryFunnelShape({
  cx, topY, bottomY, radius, neckR, neckH,
}: { cx: number; topY: number; bottomY: number; radius: number; neckR: number; neckH: number }) {
  const stemY = bottomY - 30;
  return (
    <g>
      {/* Stopper top */}
      <ellipse cx={cx} cy={topY - 6} rx={neckR + 4} ry={6} fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      {/* Body */}
      <path
        d={`M ${cx - neckR},${topY}
           L ${cx - neckR},${topY + neckH}
           C ${cx - radius * 1.4},${topY + neckH + radius} ${cx - radius},${stemY - 40} ${cx - 5},${stemY}
           L ${cx - 5},${bottomY}
           L ${cx + 5},${bottomY}
           L ${cx + 5},${stemY}
           C ${cx + radius},${stemY - 40} ${cx + radius * 1.4},${topY + neckH + radius} ${cx + neckR},${topY + neckH}
           L ${cx + neckR},${topY} Z`}
        fill="rgba(173,216,230,0.15)"
        stroke="#64748b"
        strokeWidth="2"
      />
      {/* Stopcock */}
      <circle cx={cx} cy={stemY - 10} r={8} fill="#1e293b" />
      <rect x={cx - 12} y={stemY - 11} width="24" height="3" rx="1" fill="#94a3b8" />
    </g>
  );
}

function CondenserShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const jacketR = radius;
  const tubeR = radius * 0.4;
  const innerH = (bottomY - topY) - 80;
  return (
    <g>
      {/* Joints top / bottom */}
      <rect x={cx - tubeR} y={topY} width={tubeR * 2} height={40} rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      <rect x={cx - tubeR} y={bottomY - 40} width={tubeR * 2} height={40} rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      {/* Outer jacket */}
      <rect x={cx - jacketR} y={topY + 40} width={jacketR * 2} height={innerH}
        fill="rgba(173,216,230,0.1)" stroke="#64748b" strokeWidth="1.5" />
      {/* Water inlet / outlet ports */}
      <rect x={cx + jacketR} y={topY + 60} width="12" height="5" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      <rect x={cx - jacketR - 12} y={bottomY - 65} width="12" height="5" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      {/* Water flow arrows */}
      <text x={cx + jacketR + 15} y={topY + 64} fontSize="9" fill="#64748b">IN</text>
      <text x={cx - jacketR - 26} y={bottomY - 60} fontSize="9" fill="#64748b">OUT</text>
      {/* Inner tube */}
      <rect x={cx - tubeR} y={topY + 40} width={tubeR * 2} height={innerH}
        fill="rgba(255,255,255,0.2)" stroke="#1e293b" strokeWidth="1.5" />
      {/* Wavy water bands */}
      {Array.from({ length: 5 }).map((_, i) => {
        const wy = topY + 40 + (innerH / 6) * (i + 1);
        return (
          <path key={i}
            d={`M ${cx - jacketR + 5},${wy} Q ${cx - jacketR / 2},${wy - 5} ${cx},${wy} Q ${cx + jacketR / 2},${wy + 5} ${cx + jacketR - 5},${wy}`}
            fill="none" stroke="rgba(100,200,255,0.25)" strokeWidth="1.5" />
        );
      })}
    </g>
  );
}

function FilteringFlaskShape({
  cx, topY, bottomY, radius, neckR, neckH,
}: { cx: number; topY: number; bottomY: number; radius: number; neckR: number; neckH: number }) {
  const armY = topY + neckH - 10;
  return (
    <g>
      <path
        d={`M ${cx - neckR},${topY}
           L ${cx - neckR},${topY + neckH}
           L ${cx - radius},${bottomY - 5}
           Q ${cx - radius},${bottomY} ${cx - radius + 5},${bottomY}
           L ${cx + radius - 5},${bottomY}
           Q ${cx + radius},${bottomY} ${cx + radius},${bottomY - 5}
           L ${cx + neckR},${topY + neckH}
           L ${cx + neckR},${topY} Z`}
        fill="rgba(173,216,230,0.15)"
        stroke="#64748b"
        strokeWidth="3"
      />
      {/* Side-arm */}
      <path d={`M ${cx + neckR},${armY} L ${cx + neckR + 28},${armY - 6} L ${cx + neckR + 28},${armY - 2} L ${cx + neckR},${armY + 4} Z`}
        fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
      {/* Hose nub */}
      <circle cx={cx + neckR + 30} cy={armY - 4} r={4} fill="#475569" />
      <rect x={cx - neckR + 3} y={topY + 10} width={neckR * 0.5} height={(bottomY - topY) - 20}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.6} />
    </g>
  );
}

function MeasuringCylinderShape({
  cx, topY, bottomY, radius, scale,
}: { cx: number; topY: number; bottomY: number; radius: number; scale: number }) {
  return (
    <g>
      {/* Hexagonal base */}
      <path
        d={`M ${cx - radius - 20},${bottomY} L ${cx + radius + 20},${bottomY} L ${cx + radius + 10},${bottomY + 15} L ${cx - radius - 10},${bottomY + 15} Z`}
        fill="#94a3b8" stroke="#475569" />
      {/* Cylinder */}
      <path
        d={`M ${cx - radius},${topY}
           L ${cx - radius},${bottomY}
           L ${cx + radius},${bottomY}
           L ${cx + radius},${topY}
           Q ${cx + radius + 10},${topY - 10} ${cx + radius},${topY} Z`}
        fill="rgba(173,216,230,0.15)"
        stroke="#64748b"
        strokeWidth="2"
      />
      <rect x={cx - radius + 4} y={topY + 10} width={radius * 0.4} height={(bottomY - topY) - 20}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.6} />
    </g>
  );
}

function BuretteShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const stopcockY = bottomY - 40;
  return (
    <g>
      <path
        d={`M ${cx - radius},${topY} L ${cx - radius},${stopcockY} L ${cx + radius},${stopcockY} L ${cx + radius},${topY} Z`}
        fill="rgba(173,216,230,0.15)" stroke="#64748b" strokeWidth="1.5" />
      {/* Tip taper */}
      <path
        d={`M ${cx - radius},${stopcockY} L ${cx + radius},${stopcockY} L ${cx + 2},${bottomY} L ${cx - 2},${bottomY} Z`}
        fill="#94a3b8" stroke="#475569" />
      {/* Stopcock */}
      <circle cx={cx} cy={stopcockY - 12} r={7} fill="#1e293b" />
      <rect x={cx - 14} y={stopcockY - 13} width="28" height="3" rx="1" fill="#94a3b8" />
      <rect x={cx - radius + 4} y={topY + 10} width={radius * 0.4} height={stopcockY - topY - 20}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.6} />
    </g>
  );
}

function VolumetricFlaskShape({
  cx, topY, bottomY, radius, neckR, neckH,
}: { cx: number; topY: number; bottomY: number; radius: number; neckR: number; neckH: number }) {
  const globeTop = topY + neckH;
  return (
    <g>
      {/* Stopper */}
      <ellipse cx={cx} cy={topY - 5} rx={neckR + 3} ry={5} fill="#94a3b8" stroke="#64748b" />
      <path
        d={`M ${cx - neckR},${topY}
           L ${cx - neckR},${globeTop}
           C ${cx - neckR},${globeTop + 20} ${cx - radius},${bottomY - radius} ${cx - radius},${bottomY - radius / 2}
           Q ${cx - radius},${bottomY} ${cx},${bottomY}
           Q ${cx + radius},${bottomY} ${cx + radius},${bottomY - radius / 2}
           C ${cx + radius},${bottomY - radius} ${cx + neckR},${globeTop + 20} ${cx + neckR},${globeTop}
           L ${cx + neckR},${topY} Z`}
        fill="rgba(173,216,230,0.15)"
        stroke="#64748b"
        strokeWidth="2"
      />
      {/* Calibration mark */}
      <line x1={cx - neckR - 8} y1={globeTop + 20} x2={cx + neckR + 8} y2={globeTop + 20}
        stroke="#ef4444" strokeWidth="1.5" />
      <text x={cx + neckR + 12} y={globeTop + 24} fontSize="9" fill="#ef4444" fontFamily="monospace">TC 20°C</text>
      <rect x={cx - neckR + 3} y={topY + 10} width={neckR * 0.5} height={neckH - 10}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.6} />
    </g>
  );
}

function RoundBottomFlaskShape({
  cx, topY, bottomY, radius, neckR,
}: { cx: number; topY: number; bottomY: number; radius: number; neckR: number }) {
  const neckH = (bottomY - topY) * 0.35;
  const globeTop = topY + neckH;
  const globeR = radius;
  const globeCY = bottomY - globeR;
  return (
    <g>
      {/* Joint */}
      <rect x={cx - neckR - 1} y={topY} width={(neckR + 1) * 2} height={12} rx="2" fill="#94a3b8" stroke="#64748b" />
      {/* Neck */}
      <rect x={cx - neckR} y={topY + 12} width={neckR * 2} height={neckH - 12}
        fill="rgba(173,216,230,0.15)" stroke="#64748b" strokeWidth="1.5" />
      {/* Sphere */}
      <circle cx={cx} cy={globeCY} r={globeR} fill="rgba(173,216,230,0.15)" stroke="#64748b" strokeWidth="2" />
      {/* Transition */}
      <path d={`M ${cx - neckR},${globeTop} L ${cx - neckR - 4},${globeTop + 8} M ${cx + neckR},${globeTop} L ${cx + neckR + 4},${globeTop + 8}`}
        stroke="#64748b" strokeWidth="1.5" fill="none" />
      <rect x={cx - neckR + 3} y={topY + 14} width={neckR * 0.5} height={neckH - 20}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.6} />
    </g>
  );
}

function ReagentBottleShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const neckR = radius * 0.38;
  const neckH = (bottomY - topY) * 0.22;
  const capH = 18;
  return (
    <g>
      {/* Cap */}
      <rect x={cx - neckR - 3} y={topY - capH} width={(neckR + 3) * 2} height={capH} rx="3"
        fill="#475569" stroke="#1e293b" strokeWidth="1" />
      {/* Neck */}
      <rect x={cx - neckR} y={topY} width={neckR * 2} height={neckH}
        fill="rgba(173,216,230,0.2)" stroke="#64748b" strokeWidth="1.5" />
      {/* Shoulder */}
      <path d={`M ${cx - neckR},${topY + neckH} L ${cx - radius},${topY + neckH + 20} L ${cx + radius},${topY + neckH + 20} L ${cx + neckR},${topY + neckH} Z`}
        fill="rgba(173,216,230,0.15)" stroke="#64748b" strokeWidth="1.5" />
      {/* Body */}
      <rect x={cx - radius} y={topY + neckH + 20} width={radius * 2} height={(bottomY - topY) - neckH - 25}
        fill="rgba(80,40,10,0.18)" stroke="#64748b" strokeWidth="1.5" />
      {/* Label area */}
      <rect x={cx - radius + 6} y={topY + neckH + 30} width={radius * 2 - 12} height={30}
        fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" rx="2" />
      <rect x={cx - radius + 4} y={topY + neckH + 22} width={radius * 0.4} height={(bottomY - topY) - neckH - 30}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.5} />
    </g>
  );
}

function TestTubeShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  return (
    <g>
      <path
        d={`M ${cx - radius},${topY}
           L ${cx - radius},${bottomY - radius}
           A ${radius},${radius} 0 0 0 ${cx + radius},${bottomY - radius}
           L ${cx + radius},${topY} Z`}
        fill="rgba(173,216,230,0.15)"
        stroke="#64748b"
        strokeWidth="2"
      />
      <rect x={cx - radius + 3} y={topY + 8} width={radius * 0.4} height={(bottomY - topY) - 20}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.6} />
    </g>
  );
}

function PetriDishShape({
  cx, topY, bottomY, radius, height_mm, scale,
}: { cx: number; topY: number; bottomY: number; radius: number; height_mm: number; scale: number }) {
  const dishH = height_mm * scale;
  return (
    <g>
      {/* Base */}
      <path
        d={`M ${cx - radius},${bottomY - dishH} L ${cx - radius},${bottomY - 5}
           Q ${cx - radius},${bottomY} ${cx - radius + 5},${bottomY}
           L ${cx + radius - 5},${bottomY}
           Q ${cx + radius},${bottomY} ${cx + radius},${bottomY - 5}
           L ${cx + radius},${bottomY - dishH} Z`}
        fill="rgba(173,216,230,0.1)" stroke="#64748b" strokeWidth="1.5"
      />
      {/* Lid (slightly larger, offset up) */}
      <path
        d={`M ${cx - radius - 6},${bottomY - dishH - 12} L ${cx - radius - 6},${bottomY - dishH + 5}
           L ${cx + radius + 6},${bottomY - dishH + 5}
           L ${cx + radius + 6},${bottomY - dishH - 12} Z`}
        fill="rgba(255,255,255,0.12)" stroke="#475569" strokeWidth="1"
      />
    </g>
  );
}

function WatchGlassShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const midY = (topY + bottomY) / 2;
  return (
    <g>
      <path
        d={`M ${cx - radius},${midY} Q ${cx},${midY + 18} ${cx + radius},${midY}`}
        fill="rgba(173,216,230,0.12)" stroke="#64748b" strokeWidth="2" />
      {/* Concave top face */}
      <path
        d={`M ${cx - radius},${midY} Q ${cx},${midY - 8} ${cx + radius},${midY}`}
        fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
    </g>
  );
}

function EvaporatingDishShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const rimY = topY + 6;
  return (
    <g>
      {/* Dish body */}
      <path
        d={`M ${cx - radius},${rimY}
           Q ${cx - radius},${bottomY} ${cx},${bottomY}
           Q ${cx + radius},${bottomY} ${cx + radius},${rimY} Z`}
        fill="url(#ceramicGrad)" stroke="#94a3b8" strokeWidth="2" />
      {/* Pouring lip */}
      <path d={`M ${cx + radius - 5},${rimY} L ${cx + radius + 12},${rimY - 5} L ${cx + radius + 12},${rimY}`}
        fill="none" stroke="#94a3b8" strokeWidth="2" />
      {/* Rim highlight */}
      <path d={`M ${cx - radius},${rimY} Q ${cx},${rimY - 4} ${cx + radius},${rimY}`}
        fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
    </g>
  );
}

function CrucibleShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  return (
    <g>
      {/* Lid */}
      <path d={`M ${cx - radius - 2},${topY - 5} L ${cx + radius + 2},${topY - 5} L ${cx + radius},${topY} L ${cx - radius},${topY} Z`}
        fill="#cbd5e1" stroke="#475569" />
      <circle cx={cx} cy={topY - 9} r={3} fill="#475569" />
      {/* Cup */}
      <path
        d={`M ${cx - radius},${topY}
           L ${cx - radius * 0.65},${bottomY}
           L ${cx + radius * 0.65},${bottomY}
           L ${cx + radius},${topY} Z`}
        fill="url(#ceramicGrad)"
        stroke="#94a3b8"
        strokeWidth="2"
      />
    </g>
  );
}

function DesiccatorShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const lidH = (bottomY - topY) * 0.35;
  const baseH = (bottomY - topY) * 0.65;
  const plateY = topY + lidH + baseH * 0.45;
  return (
    <g>
      {/* Base */}
      <path
        d={`M ${cx - radius + 10},${topY + lidH}
           L ${cx - radius},${topY + lidH + 10}
           L ${cx - radius},${bottomY - 5}
           Q ${cx - radius},${bottomY} ${cx - radius + 5},${bottomY}
           L ${cx + radius - 5},${bottomY}
           Q ${cx + radius},${bottomY} ${cx + radius},${bottomY - 5}
           L ${cx + radius},${topY + lidH + 10}
           L ${cx + radius - 10},${topY + lidH} Z`}
        fill="rgba(173,216,230,0.15)" stroke="#64748b" strokeWidth="2" />
      {/* Lid dome */}
      <path
        d={`M ${cx - radius},${topY + lidH} Q ${cx},${topY - 10} ${cx + radius},${topY + lidH}`}
        fill="rgba(173,216,230,0.1)" stroke="#64748b" strokeWidth="2" />
      {/* Porcelain plate */}
      <rect x={cx - radius + 15} y={plateY} width={(radius - 15) * 2} height={6}
        rx="2" fill="#f1f5f9" stroke="#94a3b8" />
      {/* Desiccant layer */}
      <ellipse cx={cx} cy={bottomY - 15} rx={radius - 10} ry={8}
        fill="rgba(200,180,130,0.3)" stroke="rgba(150,130,80,0.4)" strokeWidth="1" />
      {/* Grease joint line */}
      <line x1={cx - radius} y1={topY + lidH} x2={cx + radius} y2={topY + lidH}
        stroke="#94a3b8" strokeWidth="3" strokeDasharray="4,3" />
    </g>
  );
}

function WashBottleShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  return (
    <g>
      {/* Body */}
      <path d={`M ${cx - radius},${topY + 22} L ${cx - radius},${bottomY - 10}
        Q ${cx - radius},${bottomY} ${cx},${bottomY}
        Q ${cx + radius},${bottomY} ${cx + radius},${bottomY - 10}
        L ${cx + radius},${topY + 22} Z`}
        fill="rgba(255,255,255,0.35)" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Volume label */}
      <rect x={cx - radius + 8} y={topY + 40} width={(radius - 8) * 2} height={28}
        fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.3)" rx="2" />
      {/* Cap */}
      <rect x={cx - radius - 2} y={topY} width={radius * 2 + 4} height={22} rx="3"
        fill="#475569" stroke="#1e293b" />
      {/* Delivery tube */}
      <path d={`M ${cx},${topY + 10} L ${cx},${topY - 30} L ${cx + 42},${topY - 8}`}
        fill="none" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
      <circle cx={cx + 43} cy={topY - 8} r={3} fill="#334155" />
    </g>
  );
}

function BunsenBurnerShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const baseH = 20;
  const barrelW = radius * 0.6;
  const barrelTop = topY + 30;
  const airH = 12;
  const airY = barrelTop + (bottomY - topY - baseH - 30) * 0.5;
  return (
    <g>
      {/* Flame */}
      <ellipse cx={cx} cy={topY + 18} rx={barrelW + 4} ry={22}
        fill="rgba(250,180,30,0.18)" />
      <ellipse cx={cx} cy={topY + 22} rx={barrelW + 1} ry={10}
        fill="rgba(50,150,255,0.35)" />
      <path d={`M ${cx - barrelW + 2},${topY + 30} Q ${cx},${topY} ${cx + barrelW - 2},${topY + 30}`}
        fill="none" stroke="rgba(255,200,50,0.6)" strokeWidth="2" />
      {/* Barrel */}
      <rect x={cx - barrelW} y={barrelTop} width={barrelW * 2} height={(bottomY - topY - baseH - 30)}
        fill="url(#metalGrad)" stroke="#475569" strokeWidth="1.5" />
      {/* Air hole collar */}
      <rect x={cx - barrelW - 3} y={airY} width={(barrelW + 3) * 2} height={airH}
        rx="2" fill="#64748b" stroke="#334155" strokeWidth="1" />
      {/* Air holes */}
      {[-1, 0, 1].map(i => (
        <circle key={i} cx={cx + i * (barrelW * 0.55)} cy={airY + airH / 2} r={2.5}
          fill="#1e293b" />
      ))}
      {/* Gas inlet nozzle */}
      <rect x={cx - barrelW - 12} y={bottomY - baseH - 8} width={12} height={6} rx="2"
        fill="#94a3b8" stroke="#475569" />
      {/* Base */}
      <ellipse cx={cx} cy={bottomY - baseH / 2} rx={radius} ry={baseH / 2}
        fill="url(#metalGrad)" stroke="#475569" strokeWidth="1.5" />
    </g>
  );
}

function TripodStandShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const ringY = topY + 20;
  const ringR = radius * 0.9;
  const legSpread = radius + 20;
  return (
    <g>
      {/* Ring */}
      <circle cx={cx} cy={ringY} r={ringR} fill="none" stroke="url(#metalGrad)" strokeWidth="6" />
      {/* Three legs */}
      {[0, 120, 240].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        const fx = cx + Math.cos(rad) * legSpread;
        const fy = bottomY;
        const tx = cx + Math.cos(rad) * (ringR * 0.85);
        const ty = ringY + Math.sin(Math.abs(rad)) * 5;
        return (
          <line key={i} x1={tx} y1={ty} x2={fx} y2={fy}
            stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
        );
      })}
      {/* Rubber feet */}
      {[0, 120, 240].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        return (
          <ellipse key={i} cx={cx + Math.cos(rad) * legSpread} cy={bottomY}
            rx={6} ry={3} fill="#334155" />
        );
      })}
    </g>
  );
}

function WireGauzeShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const w = radius * 2;
  const h = Math.max(18, (bottomY - topY) * 0.4);
  const x0 = cx - radius;
  const y0 = (topY + bottomY) / 2 - h / 2;
  const step = 12;
  const lines: React.ReactNode[] = [];
  for (let x = x0; x <= x0 + w; x += step) {
    lines.push(<line key={`v${x}`} x1={x} y1={y0} x2={x} y2={y0 + h} stroke="#94a3b8" strokeWidth="1" opacity={0.7} />);
  }
  for (let y = y0; y <= y0 + h; y += step) {
    lines.push(<line key={`h${y}`} x1={x0} y1={y} x2={x0 + w} y2={y} stroke="#94a3b8" strokeWidth="1" opacity={0.7} />);
  }
  return (
    <g>
      <rect x={x0} y={y0} width={w} height={h} fill="rgba(255,255,255,0.05)" stroke="#64748b" strokeWidth="2" />
      {lines}
      {/* Ceramic center */}
      <circle cx={cx} cy={y0 + h / 2} r={w * 0.18} fill="rgba(240,200,120,0.6)" stroke="#b45309" strokeWidth="1.5" />
    </g>
  );
}

function RetortStandShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const baseW = radius * 2;
  const baseH = 16;
  const rodW = 10;
  const rodH = (bottomY - topY) - baseH - 10;
  const rodX = cx - radius * 0.4;
  return (
    <g>
      {/* Base */}
      <rect x={cx - baseW / 2} y={bottomY - baseH} width={baseW} height={baseH}
        rx="3" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1.5" />
      {/* Rod */}
      <rect x={rodX - rodW / 2} y={topY + 10} width={rodW} height={rodH}
        fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" />
      {/* Boss head */}
      <rect x={rodX - 14} y={topY + rodH * 0.35} width={28} height={14}
        rx="3" fill="#64748b" stroke="#475569" />
      {/* Iron ring */}
      <circle cx={rodX + 36} cy={topY + rodH * 0.35 + 7} r={20}
        fill="none" stroke="#64748b" strokeWidth="5" />
      {/* Clamp arm */}
      <line x1={rodX + 14} y1={topY + rodH * 0.35 + 7} x2={rodX + 16} y2={topY + rodH * 0.35 + 7}
        stroke="#94a3b8" strokeWidth="4" />
    </g>
  );
}

function FunnelShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const stemH = (bottomY - topY) * 0.45;
  const stemW = radius * 0.22;
  const coneBottom = bottomY - stemH;
  return (
    <g>
      {/* Cone */}
      <path
        d={`M ${cx - radius},${topY}
           L ${cx - stemW},${coneBottom}
           L ${cx + stemW},${coneBottom}
           L ${cx + radius},${topY} Z`}
        fill="rgba(173,216,230,0.15)" stroke="#64748b" strokeWidth="2" />
      {/* Stem */}
      <rect x={cx - stemW} y={coneBottom} width={stemW * 2} height={stemH}
        fill="rgba(173,216,230,0.2)" stroke="#64748b" strokeWidth="1.5" />
      <rect x={cx - stemW + 2} y={topY + 8} width={stemW * 0.6} height={coneBottom - topY - 16}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.5} />
    </g>
  );
}

function MortarPestleShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const mortarTop = (topY + bottomY) / 2 - 10;
  const mortarH = bottomY - mortarTop;
  return (
    <g>
      {/* Pestle */}
      <rect x={cx - radius * 0.15} y={topY} width={radius * 0.3} height={mortarTop - topY + 10}
        rx="3" fill="url(#ceramicGrad)" stroke="#94a3b8" strokeWidth="1.5" />
      <ellipse cx={cx} cy={mortarTop + 8} rx={radius * 0.28} ry={10}
        fill="url(#ceramicGrad)" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Mortar */}
      <path
        d={`M ${cx - radius},${mortarTop}
           Q ${cx - radius},${bottomY} ${cx},${bottomY}
           Q ${cx + radius},${bottomY} ${cx + radius},${mortarTop} Z`}
        fill="url(#ceramicGrad)" stroke="#94a3b8" strokeWidth="2" />
      {/* Rim highlight */}
      <path d={`M ${cx - radius},${mortarTop} Q ${cx},${mortarTop - 8} ${cx + radius},${mortarTop}`}
        fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
    </g>
  );
}

function ThermometerShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const bulbR = radius * 1.8;
  const tubeW = radius * 0.7;
  const bulbY = bottomY - bulbR;
  const tubeH = bulbY - topY - bulbR * 0.5;
  return (
    <g>
      {/* Tube */}
      <rect x={cx - tubeW / 2} y={topY} width={tubeW} height={tubeH + bulbR * 0.5}
        rx={tubeW / 2} fill="rgba(173,216,230,0.15)" stroke="#64748b" strokeWidth="1.5" />
      {/* Liquid column (red) */}
      <rect x={cx - tubeW / 4} y={topY + tubeH * 0.3} width={tubeW / 2} height={tubeH * 0.7 + bulbR * 0.5}
        rx={tubeW / 4} fill="rgba(220,38,38,0.6)" />
      {/* Bulb */}
      <circle cx={cx} cy={bulbY} r={bulbR} fill="rgba(220,38,38,0.7)" stroke="#64748b" strokeWidth="1.5" />
      {/* Tick marks */}
      {Array.from({ length: 8 }).map((_, i) => {
        const y = topY + 10 + (tubeH - 20) * (i / 7);
        const long = i % 2 === 0;
        return (
          <line key={i} x1={cx + tubeW / 2} y1={y} x2={cx + tubeW / 2 + (long ? 10 : 6)} y2={y}
            stroke="#475569" strokeWidth={long ? 1.2 : 0.8} />
        );
      })}
    </g>
  );
}

function PipetteShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const bulbY = topY + (bottomY - topY) * 0.12;
  const tipStart = bottomY - (bottomY - topY) * 0.15;
  return (
    <g>
      {/* Mouthpiece top */}
      <rect x={cx - radius * 0.6} y={topY} width={radius * 1.2} height={12} rx="3"
        fill="#94a3b8" stroke="#64748b" />
      {/* Main tube */}
      <rect x={cx - radius * 0.5} y={topY + 12} width={radius} height={tipStart - topY - 12}
        fill="rgba(173,216,230,0.18)" stroke="#64748b" strokeWidth="1.5" />
      {/* Grad lines */}
      {Array.from({ length: 6 }).map((_, i) => {
        const y = topY + 30 + ((tipStart - topY - 40) * i) / 5;
        return (
          <line key={i} x1={cx + radius * 0.5} y1={y} x2={cx + radius * 0.5 + (i % 2 === 0 ? 12 : 7)} y2={y}
            stroke="#475569" strokeWidth="1" />
        );
      })}
      {/* Taper to tip */}
      <path d={`M ${cx - radius * 0.5},${tipStart} L ${cx - 1.5},${bottomY} L ${cx + 1.5},${bottomY} L ${cx + radius * 0.5},${tipStart} Z`}
        fill="rgba(173,216,230,0.2)" stroke="#64748b" strokeWidth="1.5" />
      <rect x={cx - radius * 0.5 + 3} y={topY + 14} width={radius * 0.2} height={tipStart - topY - 20}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.5} />
    </g>
  );
}

function DroppingPipetteShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const bulbH = (bottomY - topY) * 0.25;
  const tubeStart = topY + bulbH;
  const tubeW = radius * 0.55;
  return (
    <g>
      {/* Rubber bulb */}
      <ellipse cx={cx} cy={topY + bulbH * 0.55} rx={radius} ry={bulbH * 0.55}
        fill="url(#rubberGrad)" stroke="#334155" strokeWidth="1.5" />
      {/* Glass tube */}
      <rect x={cx - tubeW / 2} y={tubeStart} width={tubeW} height={(bottomY - topY) * 0.6}
        fill="rgba(173,216,230,0.18)" stroke="#64748b" strokeWidth="1.5" />
      {/* Taper tip */}
      <path d={`M ${cx - tubeW / 2},${tubeStart + (bottomY - topY) * 0.6} L ${cx - 1.5},${bottomY} L ${cx + 1.5},${bottomY} L ${cx + tubeW / 2},${tubeStart + (bottomY - topY) * 0.6} Z`}
        fill="rgba(173,216,230,0.2)" stroke="#64748b" strokeWidth="1.5" />
    </g>
  );
}

function SpatulaShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const handleH = (bottomY - topY) * 0.58;
  const bladeH = (bottomY - topY) * 0.42;
  const handleW = radius * 0.55;
  const bladeW = radius * 0.95;
  return (
    <g>
      {/* Handle */}
      <rect x={cx - handleW / 2} y={topY} width={handleW} height={handleH}
        rx={handleW / 2} fill="url(#metalGrad)" stroke="#475569" strokeWidth="1.5" />
      {/* Blade */}
      <rect x={cx - bladeW / 2} y={topY + handleH} width={bladeW} height={bladeH}
        rx="2" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1.5" />
      {/* Highlight */}
      <rect x={cx - bladeW / 2 + 3} y={topY + handleH + 4} width={bladeW * 0.3} height={bladeH - 8}
        fill="rgba(255,255,255,0.25)" rx="1" />
    </g>
  );
}

function TestTubeRackShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const rackH = bottomY - topY;
  const holeR = radius * 0.22;
  const holes = 5;
  const spacing = (radius * 2) / (holes + 1);
  return (
    <g>
      {/* Back rail */}
      <rect x={cx - radius} y={topY} width={radius * 2} height={8} rx="3"
        fill="#94a3b8" stroke="#64748b" />
      {/* Front rail */}
      <rect x={cx - radius} y={topY + rackH * 0.55} width={radius * 2} height={8} rx="3"
        fill="#94a3b8" stroke="#64748b" />
      {/* Side walls */}
      <rect x={cx - radius} y={topY} width={8} height={rackH * 0.6} rx="2"
        fill="#64748b" stroke="#475569" />
      <rect x={cx + radius - 8} y={topY} width={8} height={rackH * 0.6} rx="2"
        fill="#64748b" stroke="#475569" />
      {/* Holes */}
      {Array.from({ length: holes }).map((_, i) => {
        const hx = cx - radius + spacing * (i + 1);
        return (
          <g key={i}>
            <circle cx={hx} cy={topY + 4} r={holeR} fill="#1e293b" stroke="#334155" />
            {/* Mini test tube in hole */}
            <rect x={hx - holeR * 0.6} y={topY + 8} width={holeR * 1.2} height={rackH * 0.48}
              rx={holeR * 0.6} fill="rgba(173,216,230,0.25)" stroke="#64748b" strokeWidth="1" />
          </g>
        );
      })}
      {/* Base */}
      <rect x={cx - radius + 5} y={topY + rackH * 0.63} width={(radius - 5) * 2} height={rackH * 0.37}
        rx="3" fill="#94a3b8" stroke="#64748b" />
    </g>
  );
}

function MagneticStirrerShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const unitH = bottomY - topY;
  const plateY = topY;
  const plateH = 12;
  const bodyH = unitH - plateH;
  return (
    <g>
      {/* Body */}
      <rect x={cx - radius} y={topY + plateH} width={radius * 2} height={bodyH}
        rx="6" fill="url(#metalGrad)" stroke="#475569" strokeWidth="2" />
      {/* Ceramic top plate */}
      <rect x={cx - radius} y={plateY} width={radius * 2} height={plateH}
        rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Speed knob */}
      <circle cx={cx - radius * 0.45} cy={topY + plateH + bodyH * 0.55} r={12}
        fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
      <line x1={cx - radius * 0.45} y1={topY + plateH + bodyH * 0.55 - 7}
            x2={cx - radius * 0.45} y2={topY + plateH + bodyH * 0.55 - 3}
        stroke="#94a3b8" strokeWidth="2" />
      {/* Heat knob */}
      <circle cx={cx + radius * 0.45} cy={topY + plateH + bodyH * 0.55} r={12}
        fill="#7c2d12" stroke="#1e293b" strokeWidth="1.5" />
      <line x1={cx + radius * 0.45} y1={topY + plateH + bodyH * 0.55 - 7}
            x2={cx + radius * 0.45} y2={topY + plateH + bodyH * 0.55 - 3}
        stroke="#fca5a5" strokeWidth="2" />
      {/* LED indicator */}
      <circle cx={cx} cy={topY + plateH + bodyH * 0.3} r={4} fill="#22c55e" opacity={0.9} />
      {/* Stir bar on plate */}
      <rect x={cx - 14} y={plateY + 3} width={28} height={6} rx="3"
        fill="rgba(100,200,255,0.4)" stroke="rgba(100,200,255,0.6)" />
    </g>
  );
}

function StirBarShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const barW = Math.min(radius * 3, 60);
  const barH = radius * 1.2;
  const midY = (topY + bottomY) / 2;
  return (
    <g>
      {/* PTFE bar */}
      <rect x={cx - barW / 2} y={midY - barH / 2} width={barW} height={barH}
        rx={barH / 2} fill="rgba(200,230,255,0.4)" stroke="#64748b" strokeWidth="2" />
      {/* Pivot ring line */}
      <line x1={cx - barW / 2 + 4} y1={midY} x2={cx + barW / 2 - 4} y2={midY}
        stroke="rgba(100,150,200,0.5)" strokeWidth="1" strokeDasharray="3,3" />
      {/* Highlight */}
      <rect x={cx - barW / 2 + 4} y={midY - barH / 2 + 3} width={barW - 8} height={barH / 3}
        rx={barH / 4} fill="rgba(255,255,255,0.35)" />
    </g>
  );
}

function RubberStopperShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const topR = radius;
  const botR = radius * 0.72;
  const h = bottomY - topY;
  return (
    <g>
      <path
        d={`M ${cx - topR},${topY}
           L ${cx - botR},${bottomY}
           L ${cx + botR},${bottomY}
           L ${cx + topR},${topY} Z`}
        fill="url(#rubberGrad)" stroke="#334155" strokeWidth="2" />
      {/* Top ellipse */}
      <ellipse cx={cx} cy={topY} rx={topR} ry={5} fill="#475569" stroke="#334155" />
      {/* Bore hole (drilled) */}
      <ellipse cx={cx} cy={(topY + bottomY) / 2} rx={radius * 0.2} ry={h * 0.45}
        fill="#1e293b" opacity={0.6} />
    </g>
  );
}

function GlassTubingShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  // Show horizontal tube (as stored in lab)
  const tubeR = radius;
  const tubeH = bottomY - topY;
  return (
    <g>
      {/* Outer tube */}
      <rect x={cx - tubeR} y={topY} width={tubeR * 2} height={tubeH}
        rx={tubeR} fill="rgba(173,216,230,0.15)" stroke="#64748b" strokeWidth="2" />
      {/* Inner bore */}
      <rect x={cx - tubeR + 4} y={topY + 4} width={(tubeR - 4) * 2} height={tubeH - 8}
        rx={tubeR - 4} fill="rgba(0,0,0,0.12)" />
      {/* End fire-polish glint */}
      <ellipse cx={cx} cy={topY} rx={tubeR} ry={4} fill="rgba(255,255,255,0.3)" />
      <ellipse cx={cx} cy={bottomY} rx={tubeR} ry={4} fill="rgba(255,255,255,0.3)" />
      {/* Highlight stripe */}
      <rect x={cx - tubeR + 3} y={topY + 6} width={tubeR * 0.4} height={tubeH - 12}
        fill="url(#glassReflect)" pointerEvents="none" opacity={0.5} />
    </g>
  );
}

function InoculationLoopShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const handleH = (bottomY - topY) * 0.72;
  const loopR = radius * 0.6;
  const wireY = topY + handleH;
  return (
    <g>
      {/* Handle */}
      <rect x={cx - radius * 0.25} y={topY} width={radius * 0.5} height={handleH}
        rx={radius * 0.25} fill="url(#metalGrad)" stroke="#475569" strokeWidth="1.5" />
      {/* Wire */}
      <line x1={cx} y1={wireY} x2={cx} y2={wireY + 12}
        stroke="#94a3b8" strokeWidth="1.5" />
      {/* Loop */}
      <circle cx={cx} cy={wireY + 12 + loopR} r={loopR}
        fill="none" stroke="#94a3b8" strokeWidth="2" />
    </g>
  );
}

function BuchnerFunnelShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const plateY = topY + (bottomY - topY) * 0.3;
  const stemH = (bottomY - topY) * 0.5;
  const stemW = radius * 0.3;
  return (
    <g>
      {/* Cylinder walls */}
      <rect x={cx - radius} y={topY} width={radius * 2} height={(plateY - topY) + 10}
        fill="rgba(173,216,230,0.1)" stroke="#94a3b8" strokeWidth="2" />
      {/* Perforated plate */}
      <rect x={cx - radius} y={plateY} width={radius * 2} height={10}
        fill="url(#ceramicGrad)" stroke="#94a3b8" strokeWidth="2" />
      {/* Holes in plate */}
      {[-2, -1, 0, 1, 2].map(i => (
        <circle key={i} cx={cx + i * (radius * 0.3)} cy={plateY + 5} r={2.5}
          fill="#1e293b" opacity={0.6} />
      ))}
      {/* Stem */}
      <rect x={cx - stemW} y={plateY + 10} width={stemW * 2} height={stemH}
        fill="rgba(173,216,230,0.15)" stroke="#94a3b8" strokeWidth="1.5" />
    </g>
  );
}

function FireExtinguisherShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const h = bottomY - topY;
  const bodyH = h * 0.75;
  const neckH = h * 0.1;
  const valveH = h * 0.08;
  const hoseY = topY + valveH + neckH * 0.5;
  return (
    <g>
      {/* Cylinder body */}
      <rect x={cx - radius} y={topY + valveH + neckH} width={radius * 2} height={bodyH}
        rx="6" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
      {/* CO₂ label band */}
      <rect x={cx - radius} y={topY + valveH + neckH + bodyH * 0.15} width={radius * 2} height={bodyH * 0.35}
        rx="0" fill="#1e293b" opacity={0.35} />
      <text x={cx} y={topY + valveH + neckH + bodyH * 0.37} textAnchor="middle"
        fontSize="13" fill="white" fontFamily="monospace" fontWeight="bold">CO₂</text>
      {/* Neck */}
      <rect x={cx - radius * 0.38} y={topY + valveH} width={radius * 0.76} height={neckH}
        fill="#b91c1c" stroke="#991b1b" />
      {/* Valve head */}
      <rect x={cx - radius * 0.55} y={topY} width={radius * 1.1} height={valveH}
        rx="3" fill="#475569" stroke="#1e293b" />
      {/* Safety pin */}
      <line x1={cx - radius * 0.55} y1={topY + valveH * 0.5} x2={cx - radius * 0.55 - 14} y2={topY + valveH * 0.5}
        stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Hose */}
      <path d={`M ${cx + radius * 0.55},${hoseY} Q ${cx + radius + 20},${hoseY + 20} ${cx + radius + 18},${hoseY + 60}`}
        fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
      {/* Horn */}
      <path d={`M ${cx + radius + 14},${hoseY + 56} L ${cx + radius + 26},${hoseY + 58} L ${cx + radius + 20},${hoseY + 72} L ${cx + radius + 8},${hoseY + 70} Z`}
        fill="#1e293b" />
      {/* Base dome */}
      <ellipse cx={cx} cy={bottomY} rx={radius} ry={6} fill="#b91c1c" stroke="#991b1b" />
    </g>
  );
}

function EyeWashStationShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const h = bottomY - topY;
  const headY = topY + h * 0.12;
  const headR = radius * 0.7;
  const pipeW = radius * 0.22;
  return (
    <g>
      {/* Pipe / stand */}
      <rect x={cx - pipeW / 2} y={topY + h * 0.2} width={pipeW} height={h * 0.55}
        fill="url(#metalGrad)" stroke="#475569" strokeWidth="1" />
      {/* Base plate */}
      <rect x={cx - radius} y={bottomY - 14} width={radius * 2} height={14}
        rx="4" fill="url(#metalGrad)" stroke="#475569" strokeWidth="1.5" />
      {/* Eye-wash head */}
      <ellipse cx={cx} cy={headY} rx={headR} ry={10}
        fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      {/* Nozzles */}
      {[-1, 1].map(s => (
        <g key={s}>
          <ellipse cx={cx + s * headR * 0.55} cy={headY - 6} rx={8} ry={8}
            fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Water spray arcs */}
          <path d={`M ${cx + s * headR * 0.55},${headY - 14} Q ${cx + s * (headR * 0.55 + 16)},${headY - 30} ${cx + s * (headR * 0.55 + 10)},${headY - 42}`}
            fill="none" stroke="rgba(100,180,255,0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <path d={`M ${cx + s * headR * 0.55},${headY - 14} Q ${cx + s * (headR * 0.55 + 4)},${headY - 34} ${cx + s * (headR * 0.55 - 6)},${headY - 44}`}
            fill="none" stroke="rgba(100,180,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      ))}
      {/* Push pad */}
      <ellipse cx={cx} cy={headY + 8} rx={radius * 0.28} ry={5}
        fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
      <text x={cx} y={headY + 12} textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">PUSH</text>
      {/* ANSI label */}
      <text x={cx} y={bottomY - 18} textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="monospace">ANSI Z358.1</text>
    </g>
  );
}

function SafetyGogglesShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const h = bottomY - topY;
  const lensW = radius * 0.9;
  const lensH = h * 0.5;
  const lensY = topY + h * 0.18;
  const lensGap = 10;
  return (
    <g>
      {/* Headband strap */}
      <path d={`M ${cx - radius},${lensY + lensH * 0.5} Q ${cx - radius - 10},${lensY - 8} ${cx - lensW - lensGap / 2},${lensY + lensH * 0.4}`}
        fill="none" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
      <path d={`M ${cx + radius},${lensY + lensH * 0.5} Q ${cx + radius + 10},${lensY - 8} ${cx + lensW + lensGap / 2},${lensY + lensH * 0.4}`}
        fill="none" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
      {/* Left lens */}
      <rect x={cx - lensW - lensGap / 2} y={lensY} width={lensW} height={lensH}
        rx={lensH * 0.3} fill="rgba(173,216,230,0.3)" stroke="#475569" strokeWidth="2" />
      {/* Right lens */}
      <rect x={cx + lensGap / 2} y={lensY} width={lensW} height={lensH}
        rx={lensH * 0.3} fill="rgba(173,216,230,0.3)" stroke="#475569" strokeWidth="2" />
      {/* Bridge */}
      <rect x={cx - lensGap / 2} y={lensY + lensH * 0.25} width={lensGap} height={lensH * 0.5}
        rx="3" fill="#475569" />
      {/* Lens highlights */}
      <rect x={cx - lensW - lensGap / 2 + 6} y={lensY + 6} width={lensW * 0.3} height={lensH * 0.3}
        rx="3" fill="rgba(255,255,255,0.4)" />
      <rect x={cx + lensGap / 2 + 6} y={lensY + 6} width={lensW * 0.3} height={lensH * 0.3}
        rx="3" fill="rgba(255,255,255,0.4)" />
      {/* Vent dots */}
      {[-1, 1].map(s =>
        [0, 1, 2].map(i => (
          <circle key={`${s}-${i}`}
            cx={cx + s * (lensW * 0.72 + lensGap / 2 - 4)}
            cy={lensY + lensH * 0.2 + i * lensH * 0.28}
            r={2.5} fill="#334155" />
        ))
      )}
      {/* EN 166 label */}
      <text x={cx} y={bottomY - 5} textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="monospace">EN 166 / ANSI Z87.1</text>
    </g>
  );
}

function LabCoatShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const h = bottomY - topY;
  const shoulderW = radius;
  const hipW = radius * 1.2;
  const neckR = radius * 0.22;
  const collarY = topY + h * 0.09;
  return (
    <g>
      {/* Main coat body */}
      <path
        d={`M ${cx - neckR - 4},${topY}
           L ${cx - shoulderW - 12},${topY + h * 0.08}
           L ${cx - hipW},${bottomY}
           L ${cx + hipW},${bottomY}
           L ${cx + shoulderW + 12},${topY + h * 0.08}
           L ${cx + neckR + 4},${topY} Z`}
        fill="rgba(240,248,255,0.7)" stroke="#94a3b8" strokeWidth="2" />
      {/* Left lapel */}
      <path d={`M ${cx - neckR - 4},${topY} L ${cx - neckR},${collarY + 8} L ${cx},${collarY + 18} L ${cx - shoulderW * 0.4},${collarY + 30}`}
        fill="rgba(210,230,250,0.8)" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Right lapel */}
      <path d={`M ${cx + neckR + 4},${topY} L ${cx + neckR},${collarY + 8} L ${cx},${collarY + 18} L ${cx + shoulderW * 0.4},${collarY + 30}`}
        fill="rgba(210,230,250,0.8)" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Buttons */}
      {[0.38, 0.55, 0.72].map((f, i) => (
        <circle key={i} cx={cx} cy={topY + h * f} r={3.5}
          fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
      ))}
      {/* Left pocket */}
      <rect x={cx - hipW * 0.72} y={topY + h * 0.58} width={radius * 0.55} height={h * 0.15}
        rx="2" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Right pocket */}
      <rect x={cx + hipW * 0.72 - radius * 0.55} y={topY + h * 0.58} width={radius * 0.55} height={h * 0.15}
        rx="2" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Left sleeve */}
      <path d={`M ${cx - shoulderW - 12},${topY + h * 0.08} L ${cx - shoulderW - 22},${topY + h * 0.55} L ${cx - shoulderW - 5},${topY + h * 0.55} L ${cx - shoulderW * 0.82},${topY + h * 0.08} Z`}
        fill="rgba(240,248,255,0.7)" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Right sleeve */}
      <path d={`M ${cx + shoulderW + 12},${topY + h * 0.08} L ${cx + shoulderW + 22},${topY + h * 0.55} L ${cx + shoulderW + 5},${topY + h * 0.55} L ${cx + shoulderW * 0.82},${topY + h * 0.08} Z`}
        fill="rgba(240,248,255,0.7)" stroke="#94a3b8" strokeWidth="1.5" />
    </g>
  );
}

function GlovesShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  const h = bottomY - topY;
  const cuffH = h * 0.28;
  const palmH = h * 0.38;
  const fingerH = h * 0.34;
  const palmW = radius * 1.1;
  const fingers = [
    { x: -0.52, w: 0.22 }, { x: -0.24, w: 0.24 },
    { x: 0.04,  w: 0.24 }, { x: 0.32,  w: 0.22 },
  ];
  const thumbX = cx - palmW - 14;
  return (
    <g>
      {/* Cuff */}
      <rect x={cx - palmW} y={topY + fingerH + palmH} width={palmW * 2} height={cuffH}
        rx="4" fill="rgba(100,150,230,0.25)" stroke="#64748b" strokeWidth="2" />
      {/* Palm */}
      <rect x={cx - palmW} y={topY + fingerH} width={palmW * 2} height={palmH + 4}
        rx="4" fill="rgba(100,150,230,0.22)" stroke="#64748b" strokeWidth="2" />
      {/* Fingers */}
      {fingers.map((f, i) => (
        <rect key={i}
          x={cx + f.x * palmW * 2 - (f.w * palmW)}
          y={topY}
          width={f.w * palmW * 2 - 3}
          height={fingerH + 8}
          rx={f.w * palmW - 1}
          fill="rgba(100,150,230,0.22)" stroke="#64748b" strokeWidth="1.5" />
      ))}
      {/* Thumb */}
      <ellipse cx={thumbX + 6} cy={topY + fingerH * 0.7} rx={10} ry={fingerH * 0.55}
        fill="rgba(100,150,230,0.22)" stroke="#64748b" strokeWidth="1.5"
        transform={`rotate(-30,${thumbX + 6},${topY + fingerH * 0.7})`} />
      {/* Nitrile label */}
      <text x={cx} y={topY + fingerH + palmH * 0.55} textAnchor="middle"
        fontSize="9" fill="#475569" fontFamily="monospace">NITRILE</text>
    </g>
  );
}

// ---------------------------------------------------------------------------
// Fallback — unknown equipment
// ---------------------------------------------------------------------------
function FallbackShape({
  cx, topY, bottomY, radius,
}: { cx: number; topY: number; bottomY: number; radius: number }) {
  return (
    <g>
      <rect x={cx - radius} y={topY} width={radius * 2} height={bottomY - topY}
        rx="6" fill="rgba(100,100,100,0.1)" stroke="#64748b" strokeWidth="1.5" strokeDasharray="6,3" />
      <text x={cx} y={(topY + bottomY) / 2} textAnchor="middle"
        fontSize="11" fill="#94a3b8" fontFamily="monospace">No preview</text>
    </g>
  );
}

// ---------------------------------------------------------------------------
// Spec badge strip  (top-left overlay)
// ---------------------------------------------------------------------------
function SpecBadge({
  height_mm, diameter_mm, scale, extras,
}: {
  height_mm: number;
  diameter_mm: number;
  scale: number;
  extras?: { label: string; value: string }[];
}) {
  return (
    <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
      <span className="text-[10px] font-black text-primary-container uppercase tracking-[0.3em]">
        Engineering Spec
      </span>
      <div className="flex items-center gap-4 bg-black/30 backdrop-blur-sm p-3 rounded-2xl border border-white/10">
        {height_mm > 0 && (
          <>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white/35 uppercase">H (Z-axis)</span>
              <span className="text-sm font-mono font-black text-white/85">{height_mm}mm</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
          </>
        )}
        {diameter_mm > 0 && (
          <>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white/35 uppercase">Bore (Ø)</span>
              <span className="text-sm font-mono font-black text-white/85">{diameter_mm}mm</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
          </>
        )}
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-white/35 uppercase">Scale</span>
          <span className="text-sm font-mono font-black text-primary-container">x{scale.toFixed(2)}</span>
        </div>
        {extras?.map(({ label, value }) => (
          <React.Fragment key={label}>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-white/35 uppercase">{label}</span>
              <span className="text-sm font-mono font-black text-white/85">{value}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main renderer
// ---------------------------------------------------------------------------
export const GlasswareRenderer: React.FC<GlasswareRendererProps> = ({
  equipment,
  measurement,
}) => {
  const {
    capacity_ml,
    height_mm,
    diameter_mm,
    graduation_step_ml,
  } = measurement;

  // Extra typed fields via safe accessor
  const neck_diameter_mm  = get<number>(measurement, 'neck_diameter_mm', 0);
  const tolerance_ml      = get<string>(measurement, 'tolerance_ml', '');
  const range_c           = get<string>(measurement, 'range_c', '');
  const sizes             = get<string>(measurement, 'sizes', '');
  const co2_kg            = get<number>(measurement, 'co2_kg', 0);
  const flow_lpm          = get<number>(measurement, 'flow_lpm', 0);
  const loop_volume_ul    = get<number>(measurement, 'loop_volume_ul', 0);
  const max_temp_c        = get<number>(measurement, 'max_temp_c', 0);
  const blade_width_mm    = get<number>(measurement, 'blade_width_mm', 0);
  const od_mm             = get<number>(measurement, 'od_mm', 0);
  const size_mm           = get<string>(measurement, 'size_mm', '');

  // Use diameter or fallback
  const effectiveDiameter = diameter_mm > 0 ? diameter_mm : 80;
  const effectiveHeight   = height_mm   > 0 ? height_mm   : 80;

  const scale = computeScale(effectiveHeight, effectiveDiameter);

  const svgWidth  = Math.max(effectiveDiameter * scale + 160, 420);
  const svgHeight = effectiveHeight * scale + 120;

  const centerX = svgWidth / 2;
  const bottomY = svgHeight - 60;
  const topY    = bottomY - effectiveHeight * scale;
  const radius  = (effectiveDiameter * scale) / 2;

  const containerHeight = svgHeight + 66;

  // Extra spec badges per equipment type
  const extraBadges: { label: string; value: string }[] = [];
  if (tolerance_ml)  extraBadges.push({ label: 'Tolerance', value: tolerance_ml + ' mL' });
  if (range_c)       extraBadges.push({ label: 'Range', value: range_c + '°C' });
  if (sizes)         extraBadges.push({ label: 'Size', value: sizes });
  if (co2_kg)        extraBadges.push({ label: 'CO₂', value: co2_kg + ' kg' });
  if (flow_lpm)      extraBadges.push({ label: 'Flow', value: flow_lpm + ' L/min' });
  if (loop_volume_ul)extraBadges.push({ label: 'Loop vol', value: loop_volume_ul + ' µL' });
  if (max_temp_c)    extraBadges.push({ label: 'Max T', value: max_temp_c + '°C' });
  if (blade_width_mm)extraBadges.push({ label: 'Blade W', value: blade_width_mm + ' mm' });
  if (od_mm)         extraBadges.push({ label: 'OD', value: od_mm + ' mm' });
  if (size_mm)       extraBadges.push({ label: 'Size', value: size_mm });

  // Shared shape props
  const shapeProps = { cx: centerX, topY, bottomY, radius };

  // Neck params (for flask-type shapes)
  const neckR = ((neck_diameter_mm || 20) * scale) / 2;
  const neckH = (effectiveHeight * 0.3) * scale;

  const renderShape = () => {
    switch (equipment.id) {
      case 'beaker':           return <BeakerShape {...shapeProps} />;
      case 'erlenmeyer':       return <ErlenmeyerShape {...shapeProps} neckR={neckR} neckH={neckH} />;
      case 'separatory_funnel':return <SeparatoryFunnelShape {...shapeProps} neckR={neckR} neckH={neckH * 0.5} />;
      case 'condenser':        return <CondenserShape {...shapeProps} />;
      case 'filtering_flask':  return <FilteringFlaskShape {...shapeProps} neckR={neckR} neckH={neckH} />;
      case 'measuring_cylinder':return <MeasuringCylinderShape {...shapeProps} scale={scale} />;
      case 'burette':          return <BuretteShape {...shapeProps} />;
      case 'volumetric_flask': return <VolumetricFlaskShape {...shapeProps} neckR={neckR} neckH={(effectiveHeight * 0.6) * scale} />;
      case 'round_bottom_flask':return <RoundBottomFlaskShape {...shapeProps} neckR={neckR} />;
      case 'reagent_bottle':   return <ReagentBottleShape {...shapeProps} />;
      case 'crucible':         return <CrucibleShape {...shapeProps} />;
      case 'test_tube':        return <TestTubeShape {...shapeProps} />;
      case 'petri_dish':       return <PetriDishShape {...shapeProps} height_mm={effectiveHeight} scale={scale} />;
      case 'watch_glass':      return <WatchGlassShape {...shapeProps} />;
      case 'evaporating_dish': return <EvaporatingDishShape {...shapeProps} />;
      case 'desiccator':       return <DesiccatorShape {...shapeProps} />;
      case 'wash_bottle':      return <WashBottleShape {...shapeProps} />;
      case 'bunsen_burner':    return <BunsenBurnerShape {...shapeProps} />;
      case 'tripod_stand':     return <TripodStandShape {...shapeProps} />;
      case 'wire_gauze':       return <WireGauzeShape {...shapeProps} />;
      case 'retort_stand':     return <RetortStandShape {...shapeProps} />;
      case 'funnel':           return <FunnelShape {...shapeProps} />;
      case 'mortar_pestle':    return <MortarPestleShape {...shapeProps} />;
      case 'thermometer':      return <ThermometerShape {...shapeProps} />;
      case 'pipette':          return <PipetteShape {...shapeProps} />;
      case 'dropper':          return <DroppingPipetteShape {...shapeProps} />;
      case 'spatula':          return <SpatulaShape {...shapeProps} />;
      case 'test_tube_rack':   return <TestTubeRackShape {...shapeProps} />;
      case 'magnetic_stirrer': return <MagneticStirrerShape {...shapeProps} />;
      case 'stir_bar':         return <StirBarShape {...shapeProps} />;
      case 'rubber_stopper':   return <RubberStopperShape {...shapeProps} />;
      case 'glass_tubing':     return <GlassTubingShape {...shapeProps} />;
      case 'inoculation_loop': return <InoculationLoopShape {...shapeProps} />;
      case 'buchner_funnel':   return <BuchnerFunnelShape {...shapeProps} />;
      case 'fire_extinguisher':return <FireExtinguisherShape {...shapeProps} />;
      case 'eye_wash_station': return <EyeWashStationShape {...shapeProps} />;
      case 'safety_goggles':   return <SafetyGogglesShape {...shapeProps} />;
      case 'lab_coat':         return <LabCoatShape {...shapeProps} />;
      case 'gloves':           return <GlovesShape {...shapeProps} />;
      default:                 return <FallbackShape {...shapeProps} />;
    }
  };

  // Items that already include graduations baked into their shape
  const skipGraduations = new Set([
    'petri_dish', 'crucible', 'wash_bottle', 'watch_glass', 'evaporating_dish',
    'desiccator', 'bunsen_burner', 'tripod_stand', 'wire_gauze', 'retort_stand',
    'mortar_pestle', 'stir_bar', 'rubber_stopper', 'glass_tubing', 'inoculation_loop',
    'magnetic_stirrer', 'test_tube_rack', 'spatula', 'dropper', 'thermometer',
    'funnel', 'fire_extinguisher', 'eye_wash_station', 'safety_goggles', 'lab_coat',
    'gloves', 'separatory_funnel', 'condenser', 'reagent_bottle', 'round_bottom_flask',
    'volumetric_flask', 'buchner_funnel',
  ]);

  // Items that render reflections
  const showReflect = !new Set([
    'petri_dish', 'crucible', 'wash_bottle', 'watch_glass', 'evaporating_dish',
    'desiccator', 'bunsen_burner', 'tripod_stand', 'wire_gauze', 'retort_stand',
    'mortar_pestle', 'stir_bar', 'rubber_stopper', 'glass_tubing', 'inoculation_loop',
    'magnetic_stirrer', 'test_tube_rack', 'spatula', 'dropper', 'thermometer',
    'fire_extinguisher', 'eye_wash_station', 'safety_goggles', 'lab_coat', 'gloves',
  ]).has(equipment.id);

  return (
    <div
      style={{ height: `${containerHeight}px` }}
      className="glass-panel flex justify-center items-center w-full overflow-hidden rounded-3xl relative border border-white/10 p-8 neumorphic-inset"
    >
      <SpecBadge
        height_mm={height_mm}
        diameter_mm={diameter_mm}
        scale={scale}
        extras={extraBadges.slice(0, 2)} // cap at 2 to avoid badge overflow
      />

      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="transition-all duration-700 ease-out drop-shadow-md"
      >
        <GlassDefs />

        {renderShape()}

        {/* Shared vertical glass highlight stripe — only for tall cylindrical glass */}
        {showReflect && (
          <rect
            x={centerX - radius + 4}
            y={topY + 10}
            width={radius * 0.4}
            height={effectiveHeight * scale - 20}
            fill="url(#glassReflect)"
            pointerEvents="none"
            className="opacity-60"
          />
        )}

        {/* Graduation marks */}
        {!skipGraduations.has(equipment.id) && (
          <Graduations
            capacity_ml={capacity_ml}
            graduation_step_ml={graduation_step_ml}
            topY={topY}
            bottomY={bottomY}
            rightEdge={centerX + radius}
            scale={scale}
            topDown={equipment.id === 'burette'}
          />
        )}

        {/* Material label */}
        <text
          x={centerX}
          y={bottomY + 35}
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill="rgba(245,222,211,0.35)"
          className="select-none tracking-widest uppercase opacity-60"
        >
          {equipment.material}
        </text>
      </svg>
    </div>
  );
};