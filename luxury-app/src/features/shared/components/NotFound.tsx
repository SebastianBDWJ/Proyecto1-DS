
import { Link } from "react-router-dom";
import "../../../styles/not-found.css";

const NotFound = () => {
  return (
    <section className="container not-found" aria-labelledby="not-found-title">
      <p className="not-found__code">404</p>

      <h1 id="not-found-title">Esta página no existe</h1>

      <p className="not-found__message">
        La dirección puede haber cambiado o estar escrita
        incorrectamente.
      </p>

      <Link to="/" className="not-found__button">
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;
