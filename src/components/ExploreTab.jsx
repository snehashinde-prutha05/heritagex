import MediaVideo from './MediaVideo';
import PhotoSlots from './PhotoSlots';
const Section = ({ title, children }) => (
  <section className="rounded-2xl border border-line bg-card p-5 shadow-soft"><h2 className="mb-3 text-lg font-bold">{title}</h2>{children}</section>
);
const List = ({ items }) => (
  <ul className="grid gap-2 sm:grid-cols-2">{items.map((i) => <li key={i} className="rounded-xl border border-line bg-paper px-3 py-2 text-sm">{i}</li>)}</ul>
);
export default function ExploreTab({ h }) {
  return (
    <div className="space-y-5">
      <PhotoSlots paths={[1, 2, 3].map((n) => `/images/${h.folder}/photo-${n}.jpg`)} />
      <MediaVideo src={h.video} title={h.title} />
      <Section title="Overview"><p className="leading-7 text-mute">{h.overview}</p></Section>
      {h.materials.length > 0 && <Section title={h.materialsLabel || 'Materials'}><List items={h.materials} /></Section>}
      {h.tools.length > 0 && <Section title="Tools"><List items={h.tools} /></Section>}
      {h.process.length > 0 && (
        <Section title={h.processLabel || 'Process'}>
          <ol className="space-y-2">{h.process.map((p, i) => (
            <li key={p} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">{i + 1}</span><span className="pt-0.5">{p}</span></li>
          ))}</ol>
        </Section>
      )}
      {h.significance.length > 0 && <Section title="Cultural significance"><ul className="list-disc space-y-1 pl-5 text-mute">{h.significance.map((s) => <li key={s}>{s}</li>)}</ul></Section>}
    </div>
  );
}
