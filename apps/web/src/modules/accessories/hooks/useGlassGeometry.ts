import type { Measurement } from "../types";

export const useGlassGeometry = (measurement: Measurement) => {
  const { height_mm, diameter_mm } = measurement;

  const baseScale = 2;
  const width = diameter_mm * baseScale + 100;
  const height = height_mm * baseScale + 40;

  const centerX = width / 2;
  const bottomY = height - 20;
  const topY = bottomY - height_mm * baseScale;
  const radius = (diameter_mm * baseScale) / 2;

  return {
    baseScale,
    width,
    height,
    centerX,
    bottomY,
    topY,
    radius,
  };
};
