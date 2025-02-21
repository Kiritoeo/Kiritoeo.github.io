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
            text: "Leetcode1.两数之和",
            link: "1.html",
          },
        ],
        collapsible: false,
      },
    ],
    // CuriosityNotes的侧边栏
    "/Thougths/": [
      {
        text: "CuriosityNotes",
        prefix: "/Thougths/",
        link: "/Thougths/myThoughts.html",
        children: [
          {
            text: "面向对象",
            link: "toObject.html",
          },
        ],
        collapsible: false,
      },
    ],

        // 使用教程的侧边栏
        // "/tutorial/": [
        //   {
        //     text: "使用教程",
        //     prefix: "/tutorial/",
        //     link: "/tutorial/tutorial.html",
        //     children: [
        //       {
        //         text: "Markdown",
        //         link: "markdown.html",
        //       },
        //       {
        //         text: "加密",
        //         link: "encrypt.html",
        //       },
        //     ],
        //     collapsible: false,
        //   },
        // ],
});
