import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CardQR from "../common/cardQR";

function Hero() {
  const [isParagraph, SetParagraph] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      SetParagraph((prev) => (prev + 1) % 3); // Ciclo entre 0, 1, 2
    }, 5000);
    return () => clearTimeout(interval); // Limpieza del timeout
  }, [isParagraph]);

  return (
    <section className="bg-emerald-600 relative w-full h-[80vh] md:h-[100vh] flex max-md:flex-col ">
      <div className="container mx-auto flex items-center justify-between relative">
        <header className="w-full h-full flex flex-col justify-center md:justify-right items-start gap-12 p-2">
          <h1 className="text-white text-center p-2 rounded-md text-7xl font-extrabold text-shadow-sm">
            Loti Estesan
          </h1>
          <div>
            {[0, 1, 2].map((i) => (
              <p
                key={i}
                className={`text-white p-1 transition-all duration-300 ease-in-out rounded-md text-center text-2xl text-shadow-sm font-primaryMedium absolute ${
                  isParagraph === i ? "" : "opacity-0"
                }`}
              >
                {i === 0 && "Registrate y empieza a disfrutar Loti Estesan"}
                {i === 1 &&
                  "Disfruta de la mejor experiencia de juego en linea"}
                {i === 2 && "Gana premios y recompensas todos los días"}
              </p>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Registrarse
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </span>
            </button>
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Conocer más
                  </span>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                  />
                </div>
              </span>
            </button>
          </div>
        </header>
        <div className="flex gap-10 items-center justify-between">
          <CardQR />
        </div>
      </div>
      <div
        className="absolute invisible md:visible bottom-0 w-full"
        style={{ height: "150px", overflow: "hidden" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-1.97,92.28 C149.99,150.00 349.20,-49.98 503.67,106.09 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#F5F5F5" }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
