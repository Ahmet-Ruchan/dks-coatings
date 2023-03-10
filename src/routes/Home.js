import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";
import img1 from "src/assets/1.jpg";
import Video from "src/components/Video";
import About from "./About";
import Contact from "./Contact";
import Sustainability from "./Sustainability";
import Innovation from "./Innovation";
import News from "./News";
import Careers from "./Careers"

function Home() {
  return (
    <>
      
      <Navbar />
      <Video
        video="https://cdn.shopify.com/s/files/1/0530/8887/8759/files/por15-compressed.mp4?v=1615241708"/>
      {/* <HomeHero //! en üst kapak fotoğrafı
        cName="hero"
        // heroImg="https://www.dkscoatings.com/images/1.jpg"
        
        title="DKS Coatings"
        text="Developer of Key Solutions you have"
      /> */}
      <Destination />
      <Trip />
      <About />
      <Sustainability />
      <Innovation />
      <News />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

