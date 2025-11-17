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
            ​En Mod Arquitectura, creemos que la calidad excepcional, el diseño
            personalizado y los acabados premium no deben ser exclusivos de unos
            pocos. Somos una empresa dedicada a crear espacios que resuenan con
            las necesidades de cada cliente, brindando la mejor opción
            arquitectónica y de interiorismo, sin comprometer tu presupuesto ni
            la excelencia.
          </p>
          <p>
            Nuestro enfoque se centra en la personalización completa, escuchando
            tus ideas y ajustándonos a tus posibilidades financieras,
            garantizando una satisfacción total. Convertimos los límites de un
            presupuesto fijo en la oportunidad de diseñar soluciones innovadoras
            y de alta calidad. ​Nuestra Promesa: Un diseño especial, acabados
            garantizados y la tranquilidad de saber que tu proyecto está en
            manos expertas y transparentes.
          </p>
        </div>
      </div>
    </div>
  );
}
