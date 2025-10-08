import Image from "next/image";
import offCanvasImg from "@/assets/img/cta-bg.jpg";
import Link from "next/link";
export default function OffCanvas() {
  return (
    <div className="extra-info">
      <div className="close-icon menu-close">
        <button>
          <i className="las la-times"></i>
        </button>
      </div>
      <div className="logo-side mb-30">
        <div className="logo">
          <Link href="/home-2" className="logo">
            MOD Arq.
          </Link>
        </div>
      </div>
      <div className="side-info">
        <div className="contact-list mb-40">
          {/*<h4>About</h4>*/}
          <p>
            Bienvenido a MOD Arquitectura, una empresa de arquitectura y diseño
            de interiores. Nos especializamos en crear espacios hermosos,
            funcionales y adaptados a tus necesidades.
          </p>
          <Image src={offCanvasImg} alt="" style={{ height: "auto" }} />

          <div className="mt-30 mb-30">
            <Link href="/contacto" className="white-btn">
              Contactanos
            </Link>
          </div>
        </div>
        <div className="social-area-wrap">
          <a href="https://www.facebook.com/MODARQ1/">
            <i className="lab la-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/mod_arquitectura/">
            <i className="lab la-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
