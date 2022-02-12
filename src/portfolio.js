/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Thanhal",
  logo_name: "thanhal.pa()",
  // nickname: "",
  full_name: "Thanhal P A",
  subTitle: "Mobile App Developer, React Native Enthusiast, Life Long Learner.",
  resumeLink: "https://drive.google.com/",
  mail: "mailto:thanhalpa@gmail.com",
};

const socialMediaLinks = {
  stackoverflow: "https://stackoverflow.com/users/10657559",
  github: "https://github.com/thanhal-p-a",
  linkedin: "https://www.linkedin.com/in/thanhal-p-a-3749ab143/",
  gmail: "thanhalpa@gmail.com",
  gitlab: "https://gitlab.com/",
  instagram: "https://www.instagram.com/thanhal_rafi/",
  whatsapp: "https://wa.me/919656464080?text="
};

const contactInfo = {
  email_address: "thanhalpa@gmail.com",
};

const skills = {
  data: [
    {
      title: "Mobile App Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces for Mobile Applications",
        "⚡ Building and uploading applications for both IOS and Android.",
        "⚡ Integration of third party services such as Firebase",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Cochin University of Science and Technology",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "CusatLogo.png",
      alt_name: "CUSAT",
      duration: "2014 - 2018",
      descriptions: ["⚡ I have completed my B.Tech in C.S.E with 7.1 CGPA."],
      website_link: "https://www.cusat.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Training",
      subtitle: "React Native Learning",
      logo_path: "LookingsLogo.png",
      certificate_link: "https://lookingsoft.com/",
      alt_name: "Reply",
      color_code: "#7A7A7A",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've 3+ years of UI / Front End experience in Cross-Platform Mobile App Development using React Native.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "React Native Developer",
          company: "Zerone Consulting Pvt Ltd",
          company_url: "https://www.zerone-consulting.com/",
          logo_path: "ZeroneLogo.png",
          duration: "August 2020 - present",
          location: "Cochin,kerala,India",
          description: "Senior Software Engineer (React Native)",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        {
          title: "React Native Trainee",
          company: "Lookings Soft",
          company_url: "https://lookingsoft.com/",
          logo_path: "LookingsLogo.png",
          duration: "Jul 2018 - Sep 2018",
          location: "Cochin,kerala,India",
          description: "React Native Trainee",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create and develop Mobile Applications for both Android and IOS. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://www.google.com",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Comet",
      url: "https://www.google.com/",
      description:
        "This is a social media application for doctors.It provides live chatting and feed sharing and other features.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      name: "Tracking App",
      url: "https://www.google.com/",
      description:
        "A mobile application for tracking live vehicles and access to real time commands and location features.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "X-fly Insights Management",
      url: "https://www.google.com/",
      description:
        "It is an all-purpose application for medical and health services.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  contactInfo,
};
