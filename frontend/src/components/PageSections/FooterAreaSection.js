import Link from "next/link";

export default function FooterAreaSection() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link href="/" className="logo">
                MOD Arq.
              </Link>
              <p>Diseña tu Casa Soñada</p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Oficina</h5>
              <p>
                Oficina Corporativa- <br />
                Cali, Colombia
              </p>
              {/* <div className="company-email">
                <a href="#">info@hmcremodelaciones.com</a>
              </div> */}
              <div className="phone-number">
                <p>+57 300 2814117</p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link href="/nosotros">Acerca de</Link>
                  <Link href="/servicios">Servicios</Link>
                  <Link href="/proyectos">Proyectos</Link>
                  <Link href="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Contactanos</h5>
              <ul>
                <li>
                  <div className="social-area">
                    <a href="https://www.facebook.com/MODARQ1/">
                      <i className="lab la-facebook-f"></i>Facebook
                    </a>
                    <a href="https://www.instagram.com/mod_arquitectura/">
                      <i className="lab la-instagram"></i>Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
