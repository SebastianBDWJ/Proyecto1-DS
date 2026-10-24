import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="container" aria-labelledby="not-found-title">
      <p>Error 404</p>
      <h1 id="not-found-title">Esta página no existe</h1>
      <p>La dirección puede haber cambiado o estar escrita incorrectamente.</p>
      <Link to="/">Volver al inicio</Link>
      {/* TODO (feature/contacto-404): diseño final */}
    </section>
  );
};

export default NotFound;
