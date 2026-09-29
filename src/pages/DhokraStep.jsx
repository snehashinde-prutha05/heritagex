import { Link } from 'react-router-dom';
import MediaVideo from '../components/MediaVideo';
import dhokra from '../data/dhokra.json';
export default function DhokraStep({ id }) {
  const total = dhokra.steps.length;
  const s = dhokra.steps.find((x) => x.id === id);
  const base = '/ar-studio/dhokra';
  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-mute">
        <Link to="/ar-studio" className="hover:text-ink">AR Studio</Link> / <Link to={base} className="hover:text-ink">Dhokra</Link> / <span className="text-ink">Step {id}</span>
      </nav>
      <h1 className="text-3xl font-bold md:text-4xl">{s.title}</h1>
      <div className="mt-4 flex items-center gap-3" role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={id} aria-label="Step progress">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-line"><div className="h-full rounded-full bg-brand" style={{ width: `${(id / total) * 100}%` }} /></div>
        <span className="text-sm font-semibold text-mute">{id}/{total}</span>
      </div>
      <div className="mt-6"><MediaVideo src={`/videos/dhokra_step${id}.mp4`} title={s.title} /></div>
      <p className="mt-6 text-lg leading-8">{s.description}</p>
      <h2 className="mb-2 mt-6 font-bold">Materials</h2>
      <ul className="flex flex-wrap gap-2">{s.materials.map((m) => <li key={m} className="rounded-full border border-line bg-card px-4 py-1.5 text-sm">{m}</li>)}</ul>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
        {id > 1 ? <Link to={`${base}/step-${id - 1}`} className="btn-ghost">Previous</Link> : <span className="btn-ghost pointer-events-none opacity-40" aria-disabled="true">Previous</span>}
        <Link to="/explore" className="btn-ghost">Explore This Step</Link>
        {id < total ? <Link to={`${base}/step-${id + 1}`} className="btn">Next</Link> : <Link to="/ar-studio" className="btn">Return to AR Studio</Link>}
      </div>
    </div>
  );
}
