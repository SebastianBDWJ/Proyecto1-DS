import "../../../styles/layout/navbar.css";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/apartamentos", label: "Apartamentos" },
  { to: "/favoritos", label: "Favoritos" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* TODO (feature/layout-diseno): Logo y nombre de la marca */}
        <NavLink to="/" className="navbar__brand">
          Marca
        </NavLink>

        {/* TODO (feature/layout-diseno): botón de menú móvil abrir/cerrar */}
        <nav className="navbar__links" aria-label="Navegación principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
