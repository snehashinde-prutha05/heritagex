import { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import { DEMO_URL } from '../utils/config';
export default function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <main><Outlet /></main>
      <footer className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-6 text-sm text-mute">
        <span>HeritageX, a digital museum for India's living traditions.</span>
        <span className="flex gap-4"><Link to="/about" className="hover:text-ink">About</Link><a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">Demo</a></span>
      </footer>
      <BottomNav />
    </div>
  );
}
