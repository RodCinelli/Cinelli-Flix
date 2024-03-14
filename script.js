document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os itens de navegação
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Remove a classe 'active' de todos os links assim que a página carrega
    navLinks.forEach(link => link.classList.remove('active'));

    // Adiciona um evento de clique a cada link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => link.classList.remove('active'));
            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
        });
    });
});
