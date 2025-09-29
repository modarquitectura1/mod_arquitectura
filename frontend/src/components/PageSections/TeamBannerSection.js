import teamBg from "@/assets/img/team/team-bg.jpg";

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
                MOD Arq es un equipo profesional <br /> de arquitectos y
                diseñadores de interior
              </h3>
              <p>
                Somos apasionados por crear espacios hermosos y funcionales.
                Creemos que el buen diseño debe ser accesible para todos, y
                trabajamos arduamente para hacer realidad la visión de nuestros
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
