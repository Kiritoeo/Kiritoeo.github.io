import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   //"javalearn",
  //   //"javase",
  //   //"leetcodenotes",
  //   //"shuzu",
  //   "disable",
  //   "layout",
  //   "markdown",
  //   "encrypt",
  //   "page",
  // ],
   // Java学习小记的侧边栏
   "/java/": [
    {
      text: "Java面试准备",
      prefix: "/java/",
      link: "/java/javalearn.html",
      children: [
        {
          text: "Java基础",
          link: "javase.html",
        },
      ],
      collapsible: false, // 允许折叠
    },
  ],

    // Leetcode小记的侧边栏
    "/leetcode/": [
      {
        text: "Leetcode小记",
        prefix: "/leetcode/",
        link: "/leetcode/leetcodenotes.html",
        children: [
          {
            text: "数组",
            link: "shuzu.html",
          },
        ],
        collapsible: false,
      },
    ],

        // 使用教程的侧边栏
        "/tutorial/": [
          {
            text: "使用教程",
            prefix: "/tutorial/",
            link: "/tutorial/tutorial.html",
            children: [
              {
                text: "Markdown",
                link: "markdown.html",
              },
              {
                text: "加密",
                link: "encrypt.html",
              },
            ],
            collapsible: false,
          },
        ],
});
