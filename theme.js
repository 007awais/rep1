
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme + '-theme');

function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

  
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}
