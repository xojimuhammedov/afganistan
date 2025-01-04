import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Tour from "./components/Tour";
import TourPage from "./pages/TourPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Destination />
              <Partner />
              <Tour />
              <Gallery />
              <Contact />
            </>
          }
        />
        <Route path="/tour/:id" element={<TourPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
