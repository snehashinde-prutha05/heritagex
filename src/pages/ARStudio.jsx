import PageHeader from '../components/PageHeader';
import HeritageCard from '../components/HeritageCard';
export default function ARStudio() {
  return (
    <>
      <PageHeader title="AR Studio" subtitle="Learn each craft through 3D animation, one step at a time." />
      <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">
        <HeritageCard to="/ar-studio/dhokra" title="Dhokra" lines={['9-step experience', 'Available']} cta="Start Experience" image="/images/dhokra/cover.jpg" tone={['#b5651d', '#6e3b12']} />
        <HeritageCard title="Paila Art" lines={['Jharkhand']} status="Coming Soon" disabled image="/images/paila/cover.jpg" tone={['#a8843a', '#5b4419']} />
        <HeritageCard title="Ganjifa" lines={['Traditional card art']} status="Coming Soon" disabled image="/images/ganjifa/cover.jpg" tone={['#a0405a', '#4f1f38']} />
      </div>
    </>
  );
}
