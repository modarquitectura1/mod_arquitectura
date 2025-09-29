import ctaBg from "@/assets/img/cta-bg.jpg";
import Link from "next/link";

export default function CtaAreaSection() {
  return (
    <section className="cta-img-area img-scale">
      <div className="cta-inner text-center">
        <div className="cta-img-wrap">
          <img
            id="grow"
            src={ctaBg.src}
            alt="cta-img"
            data-speed="0.2"
            data-lag="0"
          />
        </div>
        <div className="section-title">
          <div className="heading-animation">
            <h2 className="text-white">
              Comencemos tu nuevo <br /> proyecto
            </h2>
          </div>
          <Link href="/contact" className="theme-btn white-btn mt-30">
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}
