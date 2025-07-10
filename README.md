# Markdown Previewer

A simple Markdown Previewer web app. Type Markdown on the left, see HTML preview on the right. Built with HTML, CSS, JavaScript, and Marked.js.

## 🚀 Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/markdown-previewer.git
cd markdown-previewer
git remote add origin https://github.com/YOUR_USERNAME/markdown-previewer.git
git push -u origin main
```

## Prompt for creating this app for chatgpt-4o
You’re a veteran full-stack developer. Please generate a complete, ready-to-push GitHub repository called “markdown-previewer” that implements a static single-page web app suitable for GitHub Pages. The app must let users type or paste Markdown into a left-side textarea and immediately see the rendered HTML in a right-side pane. In your output, include:

The exact shell commands to create the project folder, initialize Git, create the docs, css, js, and .github/workflows directories.

A listing of the entire project structure showing README.md, docs/index.html, docs/css/style.css, docs/js/app.js, and .github/workflows/pages.yml.

A fully written README.md with a brief description of the app and clear instructions for cloning the repo, pushing to the main branch, and enabling GitHub Pages from the docs folder.

The complete contents of docs/index.html, including standard HTML5 boilerplate, a heading, a container with a textarea and a preview div, links to style.css, the marked.js CDN script, and the app.js script.

The complete contents of docs/css/style.css defining a full-height, split-screen layout with basic styling for the heading, editor, and preview.

The complete contents of docs/js/app.js registering an input listener on the textarea that uses marked.js to convert Markdown to HTML and updates the preview pane, initializing once on page load.

The complete contents of .github/workflows/pages.yml configuring a GitHub Actions workflow that triggers on pushes to main, checks out the repo, and deploys the docs folder to GitHub Pages using the peaceiris/actions-gh-pages action.

Do not include any extraneous explanation or commentary—just the precise commands, structure outline, and file contents.

## Link to the working video
https://www.loom.com/share/048c16e764d74df390932ad39b2d60bc?sid=85d155db-eee1-4e75-9ff1-ee62f351f3ca

## Website link
https://10done.github.io/markdown-previewer/