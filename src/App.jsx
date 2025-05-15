import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/common/slider";

import "./App.css";
function App() {
  return (
    <div className="relative h-screen w-full bg-primary">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <div>
        <Slider />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
