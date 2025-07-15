import React, {useState, useContext} from "react";
import "../../components/experienceCard/ExperienceCard.scss";
import ColorThief from "colorthief";
import PopupCardPortal from "../../components/popup_card/PopupCardPortal";
import {FaGithub} from "react-icons/fa";


import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";


export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="project-container">
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.projectName}
                    className="card-image"
                  />
                </div>

                <div className="project-detail">
                  <h5 className="project-title">{project.projectName}</h5>
                  <p className="card-subtitle">{project.projectDesc}</p>

                  <div className="project-card-footer">
                    <div className="footer-left">
                      <button
                        className="project-tag"
                        onClick={() => setSelectedProject(project.projectName)}
                      >
                        View Work
                      </button>
                    </div>
                    <div className="footer-right">
                      {project.github && (
                        <button
                          className="experience-github-btn"
                          onClick={() => window.open(project.github, "_blank")}
                          title="View GitHub"
                        >
                          <FaGithub />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedProject && (
            <PopupCardPortal
              title={selectedProject}
              type="project"
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </div>
    </Fade>
  );
}
