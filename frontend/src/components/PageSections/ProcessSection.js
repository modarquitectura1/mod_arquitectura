export default function ProcessSection({ customClass }) {
  return (
    <div className={`process-section bg-cover section-padding ${customClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title">
              <div className="heading-animation">
                <h2>Cómo Trabajamos</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-0 mt-30">
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="single-process-item">
              <div className="process-num">
                <h2>
                  01<i className="las la-arrow-right"></i>
                </h2>
              </div>
              <h4>Consultación Inicial </h4>
              <p>
                Maecenas fermentum maximus dui aliquet mollis. Suspendisse leo
                lorem, tincidunt dictum interdum eu, fringilla non orci. Duis
                condimentum leo sit amet massa imperdiet.
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 offset-xl-0 offset-lg-0 offset-md-6 col-md-6 wow fadeInUp animated"
            data-wow-delay="400ms"
          >
            <div className="single-process-item">
              <div className="process-num">
                <h2>
                  02<i className="las la-arrow-right"></i>
                </h2>
              </div>
              <h4>Diseño Conceptual </h4>
              <p>
                Praesent eget eros eget nisl lacinia pretium. Phasellus mi
                ligula, luctus quis leo ac, efficitur aliquet nulla. Sed
                vehicula, tellus ut volutpat finibus, ex sem.
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
            data-wow-delay="600ms"
          >
            <div className="single-process-item">
              <div className="process-num">
                <h2>
                  03<i className="las la-arrow-right"></i>
                </h2>
              </div>
              <h4>Construcción</h4>
              <p>
                Phasellus at lobortis nisi, sed sollicitudin diam. Vivamus
                fringilla sit amet eros in hendrerit. Fusce cursus interdum
                risus, et lacinia mi ultrices ac. Morbi quis.
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="process-bg"></div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="single-process-item">
              <div className="process-num">
                <h2>
                  04<i className="las la-arrow-right"></i>
                </h2>
              </div>
              <h4>Finalización</h4>
              <p>
                Vestibulum vitae consequat enim. Nam ac massa ac risus convallis
                fringilla eu varius nunc. Phasellus congue sodales est, ut
                condimentum mi efficitur id. In euismod.
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated"
            data-wow-delay="400ms"
          >
            <div className="single-process-item">
              <div className="process-num">
                <h2>
                  05<i className="las la-arrow-right"></i>
                </h2>
              </div>
              <h4>Seguimiento</h4>
              <p>
                Etiam ornare mauris eros, sed molestie turpis vulputate nec. Nam
                porta, magna at posuere tincidunt, dolor tellus viverra orci,
                faucibus tristique nunc ante vel enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
