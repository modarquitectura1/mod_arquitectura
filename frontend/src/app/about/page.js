import Breadcrumb from "@/components/Breadcrumb";
import HeroAboutPageSection from "@/components/PageSections/HeroAboutPageSection";
import HistorySection from "@/components/PageSections/HistorySection";
import ServiceSectionFour from "@/components/PageSections/ServiceSectionFour";
import WhyChooseUsSection from "@/components/PageSections/WhyChooseUsSection";
import CounterSection from "@/components/PageSections/CounterSection";
import TeamSectionTwo from "@/components/PageSections/TeamSectionTwo";
import AwardSection from "@/components/PageSections/AwardSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import FaqSection from "@/components/PageSections/FaqSection";
import FeatureLineSection from "@/components/PageSections/FeatureLineSection";
import ProcessSectionTwo from "@/components/PageSections/ProcessSectionTwo";
import ServiceSectionThree from "@/components/PageSections/ServiceSectionThree";
import ServiceSectionTwo from "@/components/PageSections/ServiceSectionTwo";
import ServiceSection from "@/components/PageSections/ServiceSection";
import TeamSection from "@/components/PageSections/TeamSection";

const menus = [{ label: "About", to: "" }];

export const metadata = {
  title:
    "About Us - MOD Arq | Architecture &amp; Interior Design Next Js Template",
  description:
    "About Us - MOD Arq | Architecture &amp; Interior Design Next Js Template",
};

export default function About() {
  return (
    <>
      {/*breadcrumb*/}
      <Breadcrumb menus={menus} />

      {/*Hero Area*/}
      <HeroAboutPageSection />

      {/*History Section*/}
      <HistorySection />

      {/*Service Section*/}
      <ServiceSection />

      {/*Why Choose Us Section*/}
      <ProcessSectionTwo />

      {/*Counter Section*/}
      <CounterSection customClass={"pt-0 pb-50"} />

      {/*Team Section*/}
      <TeamSection />

      {/*Award Section*/}
      {/* <AwardSection /> */}

      {/* <FeatureLineSection /> */}

      {/*FAQ Section*/}
      <FaqSection />
    </>
  );
}
