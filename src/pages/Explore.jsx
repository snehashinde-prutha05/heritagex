import PageHeader from '../components/PageHeader';
import HeritageCard from '../components/HeritageCard';
import { heritages } from '../utils/heritage';
export default function Explore() {
  return (
    <>
      <PageHeader title="Explore" subtitle="Four documentaries, each with Explore, Learn and Try." />
      <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {heritages.map((h) => (
          <HeritageCard key={h.slug} to={`/explore/${h.slug}`} title={h.title} lines={[h.region, h.category]} cta="Explore" tone={h.tone} image={`/images/${h.folder}/cover.jpg`} />
        ))}
      </div>
    </>
  );
}
