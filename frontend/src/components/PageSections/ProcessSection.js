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
              <h4>Escucha y asesoría inicial</h4>
              <p>
                Analizamos tus ideas y necesidades para ofrecerte una propuesta
                clara y ajustada a tu estilo de vida y presupuesto.
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
              <h4>Diseño y planeación arquitectónica </h4>
              <p>
                Creamos planos y propuestas de diseño arquitectónico,
                priorizando funcionalidad, estética y normativas locales.
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
              <h4>Visualización 3D y ajustes</h4>
              <p>
                Presentamos renders y modelos 3D realistas para que veas tu
                proyecto antes de la construcción y puedas hacer ajustes.
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
              <h4>Construcción y ejecución en obra</h4>
              <p>
                Nos encargamos de todo el proceso constructivo con supervisión
                constante, materiales de calidad y cumplimiento de tiempos.
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
              <h4>Entrega y acompañamiento final</h4>
              <p>
                Te entregamos tu proyecto listo, garantizando acabados
                impecables y acompañamiento posterior para asegurar tu
                satisfacción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
