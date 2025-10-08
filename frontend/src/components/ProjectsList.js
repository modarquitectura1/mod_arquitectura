import { getListOfPosts } from "@/lib/queries";
import { Calendar, MoveRight } from "lucide-react";
import { PaginationComponent } from "./PaginationComponent";
import Image from "next/image";
import Link from "next/link";

export function RenderPosts({ posts }) {
  return (
    <ul className="projects-grid">
      {posts.map((post) => {
        return (
          <li key={post.id} className="project-item">
            <Link href={`/projects/${post.slug}`} className="">
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-image-container">
                    <Image
                      alt={
                        post.ImagenPrincipal.alternativeText || "Cover image"
                      }
                      src={post.ImagenPrincipal.url}
                      sizes="(max-width: 640px) 60vw, 35vw"
                      fill
                      className="project-image"
                    />
                  </div>
                </div>
                <div className="project-card-content">
                  <p className="project-date">
                    <Calendar className="calendar-icon" />
                    {new Date(post.fecha).toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="project-title">{post.title}</h2>
                  <p className="project-description">{post.descripcionCorta}</p>
                </div>
                <div className="project-card-footer">
                  <button className="project-button">
                    Learn More <MoveRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default async function FirstRenderBlogs({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getListOfPosts(currentPage);
  const posts = data?.data;
  const pageCount = data?.meta.pagination.pageCount;

  return (
    <>
      {posts.length > 0 ? (
        <>
          <RenderPosts posts={posts} />
          <PaginationComponent pageCount={pageCount} />
        </>
      ) : (
        <p className="projects-empty">
          No hay publicaciones por el momento, ¡vuelve pronto!
        </p>
      )}
    </>
  );
}

export async function LastThreePosts() {
  const currentPage = 1;
  const data = await getListOfPosts(currentPage);
  const posts = data?.data;

  return posts.length > 0 ? (
    <RenderPosts posts={posts.slice(0, 3)} />
  ) : (
    <p className="projects-empty">
      No hay publicaciones por el momento, ¡vuelve pronto!
    </p>
  );
}
