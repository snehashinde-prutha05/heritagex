import { Link } from 'react-router-dom';
import PhoneMockup from '../components/PhoneMockup';
import HeritageCard from '../components/HeritageCard';
import Stickers from '../components/Stickers';
const modules = [
  { to: '/ar-studio', title: 'AR Studio', lines: ['Dhokra in 9 steps'], cta: 'Open AR', tone: ['#b5651d', '#6e3b12'] },
  { to: '/explore', title: 'Explore', lines: ['Explore, Learn and Try'], cta: 'Open Explore', tone: ['#c2603a', '#7a2f22'] },
  { to: '/oral-heritage', title: 'Oral Heritage', lines: ['Folk songs and stories'], cta: 'Open Audio', tone: ['#3f7d78', '#1f4a4d'] },
  { to: '/contribute', title: 'Contribute', lines: ['Add a heritage record'], cta: 'Open Contribution', tone: ['#8a5aa8', '#472a63'] },
];
export default function Home() {
  return (
    <>
      <section className="relative mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1fr_300px_1fr]">
        <Stickers />
        <div className="text-center lg:text-left">
          <p className="font-hand text-2xl tracking-wide text-[#4a4560]">Preserving India's Living Traditions</p>
          <h1 className="bg-brand bg-clip-text font-display text-6xl font-bold leading-[.92] text-transparent sm:text-8xl lg:text-[68px] xl:text-[84px]">HERITAGE<br />X</h1>
          <Link to="/explore" className="btn mt-8">Explore Heritage</Link>
        </div>
        <PhoneMockup />
        <p className="leading-7 text-mute md:col-span-2 lg:col-span-1">
          India's most valuable traditions are not kept in buildings. They live in hands, voices and habits, and they fade when the last practitioner stops teaching. HeritageX is a digital museum built to slow that loss. Watch the Dhokra brass-casting process unfold step by step in 3D. Explore documentaries on bell metal casting, the Vasudev performers, the Gauri festival and the game of Sagar Gote. Ask questions and get clear answers. Try the movements yourself and see how close you come. Listen to Marathi folk songs with transcripts and translations, and follow how traditions connect across states. Artisans and communities can also contribute new records, which practitioners verify before they join the archive.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-5">
        <h2 className="mb-6 text-center text-3xl font-bold">Featured modules</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{modules.map((m) => <HeritageCard key={m.to} {...m} />)}</div>
      </section>
    </>
  );
}
