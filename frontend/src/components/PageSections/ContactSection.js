export default function ContactSection() {
  return (
    <div className="contact-section section-padding pt-0">
      <div className="container">
        <div className="row mt-60">
          <div className="col-xl-5 col-lg-5">
            <div className="contact-info-inner">
              <div className="single-contact-info">
                <p>Correo Electrónico</p>
                <h4>Modarquitectura1@gmail.com</h4>
              </div>
              <div className="single-contact-info">
                <p>Teléfono</p>
                <h4>+57 300 281 4117</h4>
              </div>
              <div className="single-contact-info">
                <p>Ciudad</p>
                <h4>Cali, Colombia</h4>
              </div>
              <div className="social-area">
                <a href="https://www.facebook.com/MODARQ1/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/mod_arquitectura/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-6">
            <div className="subimit-form-wrap">
              <div className="section-title">
                <h2>Enviar Formulario </h2>
              </div>
              <form action="#">
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Teléfono" />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                ></textarea>
                <input type="submit" value="Enviar" />
              </form>

              <div className="contact-text">
                <p>
                  ¿Tienes alguna pregunta sobre nuestros servicios o quieres
                  comenzar tu proyecto de diseño? ¡Estamos aquí para ayudarte!
                  Completa el formulario de contacto a continuación y uno de los
                  miembros de nuestro equipo se pondrá en contacto contigo en un
                  plazo de 24 horas. Alternativamente, puedes comunicarte con
                  nosotros por teléfono o correo electrónico utilizando la
                  información de contacto proporcionada abajo. ¡Esperamos saber
                  de ti!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
