import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import Podcast from './Pages/Podcast/Podcast';
// import Iframe from 'react-iframe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Playlist from './Pages/Playlist/Playlist';
import Single from './Pages/Single/Single';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/playlist' element={ <Playlist/> }/>
        <Route path="/podcast/:id" element={<Podcast />} />
        <Route path='/single' element={ <Single/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
