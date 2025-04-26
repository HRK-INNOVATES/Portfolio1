import React from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  image?: string;
}

export const portfolioData = {
  name: {
    first: "HRITIK",
    last: "SINGH"
  },
  title: "HRITIK | Full Stack Developer & Computer Science Engineering Student",
  about: {
    bio: [
      "I'm a Computer Science Engineering student with proficiency in C/C++, Python, and Java, and a strong foundation in Data Structures & Algorithms (DSA).",
      "I have experience in front-end development using HTML, CSS, JavaScript, React.js, and Vue.js, as well as back-end technologies including PHP and Node.js, enabling comprehensive full-stack development and effective problem-solving.",
      "I'm passionate about developing innovative solutions and have participated in hackathons like Hack for Impact at IIIT Delhi. I enjoy collaborating with teams to solve real-world challenges and build scalable applications."
    ],
    education: "B.E. Computer Science and Engineering, Institute of Engineering & Technology, Khandari, Agra (2021-2025)",
    experience: "Hackathons, Projects, and Technical Certifications",
    location: "Agra, India (Available Remotely)"
  },
  skills: {
    technicalSkills: [
      {
        title: "Programming Languages",
        skills: ["C/C++", "Python", "Java", "JavaScript"]
      },
      {
        title: "Frontend Development",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js"]
      },
      {
        title: "Backend Development",
        skills: ["Node.js", "PHP", "Python", "Data Structures & Algorithms"]
      },
      {
        title: "Database & Cloud",
        skills: ["SQL", "AWS Cloud", "Database Management"]
      }
    ],
    professionalSkills: [
      {
        name: "Leadership",
        icon: "users"
      },
      {
        name: "Team Player",
        icon: "user-plus"
      },
      {
        name: "Problem Solving",
        icon: "lightbulb"
      },
      {
        name: "Analytical Thinking",
        icon: "line-chart"
      },
      {
        name: "Innovation",
        icon: "code"
      },
      {
        name: "Continuous Learning",
        icon: "book-open"
      }
    ]
  },
  projects: [
    {
      title: "AI Chatbot with NLP",
      description: "Developed an AI chatbot in Python using Natural Language Processing (NLP) and TensorFlow for intelligent, dynamic interactions, deployed via Flask to enhance user engagement.",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      demoUrl: "#",
      repoUrl: "#",
      image: "ai-chatbot.svg"
    },
    {
      title: "Phone Number Location Tracker",
      description: "Created a Python application that tracks phone number locations in real-time using Opencage and Twilio, visualizing data on a map and storing location history via Flask.",
      technologies: ["Python", "Flask", "Opencage", "Twilio"],
      demoUrl: "#",
      repoUrl: "#",
      image: "phone-tracker.svg"
    },
    {
      title: "Face Detection System",
      description: "Developed a face detection system in Python using OpenCV for real-time face identification and tracking in images and video streams.",
      technologies: ["Python", "OpenCV", "Computer Vision"],
      demoUrl: "#",
      repoUrl: "#",
      image: "face-detection.svg"
    },
    {
      title: "Face Expression Detection",
      description: "Created an AI Expression Detection system using Machine Learning in Python that analyzes facial expressions by training models (like CNNs) on emotion-labeled datasets.",
      technologies: ["Python", "Machine Learning", "OpenCV", "TensorFlow"],
      demoUrl: "#",
      repoUrl: "#",
      image: "expression-detection.svg"
    }
  ],
  contact: {
    contactInfo: [
      {
        title: "Email",
        value: "Hritik.innovates@gmail.com",
        isLink: true,
        linkHref: "mailto:Hritik.innovates@gmail.com",
        icon: "mail"
      },
      {
        title: "Phone",
        value: "+91 7518538586",
        isLink: true,
        linkHref: "tel:+917518538586",
        icon: "phone"
      },
      {
        title: "Location",
        value: "Agra, India",
        isLink: false,
        icon: "map-pin"
      }
    ],
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com",
        icon: "github"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hritik-singh-2b00a2215/",
        icon: "linkedin"
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
        icon: "twitter"
      },
      {
        name: "Web",
        url: "https://hritik-portfolio.web.app",
        icon: "globe"
      }
    ]
  }
};
