/**
 Método responsável por conter o dado de cada jogo.
 ***/
function  jogarDado() {
    var jogo = new JogoClass();
    // Define o intervalo que a funcao sera executada, no nosso caso de 100 em 100ms
    intervalo = setInterval(function () {
        // Gera o numero aleatorio
        num = Math.floor((Math.random() * 6) + 1);
        // Adiciona o HTML na div
        document.getElementById('resultado').innerHTML = '<img alt="O número do dado é' + num + '" src="dado/' + num + '.png" style="position:fixed; z-index=2;"/>';
    }, 200);
    // Definq que a funcao 'intervalo' vai ser executada durante 2000ms
    setTimeout(function () {
        clearInterval(intervalo);
        //metodo para mover o personagem pelo tabuleiro.
       
            jogo.iniciaJogo(num);
        
        //decideJogador(num, intervalo);
    }, 3000);

}