let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

updateMode()
darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
window.addEventListener('storage', updateModeWithoutTransitions)

function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
    document.documentElement.classList.add('dark')
    } else {
    document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
    delete window.localStorage.isDarkMode
    }
}

function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
}

function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
}



const modeBtn = document.querySelector('#mode-toggle');
const htmlTag = document.querySelector('html');
const darkMode = localStorage.getItem('dark-mode');
if (darkMode === 'enabled') {
    htmlTag.classList.add('dark');
} else {
    htmlTag.classList.remove('dark');
}
modeBtn.addEventListener('click', () => {
    htmlTag.classList.toggle('dark');
    if (htmlTag.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'enabled');
    } else {
    localStorage.setItem('dark-mode', 'disabled');
    }
});

const menuBtn = document.querySelector('#menu-btn');
const closeMenuBtn = document.querySelector('#close-menu');
const mobileMenu = document.querySelector('#mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
});
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('flex');
    mobileMenu.classList.add('hidden');
});
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
    mobileMenu.classList.remove('flex');
    mobileMenu.classList.add('hidden');
    });
});
const mobileMenuButton = document.querySelector('#mobile-menu-button');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});