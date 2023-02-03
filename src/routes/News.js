import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "../assets/news.jpg";
import NewsUs from "src/components/NewsUs";

function News() {
  return (
    <>
      
      <HomeHero
        id="news"
        cName="hero-mid"
        heroImg={AboutImg}
        title="News"
        btnClass="hide"
      />
      <NewsUs />
      
    </>
  );
}

export default News;