function About() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          className="max-h-96 max-w-96/2 rounded-lg shadow-2xl"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="Imagen de ejemplo"
        />
        <div className="text-black dark:text-white">
          <h1 className="text-5xl font-bold">Quienes somos</h1>
          <p className="py-6">
            Somos una empresa dedicada a ofrecer la mejor experiencia de juego
            en línea. Nuestro objetivo es brindar entretenimiento y diversión a
            nuestros usuarios.
          </p>
          <p className="mt-2 py-2 text-lg text-gray-700 dark:text-gray-300">
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
