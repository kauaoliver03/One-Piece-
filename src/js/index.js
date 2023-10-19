const botoes = document.querySelectorAll(".botao");
const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click",() => {      

    desselecionarbotao();
    desselecionarpersonagem();
     botao.classList.add("selecionado");


    personagem[indice].classList.add("selecionado");

    });
});

function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
