import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function HeritageCard({ to, title, lines = [], tone = ['#b5651d', '#6e3b12'], image, status, cta, disabled }) {
  const [missing, setMissing] = useState(false);
  const cls = 'block overflow-hidden rounded-2xl border border-line bg-card shadow-soft';
  const body = (
    <>
      <div className="relative flex h-44 items-end p-4" style={{ background: `linear-gradient(135deg,${tone[0]},${tone[1]})` }}>
        {image && <img src={image} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; setMissing(true); }} className="absolute inset-0 h-full w-full object-cover" />}
        {image && missing && <span className="absolute left-3 top-3 max-w-[85%] rounded-lg bg-black/30 px-2 py-1 text-[11px] text-white/90">Add image: {image}</span>}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        <h3 className="relative text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 text-sm">
        <div className="min-w-0 text-mute">{lines.map((l) => <div key={l}>{l}</div>)}</div>
        {status && <span className={`shrink-0 whitespace-nowrap font-semibold ${disabled ? 'text-accent2' : 'text-ink'}`}>{status}</span>}
        {cta && <span className="shrink-0 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-white">{cta}</span>}
      </div>
    </>
  );
  return disabled
    ? <div aria-disabled="true" className={`${cls} opacity-70`}>{body}</div>
    : <Link to={to} className={`${cls} transition hover:-translate-y-0.5`}>{body}</Link>;
}
