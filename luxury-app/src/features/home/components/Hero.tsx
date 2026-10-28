import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="wrap hero__content">
        <p className="hero__eyebrow">Costa Rica · Residencias de lujo</p>
        <h1 className="hero__title">
          Un lugar único<br /><em>Una vida diferente</em>
        </h1>
        <p className="hero__sub">
          Apartamentos de lujo en las mejores zonas de la ciudad y las costas más exclusivas de Costa Rica Los seleccionamos nosotros para que solo tengas que elegir
        </p>
        <Link to="/apartamentos" className="btn-primary">Ver propiedades</Link>
      </div>
      <div className="hero__scroll" aria-hidden="true" />
    </section>
  );
};

export default Hero;

