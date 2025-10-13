// Project Images
import projectDetailsImage from "@/assets/img/project/project-details.jpg";
import challengeImg1 from "@/assets/img/project/challenge-img.jpg";
import challengeImg2 from "@/assets/img/project/challenge-img-2.jpg";
import solutionsImg from "@/assets/img/project/solutions-img.jpg";
import {
  challenges,
  galleryImages,
  projectBrief,
  projectInfo,
  solutions,
} from "@/data/projects";

export default function ProjectDetailsSection({ post }) {
  return (
    <div className="project-details-wrap section-padding pt-0">
      <div className="container">
        {/* Project Overview */}
        <div className="row gx-5 justify-content-around align-items-start mt-30 project-overview-row">
          {/* Project Image & Brief */}
          <div className="col-xl-6 col-lg-6 project-image-section">
            <div className="project-bg">
              <img src={post.ImagenPrincipal.url} alt="Project Details" />
              <div className="project-brief-wrap">
                {/* {projectBrief.map((item, index) => ( */}
                <div
                  // key={index}
                  className={`single-brief `}
                >
                  <h6>Area Total</h6>
                  <p>{post.areaTotal}</p>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="col-xl-6 col-lg-6 project-details-section">
            <div className="project-details-inner">
              <div className="section-title">
                <h1>{post.nombre}</h1>
                <h6 className="text-end section-subtitle">{post.categoria}</h6>
              </div>
              <div className="project-details-info">
                {/* {projectInfo.map((info, index) => ( */}
                <div className="single-info">
                  <p>Ubicacion</p>
                  <h4>{post.Ubicacion}</h4>
                </div>
                <div className="single-info">
                  <p>Fecha</p>
                  <h4>{post.fecha}</h4>
                </div>
                {/* ))} */}
              </div>
              <div className="project-desc">
                <p>{post.descripcionCorta}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {post.imagenes && post.imagenes.length > 0 && (
          <div className="gallery-section">
            <h4 className="gallery-title">Galería</h4>
            <hr className="gallery-divider" />
            <div className="gallery-grid">
              {post.imagenes.map((image, index) => (
                <div key={index} className="gallery-item">
                  <div className="gallery-image-container">
                    <img
                      src={image.url}
                      alt={`Imagen del proyecto ${index + 1}`}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="gallery-overlay"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
