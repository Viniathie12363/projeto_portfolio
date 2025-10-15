// js/menuMobile.js

// A função principal que será exportada.
// Ela encapsula toda a lógica do menu.
export default function initMenuMobile() {
    
    // Seleciona os elementos do DOM necessários para o menu.
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const listaNavegacao = document.querySelector('.lista-navegacao');
    const links = document.querySelectorAll('.link-navegacao');

    // Função para abrir/fechar o menu.
    function toggleMenu() {
        menuHamburguer.classList.toggle('ativo');
        listaNavegacao.classList.toggle('ativo');
    }

    // Função para fechar o menu (usada ao clicar em um link).
    function closeMenu() {
        menuHamburguer.classList.remove('ativo');
        listaNavegacao.classList.remove('ativo');
    }

    // Verificação de segurança: só adiciona os eventos se os elementos existirem na página.
    if (menuHamburguer && listaNavegacao) {
        // Adiciona o evento de click no botão para alternar o menu.
        menuHamburguer.addEventListener('click', toggleMenu);

        // Adiciona um evento de click em cada link para fechar o menu.
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
}