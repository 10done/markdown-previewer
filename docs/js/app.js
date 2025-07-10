// docs/js/app.js
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

function updatePreview() {
  preview.innerHTML = marked.parse(editor.value);
}

editor.addEventListener('input', updatePreview);

window.addEventListener('DOMContentLoaded', () => {
  editor.value = `# Welcome\n\nType some *Markdown* here!`;
  updatePreview();
});
