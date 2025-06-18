import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoUrl from "../../assets/react.svg";
import {
  faHotTub,
  faHouse,
  faRegistered,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faResolving } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const root = document.querySelector("html");
    localStorage.setItem("theme", theme);
    const localStorageTheme = localStorage.getItem("theme");
    root.setAttribute("data-theme", localStorageTheme);
    root.setAttribute("var()");
    root.classList.remove("dark");
    root.classList.remove("light");
    root.classList.add(localStorageTheme);
  }, [theme]);

  const items = [
    { title: "inicio", url: "#home", icon: faHouse },
    { title: "Resultados", url: "#results", icon: faResolving },
    { title: "Jugadas calientes", url: "#hot", icon: faHotTub },
    { title: "Preguntas frecuentes", url: "#faqs", icon: faQuestionCircle },
  ];

  const logo = {
    title: "Loti Estesan",
    icon: logoUrl,
    alt: "Logo de Loti Estesan",
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
    <nav>
      <div className="navbar bg-base-100/90">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-black dark:text-white">
            Lotin Estesan
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  className="rounded-lg px-4 py-2 text-[.75rem] text-black dark:text-white font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <FontAwesomeIcon icon={item.icon} size="sm" /> {item.title}
                </Link>
              </li>
            ))}

            <li className="rounded-lg cursor-pointer text-lg font-semibold text-black dark:text-2xl-white hover:bg-slate-100 hover:dark:bg-slate-700 hover:text-slate-900 transition-colors">
              <details className="text-black dark:text-white">
                <summary className="text-center text-[.75rem] font-semibold ">
                  Usuario
                </summary>
                <ul className="bg-base-100 rounded-t-none ">
                  <li>
                    <Link
                      to="/login"
                      className="rounded-lg text-[.75rem] text-white font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      <FontAwesomeIcon icon={faUser} size="sm" />
                      Iniciar sesión
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="rounded-lg px-4 py-2 text-[.75rem] text-white font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      <FontAwesomeIcon icon={faRegistered} size="sm" />
                      Registrarse
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <button
                onClick={handleThemeToggle}
                className="rounded-lg px-4 py-2 text-[.75rem] text-black dark:text-white font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <FontAwesomeIcon
                  icon={theme === "light" ? faMoon : faSun}
                  size="xl"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
