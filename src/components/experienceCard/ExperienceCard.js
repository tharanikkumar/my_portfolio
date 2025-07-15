// src/components/experienceCard/ExperienceCard.js
import React, {useState, useRef, useEffect} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
import PopupCardPortal from "../popup_card/PopupCardPortal";
import {FaGithub} from "react-icons/fa";

export default function ExperienceCard({cardInfo, isDark}) {
  const [showPopup, setShowPopup] = useState(false);
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = useRef();

  useEffect(() => {
    const getColorArrays = () => {
      const colorThief = new ColorThief();
      try {
        if (imgRef.current && imgRef.current.complete) {
          const color = colorThief.getColor(imgRef.current);
          setColorArrays(color);
        }
      } catch (err) {
        console.error("Color extraction failed", err);
      }
    };

    const img = imgRef.current;
    if (img) img.addEventListener("load", getColorArrays);
    return () => {
      if (img) img.removeEventListener("load", getColorArrays);
    };
  }, []);

  if (!cardInfo || !cardInfo.company) return null;

  const GetDescBullets = ({descBullets}) =>
    descBullets?.map((item, i) => (
      <li key={i} className={`subTitle ${isDark ? "dark-mode-text" : ""}`}>
        {item}
      </li>
    ));

  return (
    <>
      <div className={isDark ? "experience-card-dark" : "experience-card"}>
        <div
          style={{
            background:
              colorArrays?.length === 3
                ? `rgb(${colorArrays.join(", ")})`
                : "var(--defaultBackgroundColor)"
          }}
          className="experience-banner"
        >
          <div className="experience-blurred_div"></div>
          <div className="experience-div-company">
            <h5 className="experience-text-company">{cardInfo.company}</h5>
          </div>
          <img
            crossOrigin="anonymous"
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
          />
        </div>

        <div className="experience-text-details">
          <h5
            className={`experience-text-role ${isDark ? "dark-mode-text" : ""}`}
          >
            {cardInfo.role}
          </h5>
          <h5
            className={`experience-text-date ${isDark ? "dark-mode-text" : ""}`}
          >
            {cardInfo.date}
          </h5>
          <p
            className={`subTitle experience-text-desc ${
              isDark ? "dark-mode-text" : ""
            }`}
          >
            {cardInfo.desc}
          </p>
          <ul>
            <GetDescBullets descBullets={cardInfo.descBullets} />
          </ul>

          <div className="experience-btn-row">
            <button
              className="experience-view-btn"
              onClick={() => setShowPopup(true)}
            >
              View Work
            </button>
            {cardInfo.github && (
              <a
                className="experience-github-btn"
                href={cardInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
              >
                <FaGithub size={24} />
              </a>
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <PopupCardPortal
          title={cardInfo.role}
          type="experience"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
