import { NavLink, Link } from 'react-router-dom';
import { DEMO_URL } from '../utils/config';
const items = [['Home','/'],['AR Studio','/ar-studio'],['Explore','/explore'],['Oral Heritage','/oral-heritage'],['Contribute','/contribute'],['About','/about']];
export default function Navbar() {
  return (
    <header className="sticky top-3 z-30 mx-auto mt-3 hidden w-[calc(100%-24px)] max-w-6xl items-center justify-between rounded-full border border-line bg-card px-4 py-2 shadow-soft md:flex">
      <Link to="/" className="flex items-center gap-2 text-lg font-bold">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-display text-white">H</span>
        <span className="hidden lg:inline">HeritageX</span>
      </Link>
      <nav className="flex items-center gap-1">
        {items.map(([label, to]) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `rounded-full px-3 py-2 text-sm font-medium transition lg:px-4 ${isActive ? 'bg-brand text-white shadow-soft' : 'text-mute hover:text-ink'}`}>{label}</NavLink>
        ))}
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="rounded-full px-3 py-2 text-sm font-medium text-mute hover:text-ink lg:px-4">Demo</a>
      </nav>
    </header>
  );
}
