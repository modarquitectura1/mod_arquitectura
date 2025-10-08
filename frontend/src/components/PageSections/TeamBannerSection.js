import teamBg from "@/assets/img/about/about-2.jpg";

export default function TeamBannerSection() {
  return (
    <div className="team-area section-padding pt-0 pb-100">
      <div className="container">
        <div className="row align-items-center mt-30">
          <div className="col-xl-7 col-lg-7 order-2 order-xl-1">
            <div className="team-bg-wrap">
              <img src={teamBg.src} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
            <div className="team-content-wrapper">
              <div className="section-title">
                <h2>Conoce a nuestro equipo</h2>
              </div>
              <h3>
                MOD Arquitectura es un equipo profesional <br /> de arquitectos
                y diseñadores de interior
              </h3>
              <p>
                MOD ARQUITECTURA está conformado por arquitectos, diseñadores y
                técnicos en construcción apasionados por generar espacios que
                inspiren. Cada miembro aporta su especialidad: diseño interior,
                visualización, obra estructural, gestión de acabados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
