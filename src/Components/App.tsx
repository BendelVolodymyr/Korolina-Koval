import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppNav from './AppNav/AppNav';

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const Drawings = lazy(() => import('../pages/Drawings'));
const Homeworks = lazy(() => import('../pages/Homeworks'));

const App = () => {
  return (
    <Router>
      <div className="max-w-4xl mx-auto mt-6">
        <AppNav />
        <Suspense
          fallback={<div className="p-4 text-gray-500">Завантаження...</div>}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/drawings" element={<Drawings />} />
            <Route path="/homeworks" element={<Homeworks />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
