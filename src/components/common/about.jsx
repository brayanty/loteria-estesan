function About() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Quienes somos</h1>
          <p className="py-6">
            Somos una empresa dedicada a ofrecer la mejor experiencia de juego
            en línea. Nuestro objetivo es brindar entretenimiento y diversión a
            nuestros usuarios.
          </p>
          <p className="mt-2 py-2 text-lg text-gray-300">
            Únete a nuestra comunidad y comienza a ganar premios y recompensas
            todos los días.
          </p>
          <button className="btn btn-primary">Empezar ahora!!</button>
        </div>
      </div>
    </div>
  );
}
export default About;
