/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Tharanikkumar",
  title: "Hi, I’m Tharanikkumar — Code. Build. Deploy.",
  subTitle: emoji(
    "A Creative Software Developer ⚙️ specializing in full-stack web apps and AI-powered solutions. I craft sleek, scalable systems that solve real-world problems with code and clarity."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/tharanikkumar",
  linkedin: "https://www.linkedin.com/in/tharanikkumar-k-70aa56257/",
  gmail: "tharanikkumar6@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE SOFTWARE DEVELOPER BRIDGING FULL-STACK & AI",
  skills: [
    emoji("⚡ Build full-stack web apps using React.js, PHP, and MySQL"),
    emoji("⚡ Implement ML workflows using YOLOv8 and Gemini AI"),
    emoji(
      "⚡ Deploy cloud-native solutions using Docker, Firebase, and REST APIs"
    )
  ],
  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "nodejs", fontAwesomeClassname: "fab fa-node"},
    {skillName: "npm", fontAwesomeClassname: "fab fa-npm"},
    {skillName: "sql-database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "firebase", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Pannai Matric Higher Secondary School ",
      logo: require("./assets/images/pannai_logo.jpeg"),
      subHeader: "10th Grade",
      duration: "June 2019 - April 2020",
      desc: "Percentage - 96.2%"
    },
    {
      schoolName: "Pannai Matric Higher Secondary School ",
      logo: require("./assets/images/pannai_logo.jpeg"),
      subHeader: "12th Grade",
      duration: "June 2021 - May 2022",
      desc: "Percentage - 85.5%"
    },
    {
      schoolName: "SRM Institute of Science and Technology",
      logo: require("./assets/images/srm_logo.webp"),
      subHeader: "B.Tech. CSE (AI & ML)",
      duration: "September 2022 - May 2026",
      desc: "CGPA - 9.18"
    }
  ]
};

// Tech Stack Experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      heading: "Programming Languages",
      skills: [
        {Stack: "Java", progressPercentage: "90%"},
        {Stack: "Python", progressPercentage: "85%"},
        {Stack: "C", progressPercentage: "75%"},
        {Stack: "JavaScript", progressPercentage: "80%"},
        {Stack: "TypeScript", progressPercentage: "70%"},
        {Stack: "Kotlin", progressPercentage: "70%"},
        {Stack: "PHP", progressPercentage: "65%"}
      ]
    },
    {
      heading: "Web Technologies & Frameworks",
      skills: [
        {Stack: "HTML", progressPercentage: "95%"},
        {Stack: "CSS", progressPercentage: "90%"},
        {Stack: "ReactJS", progressPercentage: "85%"},
        {Stack: "Tailwind CSS", progressPercentage: "80%"},
        {Stack: "Flask", progressPercentage: "75%"},
        {Stack: "Streamlit", progressPercentage: "80%"}
      ]
    },
    {
      heading: "AI/ML & Tools",
      skills: [
        {Stack: "YOLOv8", progressPercentage: "85%"},
        {Stack: "Gemini AI", progressPercentage: "80%"},
        {Stack: "scikit-learn", progressPercentage: "70%"},
        {Stack: "ONNX", progressPercentage: "60%"},
        {Stack: "Roboflow API", progressPercentage: "80%"},
        {Stack: "OpenCV", progressPercentage: "65%"}
      ]
    },
    {
      heading: "DevOps & Cloud",
      skills: [
        {Stack: "Docker", progressPercentage: "75%"},
        {Stack: "Firebase", progressPercentage: "80%"},
        {Stack: "REST APIs", progressPercentage: "85%"},
        {Stack: "Linux", progressPercentage: "70%"},
        {Stack: "Git & GitHub", progressPercentage: "90%"}
      ]
    }
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Web Development - Intern",
      company: "MoE's Innovation Cell",
      companylogo: require("./assets/images/Moe_logo1.jpg"),
      date: "Nov 2024 – Jan 2025",
      desc: "Built an Admin–Evaluator portal to automate internal workflows.",
      descBullets: [
        "Developed evaluator registration and login pages using React and PHP",
        "Implemented admin dashboard for evaluator approval and theme preferences"
      ],
      popupDetails: [
        "Developed web apps using React.js and PHP that reduced load time from 5s to 2s.",
        "Designed and optimized MySQL database schemas for scalability, maintaining data integrity and reducing query time by 40%.",
        "Created an admin dashboard with role-based access to approve, edit, or delete evaluators.",
        "Enabled theme preference settings and profile management for evaluators.",
        "Oversaw GitHub protocols for branching and reviews among a team of 3 developers.",
        "Integrated MySQL as backend and REST APIs for all operations.",
        "Conducted comprehensive testing and debugging, ensuring 99.9% uptime.",
        "Inherited high-impact modules, such as data visualizers and user dashboards, which were used as models for subsequent initiatives."
      ],
      website: "https://sic.mic.gov.in/",
      github: "https://github.com/tharanikkumar/sic",
      certification:
        "https://drive.google.com/file/d/1UOTvieyTpFu2NjDNnSJqfzRJo7tGjGcm/view?usp=drive_link"
    }
  ]
};


