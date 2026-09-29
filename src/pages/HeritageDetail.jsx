import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getHeritage } from '../utils/heritage';
import ExploreTab from '../components/ExploreTab';
import LearnTab from '../components/LearnTab';
import TryTab from '../components/TryTab';
const tabs = [['explore', 'Explore'], ['learn', 'Learn'], ['try', 'Try']];
export default function HeritageDetail() {
  const { slug } = useParams();
  const h = getHeritage(slug);
  const [tab, setTab] = useState('explore');
  if (!h) return <Navigate to="/explore" replace />;
  return (
    <div className="mx-auto max-w-6xl px-5 py-8">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-mute"><Link to="/explore" className="hover:text-ink">Explore</Link> / <span className="text-ink">{h.title}</span></nav>
      <h1 className="text-3xl font-bold md:text-4xl">{h.title}</h1>
      <p className="mt-1 text-mute">{h.category}. Region: {h.region}</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[190px_1fr]">
        <div role="tablist" className="sticky top-0 z-20 -mx-5 flex gap-2 bg-paper px-5 py-2 md:top-20 lg:top-24 lg:mx-0 lg:flex-col lg:self-start lg:px-0">
          {tabs.map(([k, l]) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
              className={`flex-1 rounded-full border px-5 py-2.5 text-sm font-semibold lg:flex-none lg:text-left ${tab === k ? 'border-transparent bg-brand text-white' : 'border-line bg-card text-mute'}`}>{l}</button>
          ))}
        </div>
        <div>
          {tab === 'explore' && <ExploreTab h={h} />}
          {tab === 'learn' && <LearnTab h={h} />}
          {tab === 'try' && <TryTab h={h} />}
        </div>
      </div>
    </div>
  );
}
