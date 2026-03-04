import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Werkliste } from './pages/Werkliste';
import { Kontakt } from './pages/Kontakt';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projekte } from './pages/Projekte';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projekte" element={<Projekte />} />
          <Route path="team" element={<Team />} />
          <Route path="werkliste" element={<Werkliste />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="projekte/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
