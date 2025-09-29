import Image from "next/image";
import aboutImage from "@/assets/img/about/about-1.jpg";
import Link from "next/link";

export default function AboutSectionTwo() {
  return (
    <div className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 order-2 order-xl-1">
            <div className="about-bg-wrap">
              <Image src={aboutImage} alt="" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
            <div className="about-content-wrapper">
              <div className="section-title">
                <div className="heading-animation">
                  <h2>
                    Sobre <span>/</span> <br /> MOD Arq
                  </h2>
                </div>
              </div>
              <div className="heading-animation">
                <h3>
                  MOD Arq es un equipo profesional <br /> de arquitectos y
                  diseñadores de interior
                </h3>
              </div>
              <div className="p-animation">
                <p>
                  que sienten pasión por crear espacios hermosos y funcionales.
                  Creemos que el buen diseño debe ser accesible para todos y
                  trabajamos arduamente para hacer realidad la visión de
                  nuestros clientes.
                </p>
              </div>
              <Link href="/about" className="theme-btn mt-30">
                Más información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
