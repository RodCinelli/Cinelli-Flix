document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os itens de navegação
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Remove a classe 'active' de todos os links assim que a página carrega
    navLinks.forEach(link => link.classList.remove('active'));

    // Adiciona um evento de clique a cada link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => link.classList.remove('active'));
            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');
        });
    });

    // Seleciona ambos os elementos de ícone do sino
    const ativadoresToast = document.querySelectorAll('#btn-checar-emails-mobile, #btn-checar-emails-desktop');
    const mensagem = document.getElementById('mensagens-alerta');

    // Adiciona um ouvinte de eventos a cada elemento de ícone do sino
    ativadoresToast.forEach(function (ativador) {
        ativador.addEventListener('click', function (event) {
            event.preventDefault(); // Previne a navegação
            const toast = new bootstrap.Toast(mensagem, {
                autohide: false // Desativa o fechamento automático
            });
            toast.show();
        });
    });
    var myCarousel = document.querySelector('#cinelliFlixCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,  // Intervalo de 3 segundos
        ride: 'carousel'
    });
});