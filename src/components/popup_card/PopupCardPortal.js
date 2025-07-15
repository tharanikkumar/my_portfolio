// src/components/popup_card/PopupCardPortal.js
import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import "./PopupCard.scss";
import {bigProjects, workExperiences} from "../../portfolio";

export default function PopupCardPortal({title, type, onClose}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    const stopPropagation = e => {
      if (el && el.contains(e.target)) {
        e.stopPropagation();
      }
    };

    el?.addEventListener("wheel", stopPropagation, {passive: false});
    el?.addEventListener("touchmove", stopPropagation, {passive: false});

    return () => {
      el?.removeEventListener("wheel", stopPropagation);
      el?.removeEventListener("touchmove", stopPropagation);
    };
  }, []);

  let data = null;
  if (type === "experience") {
    data = workExperiences.experience.find(
      exp =>
        exp.role === title || exp.role?.toLowerCase() === title?.toLowerCase()
    );
  } else if (type === "project") {
    data = bigProjects.projects.find(
      proj =>
        proj.projectName === title ||
        proj.projectName?.toLowerCase() === title?.toLowerCase()
    );
  }

  if (!data) return null;

  const {
    company,
    role,
    companylogo,
    image,
    projectName,
    projectDesc,
    popupDetails,
    website,
    github,
    certification
  } = data;

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close" onClick={onClose}>
          ×
        </button>

        <div className="popup-header-row">
          <img
            src={type === "project" ? image : companylogo}
            alt="logo"
            className="popup-logo"
          />
          <div className="popup-text-group">
            <p className="popup-company">
              {type === "project" ? projectName : company}
            </p>
            <h2 className="popup-role">
              {type === "project" ? projectDesc : role}
            </h2>
          </div>
        </div>

        <div className="popup-scrollable-content" ref={scrollRef}>
          {popupDetails?.length ? (
            <ul className="popup-details">
              {popupDetails.map((point, i) => (
                <li key={i} className="popup-point">
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="popup-point">No additional details provided.</p>
          )}
        </div>

        <div className="popup-footer">
          {type === "experience" && certification && (
            <a
              className="popup-website-btn"
              href={certification}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          )}
          {type === "project" && github && (
            <a
              className="popup-website-btn"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {website && (
            <a
              className="popup-website-btn"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("popup-root")
  );
}
