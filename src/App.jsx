import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import SplashPage from './pages/home/SplashPage';
import { Navbar } from './components/Navbar';
import { Events } from './pages/events/Events';
import { Event } from './pages/Event/Event';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:section" element={<Event />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;