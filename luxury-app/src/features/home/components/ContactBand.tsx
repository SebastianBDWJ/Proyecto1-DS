import { Link } from "react-router-dom";

const ContactBand = () => {
  return (
    <section className="cta-band">
      <div className="wrap cta-band__inner">
        <div>
          <h2 className="cta-band__title">¿Te interesa alguna residencia?</h2>
          <p className="cta-band__sub">Escríbenos y coordinamos una visita cuando quieras</p>
        </div>
        <Link to="/contacto" className="btn-outline-light">Solicitar información</Link>
      </div>
    </section>
  );
};

export default ContactBand;

