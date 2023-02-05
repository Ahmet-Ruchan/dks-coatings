import "./FooterStyles.css";
import ScrollToTop from "react-scroll-to-top";
// import Image from "next/image";
import dev1 from "../assets/dev-1.jpg";
import dev2 from "../assets/dev-2.jpg";
import pdf1 from "../assets/Silicon-lithium-ion-batteries.pdf";
import pdf2 from "../assets/Next-generation-silicon-anodes.pdf";



const Footer = () => {
  return (
    <>
      <ScrollToTop className="scroll-to-top" style={{backgroundColor: "grey", paddingRight:"45px",marginRight:"-25px"}} width="30px" height="25px" color="white" smooth />
      
      <div className="footer">
        <div className="top">
          <div>
            <h1>DKS Coatings</h1>
            <p>Developer of Key Solutions you have</p>
          </div>
          <div>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>

        

        <div className="bottom">
          <div>
            <h4 >What We Do?</h4>
            <a href="#1">Anti -Sticker Coatings</a>
            <a href="#2">Anti- microbial Coatings</a>
            <a href="#3">Abrasion Resistant Coatings</a>
            <a href="#3">All Anti -Graffiti Coatings</a>
            <a href="#4">Bright Gold Leaf Paint</a>
            <a href="#5">Electrical Insulation, 2000 Volt</a>
            <a href="#6">Energy Saver Coatings</a>
            <a href="#7">Gun Coatings, 9H, 1200 C, Resistance</a>
            <a href="#8">Fire Protection Coatings</a>
            <a href="#8">Fabrics PVDF outdoor Protection</a>
            <a href="#10">Furniture Anti- microbial Coatings</a>
            <a href="#11">HVAC Anti- microbial Coatings</a>
            <a href="#12">Industrial Coatings</a>
          </div>
          
          <div>
            <br></br><br></br><br></br>
            <a href="#13">PVDF Clear for UV resistance</a>
            <a href="#14">Protection and Selective Sun Shading</a>
            <a href="#15">PVDF Protected Gold Leaf Paint</a>
            <a href="#16">PVDF Protected Light Gold Paint</a>
            <a href="#17">PVDF Protected Bright Gold Paint</a>
            <a href="#18">PVDF Protected Greate Leaf Paint</a>
            <a href="#18">PVDF Protected Brass Gold Paint</a>
            <a href="#18">PVDF Protected Bronze Paint</a>
            <a href="#18">PVDF Protected Light Copper Paint</a>
            <a href="#18">PVDF Protected Copper Paint</a>
            <a href="#23">Sound Blocking Paint 4</a>
            <a href="#24">Textile Coatings</a>
            <a href="#products">Battery Coatings</a>
          </div>

          <div>
            <h4>DEVELOPMENTS</h4>

            <a>Silicon lithium-ion batteries</a>
            <a href={pdf1} download>Download <i className="fa-solid fa-download"></i></a>
            {/* <Image src={dev1} width={120} height={120} /> */}
            <a href={pdf1} download><img className="dev1img" src={dev1}></img></a>
            
            <a>Next generation silicon anodes </a>
            <a href={pdf2} download>Download <i className="fa-solid fa-download"></i></a>
            <a href={pdf2} download><img className="dev1img" src={dev2}></img></a>
          </div>

          

          <div>
            <h4>DKS Coatings</h4>
            <a>ALKOP A7N8, HADIMKOY/İSTANBUL, TÜRKİYE, 2015869502</a>
            <a>YTU TEKNOKENT - İSTANBUL/TÜRKİYE</a>
            <a> <i className="fa-solid fa-phone"></i> + 90-212-858-1010</a>
            <a> <i className="fa-solid fa-fax"></i> + 90-212-858-0620</a>
            <a href="mailto:dks@gmail.com" target='_blank'  rel="noreferrer"> <i className="fa-regular fa-envelope"></i> Contact Us</a>
            <a href="https://www.google.com/maps/place/Dks+Coatings/@41.072056,28.637509,14z/data=!4m5!3m4!1s0x0:0x15b3bc38afbf1bd0!8m2!3d41.072056!4d28.637509?hl=tr" target='_blank'  rel="noreferrer"> <i className="fa-solid fa-location-pin"></i> Location</a>
            
            
          </div>
        </div>
        <br></br>
        <br></br><br></br>
        <a style={{padding:"5px", fontSize:"12px"}}>Copyright 2023 - All rights reserved ©</a> <a style={{padding:"5px", fontSize:"12px"}}>|</a>
        <a style={{padding:"5px", fontSize:"12px" }}> Terms and Conditions</a>
        <a style={{padding:"5px", fontSize:"12px"}}>|</a>
        <a style={{padding:"5px", fontSize:"12px"}}>Privacy and cookies</a>
        <a style={{padding:"5px", fontSize:"12px"}}>|</a>
        <a style={{padding:"5px", fontSize:"12px"}}>Accessibility statement</a>
      </div>
    </>
  );
};

export default Footer;
