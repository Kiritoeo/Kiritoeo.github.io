import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "特卡波的个人博客",
  description: "特卡波的个人博客",

  head: [
    // 设置默认 favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
