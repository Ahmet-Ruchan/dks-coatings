import "./HomeHeroStyles.css";

function HomeHero(props) {
  return (
    <>
      <div id={props.id} className={props.cName}>
        <img src={props.heroImg} alt="heroImg" />
        
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
