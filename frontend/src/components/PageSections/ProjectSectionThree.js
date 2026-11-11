import Image from "next/image";
import Link from "next/link";
import { serviceTypes } from "@/data/projects";

export default function ProjectSectionThree({
  title = "Tipos de servicio",
  projects = serviceTypes,
}) {
  return (
    <div
      id="project-3"
      className="project-section section-padding pt-100 pb-100"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>{title}</h2>
          </div>
        </div>

        <div className="row service-types">
          {projects.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-md-6 col-12"
            >
              <article className="service-type-item">
                <h3 className="service-type-title">{item.label}</h3>
                <Link
                  href={item.href || "/proyectos"}
                  className="service-type-link"
                  aria-label={`Ver proyectos de ${item.label}`}
                >
                  <span className="service-type-media">
                    <Image
                      src={item.image}
                      alt={`Proyectos ${item.label}`}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                      className="service-type-img"
                    />
                    <span className="service-type-overlay" aria-hidden="true" />
                  </span>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
