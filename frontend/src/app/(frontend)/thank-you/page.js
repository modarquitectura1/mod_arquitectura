export const metadata = {
  robots: {
    index: false,
  },
};

export default async function ThankYou() {
  return (
    <>
      <div className="thank-you-page">
        <div className="thank-you-container">
          <div className="thank-you-content">
            <p className="success-message">Email Enviado Correctamente</p>

            <h1 className="main-title">
              Gracias por contactar a MOD Arquitectura
            </h1>
            <p className="subtitle">
              Nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
