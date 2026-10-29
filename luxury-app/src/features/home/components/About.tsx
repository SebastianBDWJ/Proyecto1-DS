import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="wrap about__inner">
        <h2 className="about__title">
          No vendemos metros cuadrados<br />Vendemos dónde vivir
        </h2>
        <div className="about__cols">
          <p>
            The Ivory nació en Costa Rica con una idea simple: hay muchos apartamentos, pero pocos realmente valen la pena. Por eso nos encargamos de revisar cada propiedad antes de publicarla — ubicación, acabados, constructora, entorno — para que no tengas que adivinar
          </p>
          <p>
            Trabajamos en zonas consolidadas de la ciudad y destinos de playa exclusivos donde la demanda es real, los precios son estables y la calidad de vida es alta. Nada de proyectos en preventa en lugares que todavía no existen
          </p>
        </div>
        <Link to="/apartamentos" className="text-link">Ver el catálogo →</Link>
      </div>
    </section>
  );
};

export default About;
