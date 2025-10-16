// js/modules/formWhatsapp.js

export default function initFormWhatsapp() {
    const form = document.querySelector('#form-contato');

    function handleFormSubmit(event) {
        // Previne o comportamento padrão do formulário (que seria recarregar a página)
        event.preventDefault();

        // Insira seu número de telefone com o código do país (ex: 5511999998888)
        const telefone = '5535999239894'; // <--- TROQUE PELO SEU NÚMERO

        // Pega os valores dos campos do formulário
        const nome = document.querySelector('#nome').value;
        const mensagem = document.querySelector('#mensagem').value;

        // Monta a mensagem que será enviada
        const texto = `Olá, meu nome é ${nome}. Gostaria de falar sobre: ${mensagem}`;

        // Codifica a mensagem para ser usada em uma URL
        const textoCodificado = encodeURIComponent(texto);

        // Monta o link final do WhatsApp
        const url = `https://wa.me/${telefone}?text=${textoCodificado}`;

        // Abre o link em uma nova aba
        window.open(url, '_blank');
    }

    // Adiciona o evento de 'submit' ao formulário
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}