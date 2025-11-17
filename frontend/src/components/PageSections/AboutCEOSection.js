import Image from "next/image";
import aboutImage from "@/assets/img/ceo.jpg";
import Link from "next/link";

export default function AboutCEOSection() {
  return (
    <div className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7 order-2 order-xl-1">
            <div className="about-bg-wrap">
              <Image src={aboutImage} alt="" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 order-1 order-xl-2">
            <div className="about-content-wrapper">
              <div className="section-title">
                <div className="heading-animation">
                  <h2>Nuestro CEO</h2>
                </div>
              </div>
              <div className="heading-animation">
                <h3>
                  MOD Arquitectura es un equipo profesional <br /> de
                  arquitectos y diseñadores de interior
                </h3>
              </div>
              <div className="p-animation">
                <p>
                  CEO y Fundador de Mod Arquitectura <br /> Liderazgo Basado en
                  la Experiencia y el Detalle <br /> Mi nombre es Daniel Andrés
                  Segura Galvis, y soy el CEO y Fundador de Mod Arquitectura. Mi
                  visión se cimenta en la experiencia práctica adquirida desde
                  mi graduación como Arquitecto en 2011 por la Universidad de
                  San Buenaventura.
                </p>
                <p>
                  A lo largo de mi carrera profesional, tuve el privilegio de
                  trabajar en la construcción y supervisión de acabados de
                  importantes proyectos en Cali. Esta inmersión en el detalle
                  fino de la obra me proporcionó una experiencia invaluable en
                  el manejo de materiales de alta calidad y me permitió
                  desarrollar una visión profunda del diseño contemporáneo
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
