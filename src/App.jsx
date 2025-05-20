import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/common/slider";
import Map from "./components/common/map";

import "./App.css";
import Footer from "./components/Footer";
import Cards from "./components/common/cards.jsx";
function App() {
  return (
    <div className="relative bg-white flex flex-col gap-3">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <div>
        <Slider />
      </div>
      <div>
        <div className="bg-green-500 flex flex-col items-start justify-center w-full h-48 p-6">
          <h1 className="text-6xl font-bold text-white self-center">
            Acerca de nosotros
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Somos una empresa dedicada a ofrecer la mejor experiencia de juego
            en línea. Nuestro objetivo es brindar entretenimiento y diversión a
            nuestros usuarios.
          </p>
          <p className="mt-2 text-lg text-gray-300">
            Contamos con una amplia variedad de juegos y promociones para que
            disfrutes al máximo.
          </p>
          <p className="mt-2 text-lg text-gray-300">
            Únete a nuestra comunidad y comienza a ganar premios y recompensas
            todos los días.
          </p>
          <p className="mt-2 text-lg text-gray-300">
            ¡Te esperamos en Loti Estesan!
          </p>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default App;
