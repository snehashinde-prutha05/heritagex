import about from '../data/about.json';
export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-4xl">{about.title}</h1>
      <div className="mt-6 space-y-3 leading-7 text-mute">{about.intro.map((p) => <p key={p}>{p}</p>)}</div>
      <h2 className="mb-4 mt-10 text-2xl font-bold">How HeritageX works</h2>
      <ol className="grid gap-4 sm:grid-cols-2">
        {about.stages.map((s, i) => (
          <li key={s.title} className="flex gap-3 rounded-2xl border border-line bg-card p-4 shadow-soft">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
            <span><b className="block">{s.title}</b><span className="text-sm leading-6 text-mute">{s.text}</span></span>
          </li>
        ))}
      </ol>
      <p className="mt-6 rounded-2xl border border-dashed border-ink/40 bg-card p-4 text-sm font-semibold">{about.note}</p>
    </div>
  );
}
