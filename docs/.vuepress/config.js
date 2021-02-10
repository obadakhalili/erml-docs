module.exports = {
  title: "ERML",
  description: "Parser for representing conceptual data models using the Entity-Relationship (ER) modeling concepts",
  themeConfig: {
    nav: [
      { text: "About", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Playground", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLCD0445C57F2B7F41" },
      { text: "GitHub", link: "https://github.com/obadakhalili/erml" }
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
}