// ✅ Open Source Section (Fixed)
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects
const bigProjects = {
  display: true,
  title: "Projects",
  subtitle: "Personal Projects",
  projects: [
    {
      image: require("./assets/images/autoinspect.png"),
      projectName: "AutoInspect AI",
      projectDesc:
        "Deep learning–based vehicle inspection system enhanced with LLM for real-time repair estimation.",
      popupDetails: [
        "Achieved 92.3% mAP using YOLOv8-seg trained on 500+ labeled images.",
        "Integrated Gemini AI for intelligent repair cost estimation in ₹.",
        "Used Flask and Streamlit to build a beautiful UI with real-time overlays.",
        "Supported PDF report generation with visual damage highlights.",
        "Deployed with fallback to local ONNX inference for offline use."
      ],
      website: "https://vehicle-damage-detection-1.onrender.com/",
      github: "https://github.com/tharanikkumar/vehicle-damage-detection"
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "PROJEX",
      projectDesc:
        "An educational app with guided code, resources, and expert mentoring for building real-world projects.",
      popupDetails: [
        "Published to Google Play Store with 1,000+ downloads.",
        "Features: categorized source codes, expert mentoring, YouTube integration.",
        "Built using Kotlin for Android frontend and Firebase backend.",
        "Integrated versioning and update delivery without reinstalling app.",
        "Built a searchable dynamic listing for real-time project browsing."
      ],
      website:
        "https://play.google.com/store/apps/details?id=com.Projex.success&hl=en-US&pli=1",
      github: "https://github.com/tharanikkumar/PROJEX"
    }
  ],
  display: true
};





// Achievements
const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "My certifications and awards.",
  achievementsCards: [
    {
      title: "IBM",
      subtitle: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      image: require("./assets/images/IBM-Logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/verify/M7IVNVG2NMBN"
        }
      ]
    },
    {
      title: "MongoDB",
      subtitle: "Completed 12 certified MongoDB courses.",
      image: require("./assets/images/mongo_db1.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1oJq400hY3CwYpXPsI74SYWHNkOJaszSw/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Servicenow",
      subtitle: "Micro-Certification - Welcome to ServiceNow",
      image: require("./assets/images/servicenow-logo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1QrhHyB9E6yrY1bv_ahgyMNO0tb_0uQXZ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Great Learning",
      subtitle: "Data Structures in C",
      image: require("./assets/images/gl_logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1U46ccQhqnyZmQSW_hBaQPSoFibI6_Tkp/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Deloitte",
      subtitle: "Data Analytics Job Simulation",
      image: require("./assets/images/deloitte_logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1mqVgZLc9JdYNmBR0LVOzCi97lIuJrI65/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Hackerrank",
      subtitle: "Completed certified courses.",
      image: require("./assets/images/hrank.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1eIgtjSvwKE6ljdYrRPJA-59gzmJEtu1F/view?usp=drive_link"
        }
      ]
    },
    {
      title: "LinkedIn Learning",
      subtitle: "Completed certified courses.",
      image: require("./assets/images/linkedin_learning.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1JtgzRUOjuyDk3BAquqO7qE7nWHoCfYEt/view?usp=drive_link"
        }
      ]
    },
    {
      title: "AngloFone",
      subtitle: "Completed 3 Months Communication English Program",
      image: require("./assets/images/ang_logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1o6XYRjK5aaKQa-IexAWOc4TqKekI5ofj/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true
};


// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "I like writing about my projects and experiences.",
  displayMediumBlogs: "true",
  blogs: [],
  display: true
};

// Talk Section
const talkSection = {
  title: "TALKS",
  subtitle: "I love sharing my tech insights and knowledge.",
  talks: [],
  display: true
};

// Podcast
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Technology, learning, and dev stories",
  podcast: [],
  display: false
};




// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Feel free to reach out for collaborations.",
  number: "+91 7397177697",
  email_address: "tharanikkumar6@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "twitter",
  display: false
};

// Hireable status
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
