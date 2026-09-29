import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { items } from '../data/oralHeritage.json';
import PhotoSlots from '../components/PhotoSlots';
import MediaAudio from '../components/MediaAudio';
import AskBox from '../components/AskBox';
const Placeholder = ({ title, hint }) => (
  <section className="rounded-2xl border-2 border-dashed border-line bg-card p-5"><h2 className="mb-1 font-bold">{title}</h2><p className="text-sm text-mute">{hint}</p></section>
);
export default function OralDetail() {
  const { slug } = useParams();
  const item = items.find((i) => i.slug === slug);
  const [entity, setEntity] = useState(null);
  if (!item) return <Navigate to="/oral-heritage" replace />;
  const mr = item.lang === 'mr';
  return (
    <div className="mx-auto max-w-4xl space-y-5 px-5 py-8">
      <nav aria-label="Breadcrumb" className="text-sm text-mute"><Link to="/oral-heritage" className="hover:text-ink">Oral Heritage</Link> / <span className="text-ink">{item.title}</span></nav>
      <div>
        <h1 className={`text-3xl font-bold md:text-4xl ${mr ? 'font-deva' : ''}`}>{item.title}</h1>
        <p className="mt-1 text-mute">{item.category}. Region: {item.region}</p>
      </div>
      <PhotoSlots paths={[1, 2, 3].map((n) => `/images/oral/${item.slug}-photo-${n}.jpg`)} />
      <MediaAudio src={item.audio} title={item.title} />
      <section className="rounded-2xl border border-line bg-card p-5 shadow-soft">
        <h2 className="mb-3 text-lg font-bold">About this recording</h2>
        <div className={`space-y-3 leading-8 text-mute ${mr ? 'font-deva' : ''}`}>{item.description.map((p) => <p key={p}>{p}</p>)}</div>
        {item.themes.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">{item.themes.map((t) => <span key={t} className="rounded-full border border-line bg-paper px-3 py-1 text-xs">{t}</span>)}</div>
        )}
      </section>
      {item.transcript ? <section className="rounded-2xl border border-line bg-card p-5"><h2 className="mb-2 font-bold">Transcript</h2><p className={mr ? 'font-deva' : ''}>{item.transcript}</p></section>
        : <Placeholder title="Transcript" hint="Add the transcript in src/data/oralHeritage.json (field: transcript)." />}
      {item.translation ? <section className="rounded-2xl border border-line bg-card p-5"><h2 className="mb-2 font-bold">Translation</h2><p>{item.translation}</p></section>
        : <Placeholder title="Translation" hint="Add the translation in src/data/oralHeritage.json (field: translation)." />}
      {item.entities.length > 0 && (
        <section className="rounded-2xl border border-line bg-card p-5 shadow-soft">
          <h2 className="mb-1 font-bold">Cultural references</h2>
          <p className="mb-3 text-sm text-mute">Tap a reference to see its context. The original recording is never replaced, only annotated.</p>
          <div className="flex flex-wrap gap-2">
            {item.entities.map((e) => (
              <button key={e.label} onClick={() => setEntity(entity === e ? null : e)} aria-pressed={entity === e}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${entity === e ? 'border-transparent bg-brand text-white' : 'border-line bg-paper'}`}>{e.label}</button>
            ))}
          </div>
          {entity && <div className="mt-4 rounded-xl border-[3px] border-double border-ink/60 bg-white p-4"><b>{entity.label}</b><p className="mt-1 text-mute">{entity.info}</p></div>}
        </section>
      )}
      <AskBox title="Ask about this recording" questions={item.questions} source={`Original recording and verified notes, ${item.title}.`} />
    </div>
  );
}
