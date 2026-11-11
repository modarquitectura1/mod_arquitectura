export default function ProjectDetailsSection({ post }) {
  const fecha = post.fecha?.slice(0, 10);

  return (
    <div className="project-details-wrap section-padding pt-0">
      <div className="container">
        {/* Horizontal Project Hero */}
        <article className="project-hero">
          <div className="project-hero-media">
            <img
              src={post.ImagenPrincipal?.url}
              alt={post.ImagenPrincipal?.alt || post.nombre}
            />
            <div className="project-hero-media-veil" aria-hidden="true" />
            {post.areaTotal && (
              <div className="project-hero-badge">
                <span className="project-hero-badge-label">Área Total</span>
                <span className="project-hero-badge-value">{post.areaTotal}</span>
              </div>
            )}
          </div>

          <div className="project-hero-body">
            <header className="project-hero-header">
              {post.categoria && (
                <span className="project-hero-category">{post.categoria}</span>
              )}
              <h1 className="project-hero-title">{post.nombre}</h1>
            </header>

            <div className="project-hero-meta">
              {post.Ubicacion && (
                <div className="project-hero-meta-item">
                  <span className="meta-label">Ubicación</span>
                  <span className="meta-value">{post.Ubicacion}</span>
                </div>
              )}
              {fecha && (
                <div className="project-hero-meta-item">
                  <span className="meta-label">Fecha</span>
                  <span className="meta-value">{fecha}</span>
                </div>
              )}
              {post.areaTotal && (
                <div className="project-hero-meta-item project-hero-meta-item--desktop-only">
                  <span className="meta-label">Área Total</span>
                  <span className="meta-value">{post.areaTotal}</span>
                </div>
              )}
            </div>

            {post.descripcionCorta && (
              <div className="project-hero-desc">
                <p>{post.descripcionCorta}</p>
              </div>
            )}
          </div>
        </article>

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
                      alt={image.alt || `Imagen del proyecto ${index + 1}`}
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
