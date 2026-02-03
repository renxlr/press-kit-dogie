const whatsBtn = document.querySelector('.whats-btn');
const upBtn = document.querySelector('.up-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        whatsBtn.classList.add('show');
        upBtn.classList.add('show');
    } else {
        whatsBtn.classList.remove('show');
        upBtn.classList.remove('show');
    }
});
