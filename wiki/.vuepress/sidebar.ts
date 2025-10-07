import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Team",
      icon: "/assets/icon/people.svg",
      children: [
        {
          text: "Attributions",
          icon: "/assets/icon/star.svg",
          link: "attributions"
        },
        {
          text: "The Team",
          icon: "/assets/icon/people.svg",
          link: "team/theteam"
        }
      ]
    },
    {
      text: "Project",
      icon: "/assets/icon/flask.svg",
      children: [
        {
          text: "Description",
          icon: "/assets/icon/bookmarks.svg",
          link: "project/description",
        },
        {
          text: "Design",
          icon: "/assets/icon/pencil.svg",
          link: "project/design",
        },
        {
          text: "Engineering",
          icon: "/assets/icon/measuring-cup.svg",
          link: "engineering",
  
        },
        {
          text: "Results",
          icon: "/assets/icon/file-earmark-bar-graph.svg",
          link: "project/results",
        },
        {
          text: "Model",
          icon: "/assets/icon/calculator.svg",
          link: "project/model",
  
        },
        {
          text: "Parts",
          icon: "/assets/icon/lightning.svg",
          link: "project/parts",
  
        },
        {
          text: "Safety",
          icon: "/assets/icon/shield.svg",
          link: "safety-and-security",
  
        },
        {
          text: "Contribution",
          icon: "/assets/icon/person-arms-up.svg",
          link: "contribution",
  
        },
      ],
    },
    {
      text: "Human Practices",
      icon: "/assets/icon/person-walking.svg",
      prefix: "human-practices",
      link: "human-practices",
      children: "structure"
    },
    {
      text: "Notebook",
      icon: "/assets/icon/book.svg",
      prefix: "notebook",
      link: "notebook",
      children: "structure"
    },
    // {
      // text: "Slides",
      // icon: "person-chalkboard",
      // link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
