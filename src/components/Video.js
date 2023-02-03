import "./HomeHeroStyles.css";

function Video(props) {
  return (
        <video className="homepg-video" width="640" height="480" muted="" autoPlay playsinline="" loop="" poster="https://cdn.shopify.com/s/files/1/0530/8887/8759/files/placeholder.jpg?v=1617640010"> <source  src={props.video} type="video/mp4"/>
        Your browser does not support the video tag.</video>
  );
}

export default Video;