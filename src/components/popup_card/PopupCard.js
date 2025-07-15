import React from "react";
import "./PopupCard.scss";
import {workExperiences, bigProjects} from "../../portfolio";
import {useParams, Link} from "react-router-dom";

export default function PopupCard() {
  const {type, name} = useParams();
  const decodedName = decodeURIComponent(name).toLowerCase();

  const experience =
    type === "experience"
      ? workExperiences.experience.find(
          exp => exp.role.toLowerCase() === decodedName
        )
      : null;

  const project =
    type === "project"
      ? bigProjects.projects.find(
          proj => proj.projectName.toLowerCase() === decodedName
        )
      : null;

  const data = type === "experience" ? experience : project;

  if (!data) {
    return (
      <div className="popup-overlay">
        <div className="popup-card">
          <Link to="/" className="popup-close">
            ×
          </Link>
          <h2 className="popup-title">Not Found</h2>
          <p className="popup-company">
            No {type} found with the name "{name}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <Link to="/" className="popup-close">
          ×
        </Link>

        <div className="popup-header">
          <img
            src={type === "experience" ? data.companylogo : data.image}
            alt="logo"
            className="popup-logo"
          />
          <div>
            <h2 className="popup-title">
              {type === "experience" ? data.role : data.projectName}
            </h2>
            <p className="popup-company">
              {type === "experience" ? data.company : data.projectDesc}
            </p>
          </div>
        </div>

        <div className="popup-scrollable-content">
          {data.popupDetails?.length > 0 ? (
            <ul className="popup-details">
              {data.popupDetails.map((point, index) => (
                <li key={index} className="popup-point">
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="popup-point">No additional details provided.</p>
          )}
        </div>

        <div className="popup-footer">
          {data.website && (
            <a
              className="popup-website-btn"
              href={data.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          )}
          {data.github && (
            <a
              className="popup-website-btn"
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
