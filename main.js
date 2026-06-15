// Seleciona todos os botões e abas
const botoes = document.querySelectorAll(".botao");
const conteudos = document.querySelectorAll(".aba-conteudo");

// Função para ativar uma aba
function ativarAba(index) {
    // Remove classe ativa de tudo
    botoes.forEach(botao => {
        botao.classList.remove("botao-ativo");
    });

    conteudos.forEach(conteudo => {
        conteudo.classList.remove("aba-conteudo-ativo");
    });

    // Ativa o botão clicado
    botoes[index].classList.add("botao-ativo");

    // Mostra o conteúdo correspondente
    conteudos[index].classList.add("aba-conteudo-ativo");
}

// Adiciona evento de clique em cada botão
botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        ativarAba(index);
    });
});