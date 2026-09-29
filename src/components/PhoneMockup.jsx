import { DEMO_URL } from '../utils/config';
export default function PhoneMockup() {
  return (
    <div className="relative grid place-items-center py-4">
      <div className="absolute aspect-square w-[125%] max-w-[500px] rounded-full border-2 border-dashed border-line" />
      <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" aria-label="Watch the HeritageX demo on YouTube"
         className="group relative block h-[520px] w-[270px] overflow-hidden rounded-[44px] border-[7px] border-[#c9ccd6] bg-[#0b0b0d] text-white shadow-lift transition hover:-translate-y-1">
        <img src="/images/dhokra/preview.jpg" alt="" onError={(e) => (e.currentTarget.style.display = 'none')} className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between font-bold"><span className="text-xl">Demo</span><small className="text-xs font-medium opacity-70">Opens YouTube</small></div>
        <span className="absolute inset-0 m-auto h-14 w-20 rounded-2xl bg-[#ff2d2d] transition group-hover:scale-110" />
        <span className="absolute inset-0 m-auto h-0 w-0 translate-x-[3px]" style={{ borderTop: '13px solid transparent', borderBottom: '13px solid transparent', borderLeft: '22px solid #fff' }} />
        <div className="absolute inset-x-5 bottom-6 text-sm"><b className="block">Dhokra, start to finish</b><span className="text-white/75">Watch the demo on YouTube</span></div>
      </a>
      <div className="pointer-events-none absolute -right-2 bottom-14 hidden -rotate-[9deg] text-center font-script text-2xl leading-none text-accent1 sm:block">
        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="-ml-8 mb-1"><path d="M40 34C22 36 8 26 8 8M8 8l-6 9M8 8l10 5" /></svg>
        watch the<br />demo
      </div>
    </div>
  );
}
