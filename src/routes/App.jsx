import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ARStudio from '../pages/ARStudio';
import DhokraLanding from '../pages/DhokraLanding';
import DhokraStep from '../pages/DhokraStep';
import Explore from '../pages/Explore';
import HeritageDetail from '../pages/HeritageDetail';
import PageStub from '../pages/PageStub';
import OralHeritage from '../pages/OralHeritage';
import OralDetail from '../pages/OralDetail';
import Contribute from '../pages/Contribute';
import About from '../pages/About';
import dhokra from '../data/dhokra.json';
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ar-studio" element={<ARStudio />} />
        <Route path="/ar-studio/dhokra" element={<DhokraLanding />} />
        {dhokra.steps.map((s) => <Route key={s.id} path={`/ar-studio/dhokra/step-${s.id}`} element={<DhokraStep id={s.id} />} />)}
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:slug" element={<HeritageDetail />} />
        <Route path="/oral-heritage" element={<OralHeritage />} />
        <Route path="/oral-heritage/:slug" element={<OralDetail />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageStub title="Page not found" />} />
      </Route>
    </Routes>
  );
}
