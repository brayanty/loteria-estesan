import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoUrl from "../../assets/react.svg";
import { faBars, faHotTub, faHouse } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { faResolving } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const items = [
    { title: "inicio", url: "#home", icon: faHouse },
    { title: "Resultados", url: "#results", icon: faResolving },
    { title: "Jugadas calientes", url: "#hot", icon: faHotTub },
  ];

  const logo = {
    title: "Loteria Estesan",
    icon: logoUrl,
    alt: "Logo de loteria estesan",
  };

  const [isSelectMenu, setSelectMenu] = useState(false);
  const [isNavbarHeight, setNavbarHeight] = useState("140px");

  if (!Array.isArray(items)) {
    console.error("El formato de `items` que se recibió no es correcto");
    return null;
  }

  const barsClick = () => {
    const navbar = document.querySelector("#Navbar").offsetHeight;
    setNavbarHeight(navbar + "px");
    setSelectMenu((prevState) => !prevState);
  };

  return (
    <nav
      id="Navbar"
      className="absolute top-0 md:absolute w-full h-[max-content] p-1 flex flex-col gap-2 bg-primary/70 md:p-2 backdrop-blur-sm z-50"
    >
      <div className="md:container md:mx-auto w-full h-full flex flex-row justify-between items-center">
        <a
          className="flex flex-row items-center text-center text-white font-bold text-lg"
          href="#inicio"
          aria-label="Inicio"
        >
          <img
            className="inline-block"
            width="32"
            height="32"
            src={logo.icon}
            alt="Logo de Dr. Morse"
          />
          <h3>{logo.title}</h3>
        </a>
        <button
          className="p-3 md:hidden"
          onClick={() => barsClick()}
          aria-label="Abrir menú"
        >
          <FontAwesomeIcon icon={faBars} size="2xl" style={{ fill: "#fff" }} />
        </button>

        <ul
          style={{ top: isNavbarHeight, right: 0 }}
          className={`${
            isSelectMenu
              ? "max-md:opacity-100"
              : "max-md:opacity-0 none max-md:-z-40"
          } z-10 transition-opacity ease-out duration-600 max-md:absolute p-2 max-md:h-[max-content] max-md:w-full max-md:backdrop-blur-sm max-md:bg-primary/80 flex flex-row max-md:flex-col max-md:items-center max-md:justify-center gap-3`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="rounded-lg px-4 py-2 text-md text-white font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
                aria-label={`Ir a ${item.title}`}
              >
                <FontAwesomeIcon icon={item.icon} size="sm" /> {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
