import { NavLink } from "react-router-dom";
import Logo from "../../shared/components/Logo";
import "../../../styles/layout/footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="wrap footer__grid">
      <div className="footer__brand">
        <Logo variant="light" />
        <p className="footer__tagline">
          Residencias lujosas diseñadas para quienes valoran
          la calidad, la privacidad y el detalle.
        </p>
        <p className="footer__legal-small">San José, Costa Rica</p>
      </div>

      <nav className="footer__col" aria-label="Explorar">
        <p className="footer__label">Explorar</p>
        <NavLink to="/apartamentos" className="footer__a">Apartamentos</NavLink>
        <NavLink to="/favoritos" className="footer__a">Favoritos</NavLink>
        <NavLink to="/contacto" className="footer__a">Contacto</NavLink>
      </nav>

      <div className="footer__col">
        <p className="footer__label">Contacto</p>
        <a href="mailto:info@theivory.cr" className="footer__a">info@theivory.cr</a>
        <a href="tel:+50622000000" className="footer__a">+506 2200-4403</a>
        <p className="footer__address">Escazú, San José<br />Costa Rica</p>
      </div>
    </div>

    <div className="footer__bottom">
      <p>© {new Date().getFullYear()} The Ivory Luxury Residences. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
