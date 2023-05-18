const botaoAlterarTema = document.getElementById("botao-alterar-tema");
console.log(botaoAlterarTema);
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");
console.log(body);

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro")
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else{
    imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
    
})