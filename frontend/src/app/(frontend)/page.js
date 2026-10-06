import HeroAreaSection from "@/components/PageSections/HeroAreaSection";
import ClientSection from "@/components/PageSections/ClientSection";
import AboutAreaSection from "@/components/PageSections/AboutAreaSection";
import CounterSection from "@/components/PageSections/CounterSection";
import ServiceSection from "@/components/PageSections/ServiceSection";
import FeatureWorkSectionSlider from "@/components/PageSections/FeatureWorkSectionSlider";
import ProcessSection from "@/components/PageSections/ProcessSection";
import TestimonialSection from "@/components/PageSections/TestimonialSection";
import TeamSection from "@/components/PageSections/TeamSection";
import CtaAreaSection from "@/components/PageSections/CtaAreaSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import BlogSection from "@/components/PageSections/BlogSection";
import ProjectSection from "@/components/PageSections/ProjectSection";
import ContactSection from "@/components/PageSections/ContactSection";
import ProjectSectionThree from "@/components/PageSections/ProjectSectionThree";
import AboutSectionTwo from "@/components/PageSections/AboutSectionTwo";
import WhatsappButton from "@/components/WhatsAppButton";
import TeamSectionThree from "@/components/PageSections/TeamSectionThree";
import AboutCEOSection from "@/components/PageSections/AboutCEOSection";

export default function Home() {
  return (
    <>
      {/*Hero Area*/}
      <HeroAreaSection />

      {/*Client Section*/}
      {/* <ClientSection customClass={"pt-100 pb-0"} /> */}

      {/*About Area*/}
      <AboutSectionTwo />

      {/*Counter Section*/}
      <CounterSection customClass={"pt-50 pb-50"} />

      {/*Service Section*/}
      <ServiceSection />

      {/*Project Section Slider*/}
      {/* <FeatureWorkSectionSlider /> */}

      {/*Project Section*/}
      {/* <ProjectSection /> */}

      {/*Project Section*/}
      <ProjectSectionThree />

      {/*Project Section*/}
      <ProcessSection customClass={"pt-0 pb-40"} />

      {/*Testimonial Section*/}
      <TestimonialSection customClass={"pt-0"} />

      <AboutCEOSection />

      {/*CTA Area*/}
      {/* <CtaAreaSection /> */}

      <ContactSection />
    </>
  );
}
