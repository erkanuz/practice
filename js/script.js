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

// document.getElementById('theme-button')?.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const moonIcon = document.getElementById('theme-button');
    
//     moonIcon?.addEventListener('click', function() {
//         document.body.classList.toggle('dark-mode');
//         document.querySelector('.change-theme')?.classList.toggle('ph-moon');
//         document.querySelector('.change-theme')?.classList.toggle('ph-sun-dim'); 
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const moonIcon = document.getElementById('theme-button');

//     moonIcon?.addEventListener('click', function() {
//         const body = document.body;
//         const icon = document.querySelector('.change-theme');

//         body.classList.toggle('dark-mode');
//         icon.classList.toggle('ph-moon');
//         icon.classList.toggle('ph-sun-dim');

//         const isDarkMode = body.classList.contains('dark-mode');
//         localStorage.setItem('dark-mode', isDarkMode);
//     });

//     // Check local storage for dark mode preference on page load
//     const savedDarkMode = localStorage.getItem('dark-mode');
//     if (savedDarkMode === 'true') {
//         document.body.classList.add('dark-mode');
//         document.querySelector('.change-theme').classList.add('ph-sun-dim');
//     }
// });

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

// const loginButton = document.getElementById('login-button'),
//       loginClose = document.getElementById('login_close'),
//       loginContent = document.getElementById('login-content')

// if(loginButton) {
//     loginButton.addEventListener('click', () => {
//         loginContent.classList.add('show-login')
//     })
// }

// if(loginClose) {
//     loginClose.addEventListener('click', () => {
//         loginContent.classList.remove('show-login')
//     })
// }