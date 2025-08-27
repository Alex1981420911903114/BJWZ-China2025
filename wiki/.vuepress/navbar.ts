import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",,
  "/demo/",
  {
    text: "Team",
    icon: "/assets/icon/people.svg",
    prefix: "/team/",
    children: [
      {
        text: "Attribute",
        icon: "/assets/icon/star.svg",
        prefix: "attribute/",
      },
      {
        text: "The Team",
        icon: "/assets/icon/people.svg",
        prefix: "theteam/",
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
        prefix: "description/",
      },
      {
        text: "Design",
        icon: "/assets/icon/pencil.svg",
        prefix: "design/",
      },
      {
        text: "Engineering",
        icon: "/assets/icon/measuring-cup.svg",
        prefix: "engineering/",
      },
      {
        text: "Results",
        icon: "/assets/icon/file-earmark-bar-graph.svg",
        prefix: "results/",
      },
      {
        text: "Model",
        icon: "/assets/icon/calculator.svg",
        prefix: "model/",
      },
      {
        text: "Parts",
        icon: "/assets/icon/lightning.svg",
        prefix: "parts/",
      },
      {
        text: "Hardware",
        icon: "/assets/icon/gear.svg",
        prefix: "hardware/",
      },
      {
        text: "Safety",
        icon: "/assets/icon/shield.svg",
        prefix: "safety/",
      },
      {
        text: "Contribution",
        icon: "/assets/icon/person-arms-up.svg",
        prefix: "contribution/",
      },
    ],
  },
  {
    text: "Human Practices",
    icon: "/assets/icon/person-walking.svg",
    prefix: "humanpractices/",
  },
  {
    text: "Notebook",
    icon: "/assets/icon/book.svg",
    prefix: "notebook/",
  },
  {
    text: "Software",
    icon: "/assets/icon/code-slash.svg",
    prefix: "software/",
  },
]);
