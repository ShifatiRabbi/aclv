/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface ElementInfoSectionProps {
  title: string;
  data: { label: string; value: string }[];
}

export function ElementInfoSection({ title, data }: ElementInfoSectionProps) {
  return (
    <div className="bg-black/20 p-5 rounded-xl border border-white/5 h-full">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-l-2 border-orange-500 pl-3">
        {title}
      </h3>
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1 border-b border-white/5 pb-2 last:border-0">
            <span className="text-[10px] text-gray-500 font-mono font-semibold uppercase">{item.label}</span>
            <span className="text-white text-sm font-mono">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
