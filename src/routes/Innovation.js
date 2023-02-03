import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "../assets/innovation.jpg";
import InnovationUs from "src/components/InnovationUs";

function Innovation() {
  return (
    <>
      
      <HomeHero
        id="innovation"
        cName="hero-mid"
        heroImg={AboutImg}
        title="Innovation"
        btnClass="hide"
      />
      <InnovationUs />
      
    </>
  );
}

export default Innovation;