import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import Podcast from './Pages/Podcast/Podcast';
// import Iframe from 'react-iframe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast/:id" element={<Podcast />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
