import PageHeader from '../components/PageHeader';
import HeritageCard from '../components/HeritageCard';
import KnowledgeGraph from '../components/KnowledgeGraph';
import { items } from '../data/oralHeritage.json';
const groups = ['Folk Songs', 'Stories'];
export default function OralHeritage() {
  return (
    <>
      <PageHeader title="Oral Heritage" subtitle="Listen to the original recordings and explore the people, places and rituals behind them." />
      <div className="mx-auto max-w-6xl space-y-10 px-5">
        {groups.map((g) => (
          <section key={g}>
            <h2 className="mb-4 text-2xl font-bold">{g}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.filter((i) => i.kind === g).map((i) => (
                <HeritageCard key={i.slug} to={`/oral-heritage/${i.slug}`} title={i.title} lines={[i.region, i.category]} cta="Listen" image={`/images/oral/${i.slug}-cover.jpg`} tone={['#3f7d78', '#1f4a4d']} />
              ))}
            </div>
          </section>
        ))}
        <section>
          <h2 className="mb-1 text-2xl font-bold">Where traditions are practised</h2>
          <p className="mb-4 text-mute">Click a state to see its traditions, then click a tradition to open it.</p>
          <KnowledgeGraph />
        </section>
      </div>
    </>
  );
}
