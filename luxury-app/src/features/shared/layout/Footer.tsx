import "../../../styles/layout/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* TODO (feature/layout-diseno): contenido del footer */}
        <p>© {new Date().getFullYear()} Marca. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
