import Breadcrumb from "@/components/Breadcrumb";
import NewsletterSection from "@/components/PageSections/NewsletterSection";
import TestimonialSectionFour from "@/components/PageSections/TestimonialSectionFour";
import ProjectDetailsSection from "@/components/PageSections/ProjectDetailsSection";
import { getPostBySlug } from "@/lib/queries";

const menus = [
  { label: "Proyectos", to: "/proyectos" },
  { label: "Details", to: "" },
];

export default async function ProjectsShow(props) {
  const { locale, slug } = await props.params;
  console.log(slug);
  const data = await getPostBySlug(slug);

  console.log(data);
  const post = data?.data[0];

  return (
    <>
      {/*breadcrumb*/}
      <Breadcrumb menus={menus} />

      {/*Project Details*/}
      <ProjectDetailsSection post={post} />
    </>
  );
}
