import React, {useContext, useRef} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import BlurText from "../anitext/BlurText.js";
import VariableProximity from "../varprox/VariableProximity.js";
import berlinSubmission from "../../assets/lottie/African Developer.json";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const containerRef = useRef(null);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className={`greet-main ${isDark ? "dark-mode" : ""}`} id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div ref={containerRef} style={{position: "relative"}}>
                <VariableProximity
                  label="Hi, I am Tharanikkumar K"
                  className="variable-proximity-demo"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </div>

              <BlurText
                text="A Creative Software Developer, specializing in Full-stack Web apps and AI-powered solutions. I craft sleek, scalable systems that solve real-world problems with code and clarity."
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
              />

              <div id="resume" className="empty-div"></div>
              <SocialMedia />

              <div className="button-greeting-div">
                <a href="#contact" className="custom-dark-button">
                  Contact me
                </a>
                {greeting.resumeLink && (
                  <a
                    href="https://drive.google.com/file/d/1k_9VGcopdJg28NY5ei2Mm7hOlC-ePM0L/view?usp=drive_link"
                    className="custom-dark-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download my resume
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <DisplayLottie animationData={berlinSubmission} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
