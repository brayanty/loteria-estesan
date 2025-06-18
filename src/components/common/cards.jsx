import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

function Service() {
  const service = [
    {
      title: "Con lotin Estesan ganas!!",
      description: "Obten un bono de bienvenida, luego de tu primera jugada",
      icon: faVirus,
      alt: "Icono de virus",
    },
    {
      title: "Escane y gana",
      description:
        "Escanea el código QR de tu ticket y gana un premio instantáneo.",
      icon: faPrescription,
      alt: "Icono de prescripción",
    },
    {
      title: "Disponiblidad en tu dispositivo",
      description:
        "Disfruta de la mejor experiencia de juego en línea desde tu celular o computadora.",
      icon: faCommentsDollar,
      alt: "Icono de celular",
    },
  ];

  return (
    <section className="p-5 flex gap-10 flex-col">
      <h3 className="text-center text-black text-4xl">Que encontrarás</h3>
      <div className="text-base gap-2 grid grid-cols-1 sm:grid-cols-3">
        {service.map((item, index) => (
          <article
            className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
            key={index}
          >
            <div className="w-[70%] h-44" alt={item.alt}>
              <FontAwesomeIcon
                icon={item.icon}
                size="9x"
                style={{ fill: "#aaa" }}
              />
            </div>
            <header className="flex gap-2 flex-col text-center text-black">
              <h3 className="text-2xl text-blue-600">{item.title}</h3>
              <p className="text-base text-gray-600">{item.description}</p>
              <a
                className="mt-4 text-blue-500 py-2 px-4 rounded-full hover:text-blue-700 active:text-blue-800 transition-colors duration-300"
                href="#"
              >
                Más Información
              </a>
            </header>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service;
