const Various = () => {
  return (
    <section className="various-section py-5">
      <div className="container">
        <div className="mb-4 mb-lg-5 text-center">
          <p className="various-eyebrow mb-2">What guides us</p>
          <h2 className="section-title mb-3">Our Purpose</h2>
          <p className="various-intro mb-0 mx-auto">
            The principles behind every solution we create.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <article className="card various-card h-100">
              <div className="card-body p-4 p-lg-5">
                <span className="various-card-label">01 / Our Mission</span>
                <h3 className="card-title h4">Purpose in every package</h3>
                <p className="card-text mb-0">
                  Providing value-added packaging solutions through innovation
                  to give our customers a competitive advantage.
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-6">
            <article className="card various-card h-100">
              <div className="card-body p-4 p-lg-5">
                <span className="various-card-label">02 / Our Vision</span>
                <h3 className="card-title h4">Setting a higher standard</h3>
                <p className="card-text mb-0">
                  To be one of the best flexible packaging companies in the
                  industry, defined by superior quality, unmatched service,
                  continuous improvement and constant innovation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Various;