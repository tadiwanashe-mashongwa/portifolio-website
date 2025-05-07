const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

toggleButton.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  themeIcon.innerHTML = body.classList.contains('dark-mode') ? '&#9790;' : '&#9728;';
});
