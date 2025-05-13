import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  const [isParagraph, SetParagraph] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      SetParagraph((prev) => (prev + 1) % 3); // Ciclo entre 0, 1, 2
    }, 5000);
    return () => clearTimeout(interval); // Limpieza del timeout
  }, [isParagraph]);

  return (
    <section
      style={{
        background: `linear-gradient(180deg, hsla(0, 68.40%, 18.60%, 0.22) 0%, hsla(0, 17.20%, 39.80%, 0.20) 100%), url('https://images.unsplash.com/photo-1685559604504-e02fdf7af91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        
      }}
      className="relative w-full h-[60vh] md:h-[90vh] flex max-md:flex-col justify-center"
    >
      <header className="container mx-auto w-full h-full flex flex-col justify-center md:justify-right items-right gap-6 p-2">
        <h1 className=" text-white text-center p-2 rounded-md text-4xl font-primarybold">
          Loteria Estesan
        </h1>
        <div className=" m-5 w-full flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <p
              key={i}
              className={`text-white p-1 transition-all duration-300 ease-in-out rounded-md text-center text-2xl text-shadow-sm font-primaryMedium absolute ${
                isParagraph === i ? "" : "opacity-0"
              }`}
            >
              {i === 0 &&
                "Registrate y empieza a disfrutar de Loteria Estesan"}
              {i === 1 &&
                "Disfruta de la mejor experiencia de juego en linea"}
              {i === 2 && ""}
            </p>
          ))}
        </div>
        <div className="w-full flex flex-row max-md:flex-col items-center gap-4 justify-evenly max-md:justify-center">
          <ul className="font-primaryMedium flex flex-row gap-6 justify-center items-center">
            <li>
              <a href="#twitter" aria-label="ir a es X">
                <FontAwesomeIcon
                  className="scale-125 hover:scale-150 text-blue-200 text-shadow-sm"
                  icon={faXTwitter}
                  style={{ color: "#fff" }}
                  size="2xl"
                />
              </a>
            </li>
            <li>
              <a href="#twitter" aria-label="ir a es X">
                <FontAwesomeIcon
                  className="scale-125 hover:scale-150"
                  icon={faInstagram}
                  style={{ color: "#fff" }}
                  size="2xl"
                />
              </a>
            </li>
            <li className="flex gap-3">
              <a href="#twitter" aria-label="ir a es X">
                <FontAwesomeIcon
                  className="scale-125 hover:scale-150"
                  icon={faWhatsapp}
                  style={{ color: "#fff" }}
                  size="2xl"
                />{" "}
              </a>
            </li>
          </ul>
          <button
            className="w-48 rounded-md border border-black text-white p-3 bg-primary px-4 py-2 text-md font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
            type="button"
          >
            Ir al registro
          </button>
        </div>
      </header>

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
