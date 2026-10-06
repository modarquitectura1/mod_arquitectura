import Breadcrumb from "@/components/Breadcrumb";
import TeamBannerSection from "@/components/PageSections/TeamBannerSection";
import TeamSectionThree from "@/components/PageSections/TeamSectionThree";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import CtaAreaSection from "@/components/PageSections/CtaAreaSection";
import TeamSection from "@/components/PageSections/TeamSection";
import AboutCEOSection from "@/components/PageSections/AboutCEOSection";

const menus = [{ label: "Equipo", to: "" }];

export default function Team() {
  return (
    <>
      {/*breadcrumb*/}
      <Breadcrumb menus={menus} />

      {/*Team Area*/}
      <TeamBannerSection />

      {/*Team Section*/}
      {/* <TeamSection /> */}
      <AboutCEOSection />

      {/*Newsletter Section*/}
      <CtaAreaSection />
    </>
  );
}
