import historyImage1 from "@/assets/img/about/history-1.jpg";
import historyImage2 from "@/assets/img/project/2-1.jpg";
import historyImage3 from "@/assets/img/about/history-3.jpg";

export default function HistorySection() {
  return (
    <div className="history-section section-padding pt-60 pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="single-history-item">
              <div className="history-img">
                <img
                  src={historyImage1.src}
                  style={{ objectFit: "cover", width: "100%", height: "400px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="single-history-item">
              <div className="content-wrap">
                <h5 style={{ marginBottom: "50px" }}>
                  Fundación de MOD Arq - 2017
                </h5>
                <p>
                  {/* La empresa es fundada por John Smith, un arquitecto
                  experimentado con pasión por el diseño sostenible. */}
                  Mod Arquitectura nació en 2017 inicialmente como una firma
                  especializada en remodelación de interiores de alto nivel, con
                  un fuerte énfasis en la personalización de casas campestres y
                  acabados premium. Construimos nuestra reputación al servicio
                  de clientes con alto poder adquisitivo, entendiendo los más
                  altos estándares de diseño y lujo.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-history-item">
              <div className="history-img d-none d-lg-block">
                <img
                  src={historyImage2.src}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="timeline-wrap"></div>
        </div>

        <div className="row mt-120 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 order-2">
            <div className="single-history-item">
              <div className="content-wrap">
                <h5>ACTUALIDAD - 2025</h5>
                <p>
                  Hoy, hemos optimizado nuestra cadena de valor de manera
                  radical. Gracias a contar con nuestra propia bodega y taller,
                  donde creamos diseños, trabajamos la carpintería y almacenamos
                  acabados negociados a precios excelentes, logramos ofrecer
                  proyectos a precios muy asequibles, manteniendo la calidad y
                  la garantía que siempre nos ha caracterizado. Hemos
                  democratizado el diseño de alta gama.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 order-1 order-xl-2">
            <div className="single-history-item">
              <div className="history-img">
                <img
                  src={historyImage2.src}
                  style={{ objectFit: "cover", width: "100%", height: "400px" }}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/*    <div className="col-xl-4 col-lg-4 col-md-6 order-4">
            <div className="single-history-item">
              <div className="content-wrap">
                <h5>Expansión de Servicios</h5>
                <p>2001</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
