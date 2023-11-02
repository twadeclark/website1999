// Navigation Bar SECTION
const navBar = {
    show: true,
  };
  
  // tagline rotation
  const messages = [
    "Tech-driven change-maker at heart.", 
    "Bridging dreams and reality with technology.",
    "Empowering innovation with a touch of code.",
    "Transforming ideas into digital reality.",
    "Coding dreams into existence.",
    "Igniting change with every tech breakthrough.",
    "Where innovation meets impact, that's my tech journey.",
    "Crafting a digital legacy for a brighter tomorrow.",
    "Technology's promise, my passion.",
    "Empowering voices and visions with tech solutions.",
    "Revolutionizing perspectives, one code at a time.",
    "Dreaming digitally, impacting globally.",
    "Where technology and vision converge, I thrive.",
    "Championing a future shaped by technology.",
    "Turning the wheels of change with digital prowess.",
    "Molding the future, byte by byte.",
    "Tech enthusiast. World changer. Future builder.",
    "Amplifying aspirations through technological marvels.",
    "Leading with tech, impacting with purpose.",
    "Coding dreams into realities for a better world.",
    "Pushing boundaries, powering progress with tech.",
    "In the heart of innovation, shaping the tech frontier.",
    "Bridging divides, crafting futures with digital tools.",
    "At the intersection of technology and transformation.",
    "Digitally driven, globally inspired."
  ];

  // Main Body SECTION
  const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Tom",
    middleName: "W.",
    lastName: "Clark",
    message: messages[0], // set the initial message
    messages: messages, // add the array to the mainBody object
    username: "twadeclark",
    icons: [
    ],
  };
  
  // ABOUT SECTION
  // If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
  //a) your Instagram username
  //      i.e:profilePictureLink:"johnDoe123",
  //b) a link to an hosted image
  //      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
  //c) image in "editable-stuff" directory and use require("") to import here,
  //d) If you do not want any picture to be displayed, just leave it empty :)
  //      i.e: profilePictureLink: "",
  // For Resume either provide link to your resume or import from "editable-stuff" directory
  //     i.e resume: require("../editable-stuff/resume.pdf"),
  
  const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/wisetomowl.png"),
    imageSize: 375,
    message:
      "My name is Tom Clark. I live in Vancouver, Washington. I've been a print magazine publisher, salesman both in person and cold calling, mortgage broker, account manager. But my true love is software devlopment. Aside from my wife and kids, that is. ",
    resume: "http://twadeclark.com/",
  };
  
  // PROJECTS SECTION
  // Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
  //      i.e: reposLength: 0,
  // If you want to display specfic projects, add the repository names,
  //      i.e ["repository-1", "repo-2"]
  const repos = {
    show: false,
    heading: "Recent Projects",
    gitHubUsername: "twadeclark", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
  };


  // Deployed Products
  const deployedProduct = {
    show: true,
    heading: "Deployed Products",

    localProducts: [
      {
        name: "Times the Times Tables",
        description: "Learn your times tables. Compete with friends! This Google Play App is free with no registration.",
        logo: "/assets/timesTableIcon.png",
        screenshot1: "/assets/timesTablesScreenshot1.png",
        screenshot2: "/assets/timesTablesScreenshot2.png",
        privacyPolicyLink: "/TimestheTimesTablesPrivacyPolicy.txt",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.twadeclark.timesthetimestables",
        githubSourceLink: "https://github.com/twadeclark/TimesTheTimesTables",
      },
      {
        name: "The Julia Zone",
        description: "White noise generator for a good night's sleep. This Google Play App is free with no registration.",
        logo: "/assets/juliaZoneIcon.jpg", 
        screenshot1: "/assets/juliaZoneScreenshot1.png",
        screenshot2: "/assets/juliaZoneScreenshot2.png",
        privacyPolicyLink: "/TheJuliaZonePrivacyPolicy.txt",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.twadeclark.thejuliazone",
        githubSourceLink: "https://github.com/twadeclark/TheJuliaZone",
      },
      {
        name: "Website 1999",
        description: "You're looking at it now. Website 1999 is the codename for this customizable personal website built with React.",
        logo: "/assets/website1999_logo_white_small.png",
        // screenshot1: "",
        // screenshot2: "",
        // privacyPolicyLink: "",
        // playStoreLink: "",
        githubSourceLink: "https://github.com/twadeclark/website1999",
        shortLogo: "/assets/wisetomowl.png",
        shortLogoLink: "http://twadeclark.com/",
      },
      {
        name: "BloodCrew",
        description: "A browser game, built for a LAMP stack, deployed on AWS. Free to play, no email required.",
        logo: "/assets/BloodCrewLogo.png",
        // screenshot1: "",
        // screenshot2: "",
        // privacyPolicyLink: "",
        // playStoreLink: "",
        githubSourceLink: "https://github.com/twadeclark/BloodCrew",
        shortLogo: "/assets/BloodCrewLogo.png",
        shortLogoLink: "http://bloodcrew.twadeclark.com",
      },
      {
        name: "TailWindTrader",
        description: "Java framework for backtesting and trading stocks and crypto using the Alpaca API. Ready to implement your own strategy. Requires Alpaca account.",
        logo: "/assets/TailWindLogo.jpg",
        // screenshot1: "",
        // screenshot2: "",
        // privacyPolicyLink: "",
        // playStoreLink: "",
        githubSourceLink: "https://github.com/twadeclark/TailWindTrader_Framework",
        shortLogo: "/assets/TailWindLogo.jpg",
        shortLogoLink: "",
      },
    ],
  }


  // Leadership SECTION
  const leadership = {
    show: false,
    heading: "Leadership",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [
      { 
        img: require("../editable-stuff/wisetomowl.png"),
        label: "First slide label", 
        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
      },
      { 
        img: require("../editable-stuff/wisetomowl.png"), 
        label: "Second slide label", 
        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
      },
    ],
    imageSize: {
      width:"615",
      height:"450"
    }
  };
  
  // SKILLS SECTION
  const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
      { name: "C# / .NET (Visual Studio)", value: 90 },
      { name: "Java (IntelliJ)", value: 85 },
      { name: "Mobile Apps (Android Studio)", value: 90 },
      { name: "MS SQL (SSMS)", value: 85 },
      { name: "PHP (Netbeans, Xampp)", value: 90 },
      { name: "JavaScript / React (VS Code)", value: 95 },
      { name: "Source Control (github, TF)", value: 85 },
      { name: "MYSQL / Apache", value: 80 },
      { name: "PERL (sharpened stick)", value: 85 },
    ],
    softSkills: [
      { name: "Goal-Oriented", value: 100 },
      { name: "Collaboration", value: 90 },
      { name: "Problem Solving", value: 100 },
      { name: "Positivity", value: 95 },
      { name: "Adaptability", value: 85 },
      { name: "Creativity", value: 100 },
      { name: "Empathy", value: 80 },
      { name: "Organization", value: 95 },
    ],
  };
  
  // GET IN TOUCH SECTION
  const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
      "I'm currently looking for full-time Software Engineering or Machine Learning opportunity. email",
    email: "twadeclark@gmail.com",
  };
  
  const experiences = {
    show: false,
    heading: "Experiences",
    data: [
      // {
      //   role: 'Software Engineer',// Here Add Company Name
      //   companylogo: require('../assets/img/dell.png'),
      //   date: 'June 2018 – Present',
      // },
      // {
      //   role: 'Front-End Developer',
      //   companylogo: require('../assets/img/boeing.png'),
      //   date: 'May 2017 – May 2018',
      // },
    ]
  }
  
  // Blog SECTION
  // const blog = {
  //   show: false,
  // };
  
  export { navBar, mainBody, about, repos, deployedProduct, skills, leadership, getInTouch, experiences };