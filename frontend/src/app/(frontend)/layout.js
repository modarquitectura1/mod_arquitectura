// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// style
import "@/assets/css/line-awesome.min.css";
import "@/assets/css/fontAwesomePro.css";
import "@/assets/css/animate.css";
import "@/assets/css/slick.css";
import "@/assets/css/backToTop.css";
import "@/assets/scss/style.scss";

// import Preloader from "@/components/Preloader.js";
import MouseCursor from "@/components/MouseCursor";
import Header from "@/components/Header";
import SearchDropdown from "@/components/SearchDropdown";
import OffCanvas from "@/components/OffCanvas";
import FooterBottomAreaSection from "@/components/PageSections/FooterBottomAreaSection";
import FooterAreaSection from "@/components/PageSections/FooterAreaSection";
import Script from "next/script";
import WowProvider from "@/components/WowProvider";
import { AppWrapper } from "@/context";
import BackToTop from "@/components/BackToTop";
import WhatsappButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "MOD Arquitectura",
  description:
    "MOD Arquitectura, empresa de arquitectura construcción y diseño de interiores.",
};

// Critical layout CSS, inlined so the header/hero keep their size during the
// brief window before the main stylesheet is applied (prevents the load flash).
// overflow-x lives on <body> only (never <html>) so it clips the off-canvas
// drawers without turning the page into a nested scroll container.
const criticalCss = `
  html, body { max-width: 100%; }
  html { overflow-x: hidden; }
  body { min-height: 100vh; margin: 0; overflow-x: hidden; }
  .header-area, .header-bar, .header-sticky { height: 140px; background: #fff; }
  .header-area .header-inner-box .logo { height: 116px; max-width: 160px; }
  .header-area .header-inner-box .logo img {
    width: auto !important; height: 116px !important; max-width: 116px; object-fit: contain;
  }
  .hero-bg { min-height: calc(100svh - 140px); background: #102428; }
  @media (max-width: 991px) {
    .header-area, .header-bar, .header-sticky { height: 108px; }
    .header-area .header-inner-box .logo { height: 92px; max-width: calc(100% - 88px); }
    .header-area .header-inner-box .logo img { height: 92px !important; max-width: 92px; }
  }
  @media (max-width: 767px) {
    .hero-bg { min-height: calc(100svh - 108px); }
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style
          id="critical-layout-css"
          dangerouslySetInnerHTML={{ __html: criticalCss }}
        />
      </head>
      <body>
        {/* Initializes WOW.js globally */}
        <WowProvider />

        {/*preloader*/}
        {/* <Preloader /> */}

        {/*Mouse Cursor*/}
        <MouseCursor />
        <AppWrapper>
          <Header />
          {/* #smooth-content kept as a plain wrapper: it isolates the
              negatively-stacked footer (see _footer.scss). */}
          <div id="smooth-content">
            <div>{children}</div>

            {/*Footer Area*/}
            <FooterAreaSection />

            {/*Footer Bottom Area*/}
            <FooterBottomAreaSection />
          </div>
        </AppWrapper>

        {/*Search Dropdown Area*/}
        <SearchDropdown />

        {/*Off-canvas Area*/}
        <OffCanvas />
        <div className="offcanvas-overlay"></div>

        {/*back to top start*/}
        <BackToTop />

        <Script src="/assets/js/popper.min.js"></Script>
        <Script src="/assets/js/bootstrap.min.js"></Script>
        {/*GSAP Animation JS (native scroll; ScrollSmoother removed)*/}
        <Script src="/assets/js/gsap.min.js"></Script>
        <Script src="/assets/js/gsap-scroll-to-plugin.js"></Script>
        <Script src="/assets/js/SplitText.min.js"></Script>
        <Script src="/assets/js/ScrollTrigger.min.js"></Script>
        <Script src="/assets/js/heading-animation.js"></Script>
        <Script src="/assets/js/paragraph-animation.js"></Script>
      </body>
    </html>
  );
}
