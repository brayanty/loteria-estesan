import Hero from "../components/common/hero.jsx";
import Slider from "../components/common/slider";
import Map from "../components/common/map";
import Cards from "../components/common/cards.jsx";
import About from "../components/common/about.jsx";
function Home() {
  return (
    <div className="relative flex flex-col">
      <div>
        <Hero />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div>
          <Slider />
        </div>
        <div>
          <About />
        </div>

        <div>
          <Cards />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Home;
