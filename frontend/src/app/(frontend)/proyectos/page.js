import Breadcrumb from "@/components/Breadcrumb";
import HeroSectionProjects from "@/components/PageSections/HeroSectionProjects";
import ProjectSectionThree from "@/components/PageSections/ProjectSectionThree";
import CtaAreaSection from "@/components/PageSections/CtaAreaSection";
import { Suspense } from "react";
import FirstRenderBlogs, { ProjectsListFallback } from "@/components/ProjectsList";

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
      <section
        id="projects-catalog"
        className="projects-catalog"
        aria-labelledby="projects-catalog-title"
      >
        <div className="container">
          <header className="projects-catalog-header">
            <h2 id="projects-catalog-title">Obra reciente</h2>
            <p>
              Lugares, escalas y el carácter de cada espacio que hemos construido.
            </p>
          </header>
          <Suspense fallback={<ProjectsListFallback />}>
            <FirstRenderBlogs searchParams={searchParams} />
          </Suspense>
        </div>
      </section>

      {/*Project Section*/}
      <ProjectSectionThree />

      {/*Newsletter Section*/}
      <CtaAreaSection />
    </>
  );
}
