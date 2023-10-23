/* SHOW MENU */

document.querySelector('.burger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('show');
});

document.querySelector('.close-trigger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('show');
});

/* REMOVE MENU */

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

document.querySelectorAll('.nav_link').forEach(n => n.addEventListener('click', linkAction));

/* DARK MODE */

document.addEventListener('DOMContentLoaded', function() {
    const moonIcon = document.getElementById('theme-button');
    const icon = document.querySelector('.change-theme');
    const body = document.body;

    const savedDarkMode = localStorage.getItem('dark-mode');
    const isDarkMode = savedDarkMode === 'true';

    body.classList.toggle('dark-mode', isDarkMode);
    icon.classList.toggle('ph-moon', isDarkMode);
    icon.classList.toggle('ph-sun-dim', !isDarkMode);

    moonIcon?.addEventListener('click', function() {
        const isDarkMode = body.classList.toggle('dark-mode');
        icon.classList.toggle('ph-moon', isDarkMode);
        icon.classList.toggle('ph-sun-dim', !isDarkMode);

        localStorage.setItem('dark-mode', isDarkMode);
    });
});

// LOGIN

const addClickEvent = (element, callback) => element && element.addEventListener('click', callback);

const loginContent = document.getElementById('login-content');

addClickEvent(document.getElementById('login-button'), () => loginContent.classList.add('show-login'));
addClickEvent(document.getElementById('login_close'), () => loginContent.classList.remove('show-login'));