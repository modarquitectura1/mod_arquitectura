import historyImage1 from "@/assets/img/about/history-1.jpg";
import historyImage2 from "@/assets/img/about/history-2.jpg";
import historyImage3 from "@/assets/img/about/history-3.jpg";

export default function HistorySection() {
  return (
    <div className="history-section section-padding pt-60 pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-history-item">
              <div className="history-img">
                <img
                  src={historyImage1.src}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-history-item">
              <div className="content-wrap">
                <h5>Fundación de MOD Arq</h5>
                <p>1995</p>
                <p>
                  {/* La empresa es fundada por John Smith, un arquitecto
                  experimentado con pasión por el diseño sostenible. */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-history-item">
              <div className="history-img d-none d-lg-block">
                <img
                  src={historyImage2.src}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="timeline-wrap"></div>
        </div>

        <div className="row mt-120 align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-6 order-2">
            <div className="single-history-item">
              <div className="content-wrap">
                <h5>Finalización del Primer Proyecto</h5>
                <p>1996 - 1998</p>
                <p>
                  {/*
                  La empresa completa su primer gran proyecto, un edificio de
                  oficinas certificado LEED que establece un nuevo estándar.
                   */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 order-1 order-xl-2">
            <div className="single-history-item">
              <div className="history-img">
                <img
                  src={historyImage3.src}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 d-xs-block d-xl-none mt-60 order-3">
            <div className="single-history-item">
              <div className="history-img">
                <img
                  src={historyImage2.src}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 order-4">
            <div className="single-history-item">
              <div className="content-wrap">
                <h5>Expansión de Servicios</h5>
                <p>2001</p>
                <p>
                  {/*
                  La empresa amplía sus servicios para incluir diseño de
                  interiores y contrata a su primer diseñador de interiores.
                  */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
