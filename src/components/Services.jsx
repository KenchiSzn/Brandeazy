import cylinder from "../assets/cylinder.jpg";
import shrink from "../assets/zoshua-colah-qXWFlxb45Uo-unsplash.jpg";
import bread from "../assets/micheile-henderson-TqQoPFLhpjA-unsplash (1).jpg";
import barcode from "../assets/935.jpg";
import machine from "../assets/machine.jpg";
import box from "../assets/brandable-box-8mCsyImZRGY-unsplash.jpg";

const services = [
  {
    image: shrink,
    alt: "Printed shrink sleeve labels on product containers",
    title: "Shrink Labels",
    description:
      "Full-body labels that give bottles and containers a clean, distinctive finish.",
  },
  {
    image: bread,
    alt: "Packaged bread ready for retail",
    title: "Bread Wrapper Printing",
    description:
      "Well-crafted wrappers that help bakeries present and protect every loaf.",
  },
  {
    image: barcode,
    alt: "Barcode artwork for product packaging",
    title: "Barcode Generation",
    description:
      "Clear, retail-ready barcodes prepared for your products and packaging.",
  },
  {
    image: machine,
    alt: "Printing machine in a production facility",
    title: "Packaging Printing",
    description:
      "Reliable flexographic printing for vibrant, consistent packaging materials.",
  },
  {
    image: cylinder,
    alt: "Printing cylinder used in packaging production",
    title: "Printing Cylinders",
    description:
      "Precision-made cylinders that support crisp, dependable print results.",
  },
  {
    image: box,
    alt: "Custom-designed branded packaging box",
    title: "Custom Packaging",
    description:
      "Purposeful packaging solutions tailored to your product and brand.",
  },
];

const Services = () => {
  return (
    <section className="Services py-5" aria-labelledby="services-title">
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <p className="services-eyebrow mb-2">Thoughtful print. Lasting impact.</p>
          <h2 className="section-title mb-3" id="services-title">
            Our <span className="specific__text">Services</span>
          </h2>
          <p className="services-intro mx-auto mb-0">
            From labels to complete packaging, we help your products make a
            confident impression.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.title}>
              <article className="card service-card h-100">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.alt}
                />
                <div
                  className="card-body p-4"
                  style={{
                    position: "static",
                    display: "block",
                    opacity: 1,
                    transform: "none",
                    padding: "1.5rem",
                    color: "var(--text)",
                    background: "#fff",
                    textAlign: "left",
                  }}
                >
                  <h3 className="card-title h5">{service.title}</h3>
                  <p className="card-text mb-0">{service.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
