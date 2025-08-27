import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",,
  "/demo/",
  {
    text: "Team",
    icon: "/assets/icon/people.svg",
    children: [
      {
        text: "Attribute",
        icon: "/assets/icon/star.svg",
        link: "attribute/",
      },
      {
        text: "The Team",
        icon: "/assets/icon/people.svg",
        link: "theteam/",
      },
    ],
  },
  {
    text: "Project",
    icon: "/assets/icon/flask.svg",
    children: [
      {
        text: "Description",
        icon: "/assets/icon/bookmarks.svg",
        link: "description/",
      },
      {
        text: "Design",
        icon: "/assets/icon/pencil.svg",
        link: "design/",
      },
      {
        text: "Engineering",
        icon: "/assets/icon/measuring-cup.svg",
        link: "engineering/",

      },
      {
        text: "Results",
        icon: "/assets/icon/file-earmark-bar-graph.svg",
        link: "results/",
      },
      {
        text: "Model",
        icon: "/assets/icon/calculator.svg",
        link: "model/",

      },
      {
        text: "Parts",
        icon: "/assets/icon/lightning.svg",
        link: "parts/",

      },
      {
        text: "Hardware",
        icon: "/assets/icon/gear.svg",
        link: "hardware/",

      },
      {
        text: "Safety",
        icon: "/assets/icon/shield.svg",
        link: "safety/",

      },
      {
        text: "Contribution",
        icon: "/assets/icon/person-arms-up.svg",
        link: "contribution/",

      },
    ],
  },
  {
    text: "Human Practices",
    icon: "/assets/icon/person-walking.svg",
    link: "humanpractices/",

  },
  {
    text: "Notebook",
    icon: "/assets/icon/book.svg",
    link: "notebook/",

  },
  {
    text: "Software",
    icon: "/assets/icon/code-slash.svg",
    link: "software/",

  },
]);
