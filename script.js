document.addEventListener("DOMContentLoaded", function () {
    
    // Botões
    const btnSim = document.getElementById("btn-sim");
    const btnTalvez = document.getElementById("btn-talvez");
    const btnNao = document.getElementById("btn-nao");
    
    // As duas telas distintas
    const telaConvite = document.getElementById("tela-convite");
    const telaResultado = document.getElementById("tela-resultado");
    
    // Elementos de dentro da tela de resultado
    const resultadoTexto = document.getElementById("resultado-texto");
    const resultadoImagem = document.getElementById("resultado-imagem");

    // Função que faz a troca de abas/telas
    function alternarParaResultado(texto, nomeImagem) {
        // 1. Define o texto e a foto certa
        resultadoTexto.textContent = texto;
        resultadoImagem.src = nomeImagem;
        
        // 2. Esconde a tela das perguntas e mostra a nova tela limpa
        telaConvite.style.display = "none";
        telaResultado.style.display = "block";
    }

    // Eventos de clique atualizados
    btnSim.addEventListener("click", function () {
        alternarParaResultado("Nunca duvidei!", "Sim.jpeg"); 
    });

    btnTalvez.addEventListener("click", function () {
        alternarParaResultado(" 🤔", "talvez.jpeg");
    });

    btnNao.addEventListener("click", function () {
        alternarParaResultado("Obrigado pela resposta!", "imagem_nao.jpeg");
    });
});