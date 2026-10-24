import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Aquí se renderiza la página de la ruta actual */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
