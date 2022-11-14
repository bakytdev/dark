const themeBtn = document.getElementById('theme');

themeBtn.addEventListener('click', () => {
    themeBtn.style.rotate = '180deg';
    document.body.classList.toggle('dark');
});
