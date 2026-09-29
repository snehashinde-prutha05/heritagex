import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import dhokra from '../data/dhokra.json';
export default function DhokraLanding() {
  return (
    <>
      <PageHeader title="Dhokra" subtitle={dhokra.overview} />
      <div className="mx-auto max-w-3xl px-5">
        <ol className="space-y-3">
          {dhokra.steps.map((s) => (
            <li key={s.id}>
              <Link to={`/ar-studio/dhokra/step-${s.id}`} className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4 shadow-soft transition hover:-translate-y-0.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-bold text-white">{s.id}</span>
                <span><span className="block font-semibold">{s.title}</span><span className="text-sm text-mute">{s.description}</span></span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center"><Link to="/ar-studio/dhokra/step-1" className="btn">Start Step 1</Link></div>
      </div>
    </>
  );
}
