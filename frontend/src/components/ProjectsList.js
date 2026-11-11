import { getListOfPosts } from "@/lib/queries";
import { ArrowRight } from "lucide-react";
import { PaginationComponent } from "./PaginationComponent";
import Image from "next/image";
import Link from "next/link";

function projectYear(fecha) {
  if (!fecha) return null;
  const date = new Date(fecha);
  if (Number.isNaN(date.getTime())) return null;
  return String(date.getFullYear());
}

function ProjectFacts({ post, year }) {
  const facts = [
    post.Ubicacion ? { label: "Lugar", value: post.Ubicacion } : null,
    post.areaTotal ? { label: "Área", value: post.areaTotal } : null,
    year ? { label: "Año", value: year } : null,
  ].filter(Boolean);

  if (facts.length === 0) return null;

  return (
    <dl className="project-facts">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function RenderPosts({ posts, startIndex = 0, page = 1 }) {
  return (
    <ul className="projects-grid">
      {posts.map((post, index) => {
        const number = String(startIndex + index + 1).padStart(2, "0");
        const featured = page === 1 && index === 0;
        const year = projectYear(post.fecha);
        const imageUrl = post.ImagenPrincipal?.url;
        const imageAlt = post.ImagenPrincipal?.alt || post.nombre;

        return (
          <li
            key={post.id}
            className={featured ? "project-item is-featured" : "project-item"}
          >
            <Link href={`/proyectos/${post.slug}`} className="project-link">
              <div className="project-media">
                {imageUrl ? (
                  <Image
                    alt={imageAlt}
                    src={imageUrl}
                    sizes={
                      featured
                        ? "(max-width: 991px) 100vw, 62vw"
                        : "(max-width: 767px) 100vw, 46vw"
                    }
                    fill
                    className="project-image"
                    priority={featured}
                  />
                ) : null}
                <span className="project-index">{number}</span>
              </div>

              <div className="project-copy">
                {post.categoria ? (
                  <p className="project-kicker">{post.categoria}</p>
                ) : null}
                <h2 className="project-title">{post.nombre}</h2>
                {post.descripcionCorta ? (
                  <p className="project-description">{post.descripcionCorta}</p>
                ) : null}
                <ProjectFacts post={post} year={year} />
                <span className="project-cta">
                  Ver proyecto
                  <ArrowRight aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function ProjectsListFallback() {
  return (
    <div className="projects-grid" role="status" aria-live="polite">
      <span className="visually-hidden">Cargando proyectos</span>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={index === 0 ? "project-skeleton is-featured" : "project-skeleton"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default async function FirstRenderBlogs({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getListOfPosts(currentPage);
  const posts = Array.isArray(data?.data) ? data.data : [];
  const pageCount = data?.meta?.pagination?.pageCount ?? 0;
  const pageSize = data?.meta?.pagination?.pageSize || 6;
  const startIndex = (currentPage - 1) * pageSize;

  return (
    <>
      {posts.length > 0 ? (
        <>
          <RenderPosts posts={posts} startIndex={startIndex} page={currentPage} />
          <PaginationComponent pageCount={pageCount} />
        </>
      ) : (
        <p className="projects-empty">
          No hay proyectos publicados por el momento. Vuelve pronto.
        </p>
      )}
    </>
  );
}

export async function LastThreePosts() {
  const data = await getListOfPosts(1);
  const posts = Array.isArray(data?.data) ? data.data : [];

  return posts.length > 0 ? (
    <RenderPosts posts={posts.slice(0, 3)} page={1} />
  ) : (
    <p className="projects-empty">
      No hay proyectos publicados por el momento. Vuelve pronto.
    </p>
  );
}
