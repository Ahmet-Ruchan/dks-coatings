import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "../assets/careers.jpg";
import CareersUs from "src/components/CareersUs";

function Careers() {
  return (
    <>
      
      <HomeHero
        id="careers"
        cName="hero-mid"
        heroImg={AboutImg}
        title="Careers"
        btnClass="hide"
      />
      <CareersUs />
      
    </>
  );
}

export default Careers;