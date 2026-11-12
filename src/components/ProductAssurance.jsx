const ProductAssurance = () => {
  return (
    <section className="product__assurance" aria-label="Our product assurance">
      <div className="container">
        <div className="row position-relative text-center">
          <div className="product-assurance__item col-12 col-md-4">
            <div className="product-assurance__content d-flex flex-column justify-content-center align-items-center">
              <div className="assuarance__icon">
                <i className="bi bi-shield-check" aria-hidden="true"></i>
              </div>
              <h3>Quality-first production</h3>
              <p>We never compromise on quality.</p>
            </div>
          </div>
          {/* <div className="dash" aria-hidden="true"></div> */}
          <div className="product-assurance__item col-12 col-md-4">
            <div className="product-assurance__content d-flex flex-column justify-content-center align-items-center">
              <div className="assuarance__icon">
                <i className="bi bi-tag" aria-hidden="true"></i>
              </div>
              <h3>Custom brand solutions</h3>
              <p>Packaging that fits your unique brand.</p>
            </div>
          </div>
          {/* <div className="dash" aria-hidden="true"></div> */}
          <div className="product-assurance__item col-12 col-md-4">
            <div className="product-assurance__content d-flex flex-column justify-content-center align-items-center">
              <div className="assuarance__icon">
                <i className="bi bi-clock" aria-hidden="true"></i>
              </div>
              <h3>Reliable turnaround</h3>
              <p>On time, every time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductAssurance;
