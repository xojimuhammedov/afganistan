import "./App.css";
import Contact from "./components/Contact";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Tour from "./components/Tour";

function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Destination />
      <Tour />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;