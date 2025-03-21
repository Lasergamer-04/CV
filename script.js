// Function to switch language and reload the page with the selected language
function switchLanguage(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
}

// Function to apply the selected language on page load
function applyLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr'; // Default to French
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.style.display = element.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
    document.documentElement.lang = lang;
}

function applyTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Récupérer le thème enregistré
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    // Supprimer toutes les classes de mode et appliquer le bon
    html.classList.remove('light', 'dark');
    html.classList.add(savedTheme);

    // Mettre à jour l'icône du bouton si l'élément existe
    if (themeIcon) {
        themeIcon.src = savedTheme === 'dark' ? 'Images/moon.jpg' : 'Images/sun.jpg';
    }

    console.log('Thème appliqué:', savedTheme); // Vérification dans la console
}

function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    // Vérifier le mode actuel et basculer
    const newTheme = html.classList.contains('light') ? 'dark' : 'light';

    html.classList.remove('light', 'dark'); // Nettoyer les classes
    html.classList.add(newTheme); // Appliquer le nouveau mode

    // Mettre à jour l'icône et enregistrer le mode dans localStorage
    if (themeIcon) {
        themeIcon.src = newTheme === 'dark' ? 'Images/moon.jpg' : 'Images/sun.jpg';
    }
    localStorage.setItem('theme', newTheme);

    console.log('Thème changé en:', newTheme); // Vérification dans la console
}


// Appliquer le thème au chargement de la page
window.onload = () => {
    applyLanguage();
    applyTheme();
};
