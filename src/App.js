import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
// import Iframe from 'react-iframe';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      {/* <Iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/show/2bzjLBEWRldARaf1IytFFS?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      /> */}
      <Footer />
    </div>
  );
}

export default App;
