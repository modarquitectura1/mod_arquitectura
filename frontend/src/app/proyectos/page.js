import Breadcrumb from "@/components/Breadcrumb";
import HeroSectionProjects from "@/components/PageSections/HeroSectionProjects";
import ServiceSectionSix from "@/components/PageSections/ServiceSectionSix";
import ProjectSectionThree from "@/components/PageSections/ProjectSectionThree";
import ClientSection from "@/components/PageSections/ClientSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import CtaAreaSection from "@/components/PageSections/CtaAreaSection";
import { Suspense } from "react";
import FirstRenderBlogs from "@/components/ProjectsList";

const menus = [{ label: "Proyectos", to: "" }];

export default async function Projects(props) {
  const searchParams = await props.searchParams;

  return (
    <>
      {/*breadcrumb*/}
      <Breadcrumb menus={menus} />

      {/*Hero Area*/}
      <HeroSectionProjects />

      {/*Projects List*/}
      <Suspense>
        <div className="mt-30 relative pt-16 px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-[26rem] sm:max-w-[52.5rem] lg:max-w-7xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-[44px] md:leading-[50px] text-green-900 mb-4">
              Proyectos
            </h2>
            <p className="text-gray-500 mb-8">Descubre nuestros proyectos</p>
          </div>
          <FirstRenderBlogs searchParams={searchParams} />
        </div>
      </Suspense>

      {/*Project Section*/}
      <ProjectSectionThree />

      {/*Newsletter Section*/}
      <CtaAreaSection />
    </>
  );
}
