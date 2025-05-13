import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import "./App.css";
import Card from "./components/common/cardQR";
function App() {
  return (
    <div className="relative h-screen w-full bg-primary">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <br />
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
