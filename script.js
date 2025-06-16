const teveVisitado = localStorage.getItem('teveVisitadoTrampoCorp');
        if (!teveVisitado) {
            alert('Bem-vindo(a) à Trampo Corp! Explore nossos serviços e conheça nossa equipe.');
            localStorage.setItem('teveVisitadoTrampoCorp', 'true');
        }

        document.addEventListener('DOMContentLoaded', function () {
            const themeToggleBtn = document.getElementById('theme-toggle-btn');
            const themeToggleIcon = themeToggleBtn.querySelector('i');
            const body = document.body;

            function applyTheme(isDarkMode) {
                if (isDarkMode) {
                    body.classList.add('dark-mode');
                    themeToggleIcon.classList.remove('bi-sun-fill');
                    themeToggleIcon.classList.add('bi-moon-fill');
                } else {
                    body.classList.remove('dark-mode');
                    themeToggleIcon.classList.remove('bi-moon-fill');
                    themeToggleIcon.classList.add('bi-sun-fill');
                }
            }

            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                applyTheme(true);
            } else {
                applyTheme(false);
            }

            themeToggleBtn.addEventListener('click', function () {
                const isDarkMode = body.classList.contains('dark-mode');
                applyTheme(!isDarkMode);
                localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
            });
        });