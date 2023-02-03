import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "../assets/sustainability.jpg";
import SustainabilityUs from "src/components/SustainabilityUs";

function Sustainability() {
  return (
    <>
      
      <HomeHero
        id="sustainability"
        cName="hero-mid"
        heroImg={AboutImg}
        title="Sustainability"
        btnClass="hide"
      />
      <SustainabilityUs />
      
    </>
  );
}

export default Sustainability;