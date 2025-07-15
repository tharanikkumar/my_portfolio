import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>

          {techStack.experience.map((section, i) => (
            <div key={i} className="skill-group">
              <h2 className="skill-subheading">{section.heading}</h2>
              <div className="skill-columns">
                {section.skills.map((exp, j) => {
                  const progressStyle = {
                    width: exp.progressPercentage
                  };
                  return (
                    <div key={j} className="skill">
                      <p className="stack-name">{exp.Stack}</p>
                      <div className="meter-wrapper">
                        <div className="meter">
                          <span style={progressStyle}></span>
                        </div>
                        <span className="percentage">
                          {exp.progressPercentage}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    </Fade>
  );
}
