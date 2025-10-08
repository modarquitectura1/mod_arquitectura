import featureImage from "@/assets/img/about/about-feature-img.jpg";

export default function HeroAboutPageSection() {
  return (
    <div id="about_page" className="hero-area">
      <div className="container">
        <div className="row hero-area-inner">
          <div className="col-xl-9 col-lg-9">
            <div className="hero-area-content">
              <div className="section-title">
                <h1>
                  Conoce Nuestra <i>/</i> <br />
                </h1>
                <h1 className="pl-150">Visión y Valores</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 d-none d-lg-block text-lg-end">
            <h4>Nuestra Historia</h4>
          </div>
        </div>
        <div className="row">
          <div className="about-feature-img">
            <img src={featureImage.src} alt="" />
          </div>
        </div>
        <div className="row mt-30">
          <p>
            {/* MOD Arq fue fundada en 1995 en California, EE.UU. La empresa fue
            establecida por Louis Skidmore y Nathaniel Owings, y posteriormente
            se unió John O. Merrill. */}
            MOD ARQUITECTURA nació con la pasión de ofrecer soluciones
            arquitectónicas integrales en Cali, Valle del Cauca. Con un enfoque
            centrado en el cliente, combinamos creatividad y rigor técnico para
            diseñar, construir y remodelar espacios residenciales únicos. Cada
            proyecto refleja nuestra visión: funcionalidad, estética y
            compromiso con la comunidad.
          </p>
          <p>
            Desde remodelaciones de apartamentos hasta viviendas totalmente
            nuevas y proyectos de carpintería a medida, nuestra experiencia nos
            ha permitido consolidarnos como una de las firmas de arquitectura
            con mayor reconocimiento local. Nos basamos en valores de
            transparencia, calidad y diseño emocional, siempre teniendo en
            cuenta el contexto climático, cultural y urbano de Cali.
          </p>
        </div>
      </div>
    </div>
  );
}
