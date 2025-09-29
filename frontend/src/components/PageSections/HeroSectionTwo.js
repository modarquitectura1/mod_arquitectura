import Link from "next/link";

export default function HeroSectionTwo() {
  return (
    <div id="home-1" className="hero-area">
      <div className="hero-area-banner">
        <div className="hero-area-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="section-title">
                  <div className="heading-animation">
                    <h1>
                      Transform your <br /> Space with MOD Arq
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-md-end">
                <div className="service-info">
                  <div className="heading-animation">
                    <p>Since 1995</p>
                    <h4>Architecture</h4>
                    <h4>Interior</h4>
                    <h4>Landscape</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="offset-xl-5 col-xl-7 offset-md-4 col-md-6 text-lg-end">
                <div className="p-animation">
                  <p>
                    Welcome to MOD Arq, a full service architecture and interior
                    design firm. We specialize in creating beautiful, functional
                    spaces that reflect your unique style and personality. Let
                    us help you transform your space into a work of art.
                  </p>
                </div>
                <Link href="/about" className="theme-btn mt-20">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
