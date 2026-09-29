import { NavLink } from 'react-router-dom';
import { Home, Box, Compass, Mic, PlusCircle } from 'lucide-react';
const items = [['Home','/',Home],['AR','/ar-studio',Box],['Explore','/explore',Compass],['Oral','/oral-heritage',Mic],['Contribute','/contribute',PlusCircle]];
export default function BottomNav() {
  return (
    <nav aria-label="Main" className="fixed inset-x-3 bottom-3 z-30 flex justify-around rounded-full border border-line bg-card p-1.5 shadow-soft md:hidden">
      {items.map(([label, to, Icon]) => (
        <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex flex-col items-center rounded-full px-3 py-1.5 text-[11px] font-semibold ${isActive ? 'bg-brand text-white' : 'text-mute'}`}>
          <Icon size={18} aria-hidden="true" />{label}
        </NavLink>
      ))}
    </nav>
  );
}
