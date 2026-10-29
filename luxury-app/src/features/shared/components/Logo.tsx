import "../../../styles/layout/logo.css";

interface LogoProps {
  variant?: "light" | "dark";
}

const Logo = ({ variant = "dark" }: LogoProps) => (
  <span className={`logo logo--${variant}`}>
    <img
      src="/images/logo.png"
      alt=""
      className="logo__img"
      aria-hidden="true"
    />
    <span className="logo__text">
      <span className="logo__name">THE IVORY</span>
      <span className="logo__sub">Luxury Residences</span>
    </span>
  </span>
);

export default Logo;
