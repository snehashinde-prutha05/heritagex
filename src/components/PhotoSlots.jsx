import { useState } from 'react';
// Three photo placeholders. Drop the files at the listed paths, or click a slot to preview a photo locally.
function Slot({ src, label }) {
  const [broken, setBroken] = useState(false);
  const [local, setLocal] = useState(null);
  const shown = local || (!broken && src);
  return (
    <label className="relative block aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-line bg-card">
      {shown ? (
        <img src={shown} alt={label} loading="lazy" onError={() => setBroken(true)} className="h-full w-full object-cover" />
      ) : (
        <span className="grid h-full place-items-center p-2 text-center text-[11px] text-mute sm:text-xs">
          <span><b className="block text-sm text-ink">{label}</b><span className="hidden sm:block">Add <code>{src}</code></span>or click to preview a photo</span>
        </span>
      )}
      <input type="file" accept="image/*" className="sr-only" onChange={(e) => { const f = e.target.files[0]; if (f) setLocal(URL.createObjectURL(f)); }} />
    </label>
  );
}
export default function PhotoSlots({ paths }) {
  return <div className="grid grid-cols-3 gap-3">{paths.map((p, i) => <Slot key={p} src={p} label={`Photo ${i + 1}`} />)}</div>;
}
