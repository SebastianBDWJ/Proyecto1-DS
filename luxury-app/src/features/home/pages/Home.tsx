import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Location from "../components/Location";
import ContactBand from "../components/ContactBand";
import "../../../styles/home/home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Location />
      <ContactBand />
    </>
  );
};

export default Home;
