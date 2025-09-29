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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </p>
          <p>
            {/* La empresa ha diseñado el John Hancock Center, el One World Trade
            Center y el Burj Khalifa, que actualmente es el edificio más alto
            del mundo. A lo largo de su historia, MOD Arq ha sido reconocida por
            sus diseños innovadores y su compromiso con la sostenibilidad. */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
