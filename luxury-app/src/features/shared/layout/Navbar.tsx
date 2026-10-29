import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../shared/components/Logo";
import "../../../styles/layout/navbar.css";

const links = [
  { to: "/",             label: "Inicio"       },
  { to: "/apartamentos", label: "Apartamentos" },
  { to: "/favoritos",    label: "Favoritos"    },
  { to: "/contacto",     label: "Contacto"     },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="nav">
      <div className="wrap nav__row">
        <NavLink to="/" aria-label="The Ivory">
          <Logo />
        </NavLink>

        <button
          className={`nav__burger${open ? " nav__burger--open" : ""}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__links${open ? " nav__links--open" : ""}`} aria-label="Menú principal">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "nav__a" + (isActive ? " nav__a--active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
