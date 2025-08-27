import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/BJWZ-China2025/",

  lang: "en-US",
  title: "BJWZ-China",
  description: "A docs demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
