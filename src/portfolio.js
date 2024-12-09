/* Change this file to get your personal Porfolio */

const settings = {
  isSplash:false, 
};

const seo = {
  title: "Amira khalfi's Portfolio",
  description:
  "A data scientist and actuarial science enthusiast, passionate about creating impactful, scalable solutions. Combining technical expertise with creativity to solve complex problems and turn data into valuable insights. Always evolving and driven to make a real difference.",  og: {
    title: "Amira khalfi's Portfolio",
    type: "website",
    url: "http://amirakhalfi.com/",
  },
};

const greeting = {
  title: "Amira khalfi",
  logo_name: "Amirakhalfidatascientist",
  nickname: "Mira",
  subTitle:
  "A data scientist and actuarial science enthusiast, passionate about creating impactful, scalable solutions. Combining technical expertise with creativity to solve complex problems and turn data into valuable insights. Always evolving and driven to make a real difference.",
  resumeLink:
    "https://drive.google.com/file/d/14nQx1Lx_0I8ZHkEOPgR3eSnhNVjvQj0Y/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/amirakhalfy",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/amirakhalfy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amira-khalfi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 
  {
    name: "Gmail",
    link: "mailto:amirakhalfy12@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
  {
    name: "Facebook",
    link: "https://www.facebook.com/amira.khalfy.7",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/amirakhalfy/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Specializing in fine-tuning models with Agentic RAG, RAG, and prompt engineering techniques, alongside RLHF, to enhance model performance and ensure alignment with user goals. " ,
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Experienced in applying XAI, AI, and NLP to deliver transparent, intelligent solutions that enhance data-driven decision-making and improve business outcomes.",
        "⚡ Expertise in Machine Learning, Deep Learning, Transfer Learning, and statistical methods to extract actionable insights, driving business strategies and innovation.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Hugging Face Transformers",
          fontAwesomeClassname: "logos-hugging-face",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
         
            skillName: "spark",
            imageSrc: "spark.png",
          },
          

          {
         
            skillName: "selenium",
            imageSrc: "selenium.png",
          },
          {
         
            skillName: "scrapy",
            imageSrc: "scrapy.png",
          },
        
       


      ],
    },



    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡Skilled in developing robust and scalable applications."

      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "R",
          imageSrc: "R_logo.png",
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C",
          imageSrc: "C_logo.png",
        },
        {
          skillName: "C++",
          imageSrc: "Cplus_logo.png",
        },
        {
          skillName: "C#",
          imageSrc: "Csharp.png",
        },
        {
          skillName: "ReactJS",
          imageSrc: "react_logo.png",
        },
       
        {
          skillName: "Spring Boot",
          imageSrc: "springboot.png",
        },
        {
          skillName: ".Net",
          imageSrc: "net.png",
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Django",
          imageSrc: "django.png",
        },

        {
          skillName: "Symfony 5",
          imageSrc: "symfonylogo.png",
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps Skills",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Skilled in leveraging Microsoft Azure for cloud-based data solutions, implementing scalable infrastructure and enhancing machine learning workflows.",
        "⚡ Proficient in deployment, managing CI/CD pipelines, and utilizing DevOps best practices to streamline software delivery and ensure scalable, reliable systems.",
       
      ],
      softwareSkills: [
      
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MLFLOW",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#326CE5",
          },
        },
        
        {
          skillName: "prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#326CE5",
          },
        },
        
      ],
    },
    {
      title: " actuarial science",
      fileName: "actuarialImg",
      skills: [
        "⚡ Strong background in actuarial science, with expertise in Risk Theory, Reinsurance, Life & Non-Life Actuarial Science, ALM Modeling, Stochastic Processes, Extreme Risk Theory, Monte Carlo simulations, IFRS standards, and Solvency II regulations.",

      ],
      softwareSkills: [
       
       
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/amirakhalfy/",
    },
  
    {
      siteName: "codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5D2F8E",
      },
      profileLink: "https://www.codechef.com/users/amirakhalfy",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institute of Risk and Insurance(IRA LE MANS University )",
      subtitle: "Master’s in Actuarial Sciences",
      logo_path: "lemans.png",
      alt_name: "Le mans",
      duration: "2023 – 2025",
      descriptions: [
       "Accredited by the French Institute of Actuaries."
      ],
      website_link: "https://www.univ-lemans.fr/fr/index.html",
    },
    {
      title: "Private Engineering and Technology School (ESPRIT)-Honoris group",
      subtitle: "Engineering degree in Computer Science",
      logo_path: "espritlogo.png",
      alt_name: "Esprit University",
      duration: "2020 - 2025",
      descriptions: [
       " Accredited with the EUR-ACE label, which was awarded by the French Commission for Accreditation of Engineering Programs (CTI)."
      ],
      website_link: "https://esprit.tn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: " Preparing for the AZ-900 Microsoft Azure Fundamentals Exam",
      subtitle: "Microsoft",
      logo_path: "microsoftlogo.png",
      certificate_link:
        "https://coursera.org/share/5b707f0b686e1cd4d9e2c2333442d813",
      alt_name: "Microsoft",
      color_code: "#8C151599",
    },
    {
      title: "Microsoft Azure Management Tools and Security Solutions",
      subtitle: "Microsoft",
      logo_path: "microsoftlogo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/61PH8BU1QXZR",
      alt_name: "Microsoft",
      color_code: "#8C151599",
    },
    {
      title: "Microsoft Azure Services and Lifecycles"

,
      subtitle: "Microsoft",
      logo_path: "microsoftlogo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/8D6O19HNN5LO",
      alt_name: "microsoft",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to Microsoft Azure Cloud Services",
      subtitle: "Microsoft",
      logo_path: "microsoftlogo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/Z6OYKV4ER3VH",
      alt_name: "Microsoft",
      color_code: "#8C151599",
    },
    {
      title: "Building Transformer-Based Natural Language Processing Applications",
      subtitle: " NVIDIA",
      logo_path: "nvidialogo.png",
      certificate_link:
        "https://learn.nvidia.com/certificates?id=25DUHWvIRWmp2DtOZKh19g",
      alt_name: "NVIDIA",
      color_code: "#00000099",
    },
    {
      title: "Machine Learning with Python",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WU879XLPSJRE",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "What is Data Science?",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/FP73XEY4PD5M",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "AI For Everyone",
      subtitle: "Deeplearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NKHEZVBPGY89",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KAJZRHZT3AHY",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      subtitle: "CCNA",
      logo_path: "ciscologo.png",
      certificate_link:
        "https://www.credly.com/badges/30100d36-a813-4bc0-96a1-81ef57355ae7/linked_in_profile",
      alt_name: "CCNA",
      color_code: "#004365",
    },
   
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  subtitle: "",
  description:
  "I have worked with many evolving companies as a data science intern and developer intern, as well as on freelance projects.",
     header_image_path: "",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data science intern",
          company: "MS solutions group",
          company_url: "https://www.mssolutions-group.com/fr",
          logo_path: "mslogo.png",
          duration: "July 2024 – September 2024",
          location: "Tunis,Tunisia",
          description:
          ["Led the implementation of cutting-edge unsupervised learning models (GMM, AutoEncoder, Isolation Forest, LOF, and clustering) to detect fraudulent transactions, achieving a remarkable 91% improvement in accuracy while drastically reducing false negatives. 📊💡 By innovating with hybrid approaches like clustering + AutoEncoder and GMM + AutoEncoder, the detection capabilities were significantly optimized. 🔄🤖 Additionally, feature engineering was applied to extract new features, improving model performance and enabling the identification of more complex patterns in transactional data. 🛠️📈 To ensure clarity and effective communication with stakeholders, Explainable AI (XAI) techniques were leveraged, translating complex model outputs into actionable insights. 📢🤝 This work was supported by a robust development environment using venv, version control through GitLab, and dependency management via Poetry, ensuring seamless project collaboration and deployment. 🖥️🔧",
          ],
          color: "#000000",
        },
        {
          title: "Data science intern",
          company: "BFI GROUP",
          company_url: "https://bfigroupe.com/",
          logo_path: "logobfi.png",
          duration: "February 2024 – May 2024",
          location: "Tunis,Tunisia",
          description:
            "I contributed to BFI Group's credit scoring project by implementing Logistic Regression and Naive Bayes models, improving accuracy by 80% to facilitate loan approvals while aligning the solutions with Sustainable Development Goals (SDGs). 📊🌱 I also developed a recommendation system that streamlined client scoring, boosting efficiency by 70%. ⚡ Additionally, I created an NLP system to enhance communication between clients and the bank, resulting in an 80% improvement in interaction quality. 💬📈Throughout the project, I utilized technologies such as machine learning, deep learning, NLP, statistics, React.js, Flask, Power BI, and web scraping to deliver impactful, data-driven solutions. 🤖💻📊 Moreover, I deployed these models in a web application using React.js for the front end and Flask for the back end, enabling real-time credit scoring and seamless integration between user interactions and machine learning predictions. 💻⚙️",
          color: "#ee3c26",
        },
       
         {
          title: "Flutter developper intern",
          company: "Velocity International Startup (safypower)",
          company_url:
            "https://safypower.fr/",
          logo_path: "velo.PNG",
          duration: "June 2023 - August 2023",
          location: "City of Paris, Île-de-France",
          description:
            "Designed and implemented a sustainable and scalable solution for optimal electric bike charging management, leveraging Flutter for web and mobile app development, Firebase for real-time data storage and user authentication, and GitHub for version control and collaborative development. The solution aimed to optimize charging station usage, reduce energy consumption, and provide users with seamless access to charging station availability and monitoring.  ",
          color: "#0071C5",
        },
        {
          title: "Human and Social Training Internship",
          company: "BNA Bank",
          company_url: "http://www.bna.tn/fr/a-propos-br-de-la-bna.2.html",
          logo_path: "bnalogo.png",
          duration: "July 2021 - August 2021",
          location: "Tunis,Tunisia",
          description:
          "Managed bank credits and financial transactions by utilizing Excel and the company's desktop application to ensure accurate data processing and reporting, while also maintaining regular communication with clients to address inquiries, provide updates, and resolve issues, thereby fostering strong relationships and ensuring overall client satisfaction.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide array of cutting-edge technologies. My most rewarding experiences involve creating Data Science projects and developing web applications using cloud infrastructure and DevOps practices. This comprehensive approach covers the entire lifecycle, from development to deployment, ensuring robust, scalable, and efficient solutions.",
  avatar_image_path: "projects.png",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects.png",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
    
  ],
};



const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.png",
    description:
    "I'm active on social media—send me a message, and I'll reply within 24 hours! Need help with machine learning, deep learning, AI, React, DevOps, cloud technologies, or open source development? I'm your person! I'm also available for part-time job or freelance opportunities." },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ben Arous, Tunisia ",
    locality: "",
    country: "Tunisia",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  
};
