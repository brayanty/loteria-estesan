import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="relative w-screen h-screen bg-red">

      <Navbar />
      <Hero />
      <Map />
      <Testimony />
      <Footer />
    </div>
    </>
  );
}

export default App;
