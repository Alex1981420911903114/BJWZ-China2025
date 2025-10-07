import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/bjwz-china/",

  lang: "en-US",
  title: "BJWZ-China",
  description: "",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
