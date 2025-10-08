"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectCategories } from "@/data/projects";

export default function ProjectSectionThree({
  title = "Proyectos por servicio",
  projects = projectCategories,
}) {
  const [activeTab, setActiveTab] = useState(projectCategories[0].id); // Default active tab

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
        <div className="row">
          {/* Dynamic Tabs */}
          <nav>
            <div className="nav project-list" role="tablist">
              {projects.map((category) => (
                <button
                  key={category.id}
                  className={`nav-link ${
                    activeTab === category.id ? "active" : ""
                  }`}
                  id={`${category.id}-tab`}
                  type="button"
                  role="tab"
                  aria-controls={category.id}
                  aria-selected={activeTab === category.id}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Dynamic Tab Content */}
          <div className="tab-content" id="nav-tabContent">
            {projectCategories.map((category) => (
              <div
                key={category.id}
                className={`tab-pane fade ${
                  activeTab === category.id ? "show active" : ""
                }`}
                id={category.id}
                role="tabpanel"
                aria-labelledby={`${category.id}-tab`}
              >
                <div className="row">
                  {category.projects.map((project, index) => (
                    <div
                      key={index}
                      className="col-xl-4 col-lg-4 col-md-6 col-12"
                    >
                      <div
                        className="featured-work-wrapper"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          cursor: "pointer",
                        }}
                      >
                        <div className="featured-work-inner">
                          <div className="fetured-work-bg"></div>
                          <div className="featured-work-info">
                            <h2>{project.number}</h2>
                            <h4>{project.title}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
