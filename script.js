let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
const btnSend = document.getElementById("btnsend");
let projectContainer = document.querySelector(".projects-box");

const projects = [
  {
    id: 1,
    title: "Landing Page with sign up",
    imageUrl:
      "https://i.ibb.co/64CKC4J/Screen-Shot-2024-12-28-at-3-51-38-PM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Intro-component-with-sign-up-form.git",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Intro-component-with-sign-up-form/",
  },
  {
    id: 2,
    title: "Social Links Profile Website",
    imageUrl:
      "https://i.ibb.co/Km0cGwh/Screen-Shot-2024-12-28-at-3-55-31-PM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/-Social-links-profile.git",
    liveUrl: "https://fopefoluwaikufisile.github.io/-Social-links-profile/",
  },
  {
    id: 3,
    title: "My Portfolio 😁",
    imageUrl:
      "https://i.ibb.co/qkSRMBM/Screen-Shot-2024-12-28-at-3-44-05-PM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/My-Portfolio",
    liveUrl: "https://fopeportfolio.vercel.app/",
  },
  {
    id: 4,
    title: "Newsletter Sign up form",
    imageUrl:
      "https://i.ibb.co/NNhzKFd/Screen-Shot-2024-12-28-at-3-59-25-PM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Newsletter-sign-up-form.git",
    liveUrl: "https://fopefoluwaikufisile.github.io/Newsletter-sign-up-form/",
  },
  {
    id: 5,
    title: "Random Joke Generator",
    imageUrl: "https://i.ibb.co/gvVgCpG/Random-Joke.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/random-joke",
    liveUrl: "https://random-joke-fb89.onrender.com/",
  },
  {
    id: 6,
    title: "My First Web App",
    imageUrl: "https://i.ibb.co/sbq9PfQ/Web-app-Picture.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/My-first-web-app",
    liveUrl: "https://blog-web-app-c60v.onrender.com",
  },
  {
    id: 7,
    title: "Four card feature section",
    imageUrl:
      "https://i.ibb.co/pdDVwk5/Screen-Shot-2024-12-30-at-5-34-42-PM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Four-card-feature-section",
    liveUrl: "https://fopefoluwaikufisile.github.io/Four-card-feature-section/",
  },
  {
    id: 8,
    title: "Product Preview Card Component",
    imageUrl:
      "https://i.ibb.co/rQMc2pG/Screen-Shot-2024-12-30-at-5-43-30-PM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Product-preview-card-component",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Product-preview-card-component/",
  },
  {
    id: 9,
    title: "Intro Section with drop down navigation",
    imageUrl:
      "https://i.ibb.co/Pr6rJ5K/Screen-Shot-2024-12-30-at-5-46-08-PM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Intro-section-with-dropdown-navigation",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Intro-section-with-dropdown-navigation/",
  },
  {
    id: 10,
    title: "Recipe Page",
    imageUrl:
      "https://i.ibb.co/wSLsRC8/Screen-Shot-2024-12-30-at-5-48-47-PM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Recipe-page",
    liveUrl: "https://fopefoluwaikufisile.github.io/Recipe-page/",
  },
  {
    id: 11,
    title: "Qr code Compoment",
    imageUrl:
      "https://i.ibb.co/1dBBqS3/Screen-Shot-2024-12-30-at-5-53-46-PM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/QR-code-component",
    liveUrl: "https://fopefoluwaikufisile.github.io/QR-code-component/",
  },
  {
    id: 12,
    title: "Ping Coming Soon Page",
    imageUrl:
      "https://i.ibb.co/yfTsXGH/Screen-Shot-2024-12-30-at-5-56-27-PM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Ping-coming-soon-page",
    liveUrl: "https://fopefoluwaikufisile.github.io/Ping-coming-soon-page/",
  },
  {
    id: 13,
    title: "Blog Preview Card",
    imageUrl:
      "https://i.ibb.co/cXwBSJQ/Screen-Shot-2024-12-30-at-6-01-33-PM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Blog-preview-card-",
    liveUrl: "https://fopefoluwaikufisile.github.io/Blog-preview-card-/",
  },
  {
    id: 14,
    title: "Testimonial Grid Section",
    imageUrl:
      "https://i.ibb.co/GW1k7w9/Screen-Shot-2024-12-30-at-7-36-03-PM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Testimonials-Grid-Section",
    liveUrl: "https://fopefoluwaikufisile.github.io/Testimonials-Grid-Section/",
  },
  {
    id: 15,
    title: "Article Preview Component",
    imageUrl:
      "https://i.ibb.co/BLx4xbQ/Screen-Shot-2025-01-01-at-5-59-38-PM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Article-preview-component",
    liveUrl: "https://fopefoluwaikufisile.github.io/Article-preview-component/",
  },
  {
    id: 16,
    title: "Time Tracking Dashboard",
    imageUrl:
      "https://i.ibb.co/Y8T9f5J/Screen-Shot-2025-01-01-at-6-00-00-PM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Time-tracking-dashboard",
    liveUrl: "https://fopefoluwaikufisile.github.io/Time-tracking-dashboard/",
  },
  {
    id: 17,
    title: "Palindrome Checker",
    imageUrl: "https://i.ibb.co/k2p6PNpt/Screenshot-2025-03-03-at-22-32-33.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Palindrome-Checker",
    liveUrl: "https://fopefoluwaikufisile.github.io/Palindrome-Checker/",
  },
  {
    id: 18,
    title: "Color Game",
    imageUrl: "https://i.ibb.co/PZTR3STg/Screenshot-2025-03-03-at-22-45-25.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/HNG-Color-game",
    liveUrl: "https://fopefoluwaikufisile.github.io/HNG-Color-game/",
  },
  {
    id: 19,
    title: "AI Text Processing Interface",
    imageUrl: "https://i.ibb.co/KjL0DvNt/Screenshot-2025-03-03-at-22-56-18.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/HNG-text-processing-interface",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/HNG-text-processing-interface/",
  },
  {
    id: 20,
    title: "Event Ticket Generator",
    imageUrl: "https://i.ibb.co/qLFdYWnd/Screenshot-2025-03-03-at-22-58-44.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/HNG-ticker-project",
    liveUrl: "https://fopefoluwaikufisile.github.io/HNG-ticker-project/",
  },
  {
    id: 21,
    title: "Extensions display",
    imageUrl:
      "https://i.ibb.co/p64K2PGq/Screenshot-2025-03-31-at-1-55-30-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/extensions-front-end-mentor",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/extensions-front-end-mentor/",
  },
  {
    id: 22,
    title: "Faq Accordion",
    imageUrl:
      "https://i.ibb.co/JRpMh8rw/Screenshot-2025-03-31-at-1-59-37-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Accordion",
    liveUrl: "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Accordion/",
  },
  {
    id: 23,
    title: "Result Summary Component",
    imageUrl:
      "https://i.ibb.co/PvxbmYDQ/Screenshot-2025-03-31-at-2-01-32-AM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/frontend-result-summary",
    liveUrl: "https://fopefoluwaikufisile.github.io/frontend-result-summary/",
  },
  {
    id: 24,
    title: "Interactive Rating Component",
    imageUrl:
      "https://i.ibb.co/7JG8bKWf/Screenshot-2025-03-31-at-2-03-18-AM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Review-Frontend-mentor",
    liveUrl: "https://fopefoluwaikufisile.github.io/Review-Frontend-mentor/",
  },
  {
    id: 25,
    title: "NFT Card Component",
    imageUrl:
      "https://i.ibb.co/d0Nr4rQQ/Screenshot-2025-03-31-at-2-05-03-AM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/nft-frontend-mentor",
    liveUrl: "https://fopefoluwaikufisile.github.io/nft-frontend-mentor/",
  },
  {
    id: 26,
    title: "Order Summary Component",
    imageUrl:
      "https://i.ibb.co/wZSQJbzB/Screenshot-2025-03-31-at-2-07-32-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Order-summary-card",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Order-summary-card/",
  },
  {
    id: 27,
    title: "Stats Preview Component",
    imageUrl:
      "https://i.ibb.co/h1FwKNmH/Screenshot-2025-03-31-at-2-09-05-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Stats-preview-card-component",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Stats-preview-card-component/",
  },
  {
    id: 28,
    title: "3 Column Component",
    imageUrl:
      "https://i.ibb.co/LzGX9Jzv/Screenshot-2025-03-31-at-2-17-44-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-3-column-preview-card-component",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Frontend-Mentor-3-column-preview-card-component/",
  },
  {
    id: 29,
    title: "Profile Component",
    imageUrl:
      "https://i.ibb.co/bM4bRqmL/Screenshot-2025-03-31-at-2-19-50-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Profile-card-component",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Profile-card-component/",
  },
  {
    id: 30,
    title: "Social Proof Component",
    imageUrl:
      "https://i.ibb.co/QvryDy7R/Screenshot-2025-03-31-at-2-21-05-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Social-proof-section",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Social-proof-section/",
  },
  {
    id: 31,
    title: "Base Apparel Page",
    imageUrl:
      "https://i.ibb.co/bMC36qMG/Screenshot-2025-03-31-at-2-22-25-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Base-Apparel-coming-soon-page",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Base-Apparel-coming-soon-page/",
  },
  {
    id: 32,
    title: "Price Grid Component",
    imageUrl:
      "https://i.ibb.co/JRsBYSNw/Screenshot-2025-03-31-at-2-24-03-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Single-Price-Grid-Component",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Single-Price-Grid-Component/",
  },
  {
    id: 33,
    title: "Huddle Landing Page",
    imageUrl:
      "https://i.ibb.co/v685dCbx/Screenshot-2025-03-31-at-2-25-14-AM.png",
    githubUrl:
      "https://github.com/FopefoluwaIkufisile/-Frontend-Mentor-Huddle-landing-page-with-single-introductory-section",
    liveUrl:
      "https://fopefoluwaikufisile.github.io/-Frontend-Mentor-Huddle-landing-page-with-single-introductory-section/",
  },
  {
    id: 34,
    title: "Shop Desk (Team Project)",
    imageUrl:
      "https://i.ibb.co/N6Md1CcH/Screenshot-2025-03-31-at-2-26-38-AM.png",
    githubUrl: "https://github.com/hngprojects/shopdesk-fe",
    liveUrl: "https://shopdesk.im/",
  },
  {
    id: 35,
    title: "Conference Ticket Generator",
    imageUrl:
      "https://i.ibb.co/GQTpzjzP/Screenshot-2025-04-04-at-10-31-03-AM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Conference-ticket-generator",
    liveUrl: "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Conference-ticket-generator/",
  },
  {
    id: 36,
    title: "Bento Grid",
    imageUrl:
      "https://i.ibb.co/zVXP2VgY/Screenshot-2025-04-04-at-9-07-04-PM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Frontend-bento-grid",
    liveUrl: "https://fopefoluwaikufisile.github.io/Frontend-bento-grid/",
  },
  {
    id: 37,
    title: "Product Cart list",
    imageUrl:
      " https://i.ibb.co/RGybrNKz/Screenshot-2025-04-05-at-6-08-29-AM.png",
    githubUrl: "https://github.com/FopefoluwaIkufisile/Frontend-Mentor-Product-list-with-cart",
    liveUrl: "https://fopefoluwaikufisile.github.io/Frontend-Mentor-Product-list-with-cart/",
  }
 
];

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
btnSend.addEventListener("click", (e) => {
  e.preventDefault();
});
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};
let sliceEnd = 9;

const renderProjects = (start, end) => {
  return projects
    .slice(start, end)
    .map(
      (project) => `
    <div class="box">
    <img src="${project.imageUrl}" alt="${project.title}" width="100%" height="100%" class="image-style">
    <h3 style="font-size: 16px;">${project.title}</h3>
    <div class="icons">
    <a href=${project.liveUrl} class="fas fa-link" target="_blank"></a>
    <a href=${project.liveUrl} class="fas fa-share" target="_blank"></a>
    <a href=${project.githubUrl} class="fab fa-github" target="_blank"></a>
    </div>
    </div>
    `
    )
    .join("");
};

document.querySelector(".load").addEventListener("click", (e) => {
  e.preventDefault();
  if (sliceEnd < projects.length) {
    sliceEnd += 3;
    projectContainer.innerHTML = renderProjects(0, sliceEnd);
  } else {
    sliceEnd = projects.length;
    projectContainer.innerHTML = renderProjects(0, sliceEnd);
    document.querySelector(".load").textContent = "Thats all";
  }
});

projectContainer.innerHTML = renderProjects(0, sliceEnd);
