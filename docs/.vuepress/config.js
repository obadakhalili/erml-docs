module.exports = {
  title: "ERML",
  description: "Parser for representing conceptual data models using the Entity-Relationship (ER) modeling concepts",
  head: [
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}]
  ],
  themeConfig: {
    nav: [
      { text: "About", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Playground", link: "https://erml-visualizer.netlify.app/" },
      { text: "GitHub", link: "https://github.com/obadakhalili/erml" }
    ]
  },
  markdown: {
    extendMarkdown: md => md.use(require("markdown-it-katex"))
  }
}
