import VideoPlay from "./VideoPlay";

const HeroSection = () => {
  return (
    <div className="home__hero" id="home">
      <VideoPlay />
      <div className="hero__section">
        <div className="hero__content">
          <span className="hero__title">…commitment to quality</span>
          <h1>Flexible packaging, printed in Lagos.</h1>
          <p>
            Nylon and poly wrappers, labels and cartons for Nigeria’s
            industrial and agricultural sectors, and for customers beyond.
          </p>
          <span className="hero__services">See our Services</span>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
