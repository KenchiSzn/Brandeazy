import printingImage from "../assets/cylinder.jpg";
import machine from "../assets/machine.jpg";
import cylinder from "../assets/brecht-corbeel-1J-NTc7xCS0-unsplash.jpg";

const AboutUs = () => {
  return (
    <section className="About__Us py-5" id="about" aria-labelledby="about-title">
      <div className="container px-3 px-md-4 px-lg-5">
        <h2 className="section-title text-center mb-4 mb-lg-5" id="about-title">
          <span className="specific__text">A</span>bout Us
        </h2>
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7 order-2 order-lg-1">
            <div className="overlapping" role="group" aria-label="Our printing facility">
              <div className="printing-cylinder-image">
                <img
                  src={cylinder}
                  alt="Printing cylinder at work"
                  className="img-fluid"
                />
              </div>
              <div className="printing-container-image">
                <img
                  src={printingImage}
                  alt="Printing production in progress"
                  className="img-fluid"
                />
              </div>
              <div className="printing-machine-image">
                <img
                  src={machine}
                  alt="Printing machinery in the production facility"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <div className="about-content">
              <h3 className="about-heading">
                Get to Know About Our Printing Agency
              </h3>
              <p className="about-description">
                Brandeazy Global Concept prints and manufactures cartons, light
                packaging materials, labels and more. We use flexo printing to
                make nylon and poly wrappers, and we supply quality flexible
                packaging to industry and agriculture in Nigeria and other parts
                of the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
