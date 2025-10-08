import Breadcrumb from "@/components/Breadcrumb";
import HeroSectionServicePage from "@/components/PageSections/HeroSectionServicePage";
import ServiceSectionFive from "@/components/PageSections/ServiceSectionFive";
import FeatureSectionTwo from "@/components/PageSections/FeatureSectionTwo";
import ProcessSection from "@/components/PageSections/ProcessSection";
import TestimonialSection from "@/components/PageSections/TestimonialSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import ProjectSectionThree from "@/components/PageSections/ProjectSectionThree";
import { projectAcabados, projectConstruccion } from "@/data/projects";
import CtaAreaSection from "@/components/PageSections/CtaAreaSection";
import FeatureLineSection from "@/components/PageSections/FeatureLineSection";

const menus = [{ label: "Servicios", to: "" }];

export default function Services() {
  return (
    <>
      {/*breadcrumb*/}
      <Breadcrumb menus={menus} />

      {/*Hero Area*/}
      <HeroSectionServicePage />

      {/*Service Section*/}
      {/* <ServiceSectionFive /> */}
      <ProjectSectionThree title="Acabados" projects={projectAcabados} />

      <FeatureLineSection />

      <ProjectSectionThree
        title="Construcción"
        projects={projectConstruccion}
      />

      {/*Feature Area*/}
      {/* <FeatureSectionTwo /> */}

      {/*Process Section*/}
      {/* <ProcessSection customClass={"pb-100"} /> */}

      {/*Testimonial Section*/}
      <TestimonialSection customClass={"pt-50"} />

      {/*Newsletter Section*/}
      {/* <NewsletterSection /> */}
      <CtaAreaSection />
    </>
  );
}
