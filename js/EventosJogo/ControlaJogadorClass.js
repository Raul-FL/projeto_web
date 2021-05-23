
function ControlaJogadorClass() {

    /**
     Método responsável por designar um nome para cada jogador e defini-ló de acordo com sua cor.
     ***/
    this.informaJogador = function () {

        do {
            var nomeJ1 = prompt("Jogador 1, Digite seu nome:", "Azul");
        } while (nomeJ1 == null || nomeJ1 == "");
        do {
            var nomeJ2 = prompt("Jogador 2, Digite seu nome:", "Verde");
        } while (nomeJ2 == null || nomeJ2 == "");




        jogador1.nome = nomeJ1;
        jogador1.imagem = "<div id=personagemAzul style='right:3em;'><div id=personagemAzulNome>" + jogador1.nome + "</div></div>";
        jogador1.cor = "azul";
        jogador1.perdeuRodada = false;
        jogador1.permaneceAte6=false;

        jogador2.nome = nomeJ2;
        jogador2.imagem = "<div id=personagemVerde style='right:-3em'><div id=personagemVerdeNome>" + jogador2.nome + "</div></div>";
        jogador2.cor = "verde";
        jogador2.perdeuRodada = false;
        jogador2.permaneceAte6=false;

        jogadores.push(jogador1);
        jogadores.push(jogador2);


        jogo.comecaJogo();
    }

    this.andaJogador = function (cor, numeroCasa) {
        if (cor == 'azul' && !jogador1.taNoCratpcha) {
            $("#personagemAzul").remove();
            $(".camp" + numeroCasa).append("<div id=personagemAzul style='right:3em; top:2.8em;'><div id=personagemAzulNome>" + jogador1.nome + "</div></div>");

        }
        if (cor == 'verde' && !jogador2.taNoCratpcha ) {
            $("#personagemVerde").remove();
            $(".camp" + numeroCasa).append("<div id=personagemVerde style='right:3em; top:2.9em'><div id=personagemVerdeNome>" + jogador2.nome + "</div></div>");
        }
    }

}








