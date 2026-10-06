import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectDetailsSection from "@/components/PageSections/ProjectDetailsSection";
import { getPostBySlug } from "@/lib/queries";

const menus = [
  { label: "Proyectos", to: "/proyectos" },
  { label: "Details", to: "" },
];

export default async function ProjectsShow(props) {
  const { slug } = await props.params;
  const data = await getPostBySlug(slug);
  const post = data?.data[0];

  if (!post) notFound();

  return (
    <>
      {/*breadcrumb*/}
      <Breadcrumb menus={menus} />

      {/*Project Details*/}
      <ProjectDetailsSection post={post} />
    </>
  );
}
