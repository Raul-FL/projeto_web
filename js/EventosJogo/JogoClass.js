function JogoClass() {

    /**
     Método raesponsável por criar as imagens  de inicio do jogo e os jogadores.
     ***/
    this.comecaJogo = function () {
        $("#inicioDoJogo").hide();
        document.getElementById('atalhos').style.display = 'block';
        controlaCasas.SorteiaCasas();
        $("#conteudo").append("<a href='#' title='Dado' onclick='javascript:jogarDado()'><img src='dado/fundoDado.png' id='dado' onkeypress='javascript:jogarDado()' style='width:15em; height: 14em;margin-top:-2em; margin-left:57em;margin-bottom:-9em;position:fixed; z-index:1' tabindex='6' accesskey='j' ><\a>");
        $(".iniciar").append(jogadores[0].imagem);
        $(".iniciar").append(jogadores[1].imagem);

    }
    this.iniciaJogo = function (numeroDado) {
        if (jogador1.vez == true) {
            if (jogador1.permaneceAte6 == true) {
                controlaCasas.permaneceAteTirar6(jogador1, numeroCasaJ1, numeroDado);
                controlaJogador.andaJogador("azul", numeroCasaJ1);
                this.mudaVezDoJogador();
            } else {
                numeroCasaJ1 = numeroDado + parseInt(casaAtualJ1);
                alert(numeroCasaJ1);
                casaAtualJ1 = numeroCasaJ1;
                this.jogoAcabou(casaAtualJ1, jogador1);
                controlaJogador.andaJogador("azul", numeroCasaJ1);

                this.mudaVezDoJogador();

                controlaCasas.determinaAcaoCasa(jogador1, numeroCasaJ1, numeroDado);
                if (!jogador1.taNoCratpcha && !jogador2.vez) {
                    controlaCasas.vereficaCraptcha(jogador2, numeroCasaJ1);
                }
            }

        } else if (jogador2.vez == true) {
            if (jogador2.permaneceAte6 == true) {
                controlaCasas.permaneceAteTirar6(jogador2, numeroCasaJ2, numeroDado);
                controlaJogador.andaJogador("verde", numeroCasaJ2);
                this.mudaVezDoJogador();
            } else {

                numeroCasaJ2 = numeroDado + parseInt(casaAtualJ2);
                alert(numeroCasaJ2);
                casaAtualJ2 = numeroCasaJ2;
                this.jogoAcabou(casaAtualJ2, jogador2);
                controlaJogador.andaJogador("verde", numeroCasaJ2);

                if (!jogador1.perdeuRodada) {
                    this.mudaVezDoJogador();
                }
                controlaCasas.determinaAcaoCasa(jogador2, numeroCasaJ2);
                if (!jogador2.taNoCratpcha && !jogador2.vez) {
                    controlaCasas.vereficaCraptcha(jogador1, numeroCasaJ2);
                }
            }
        }
    }

    this.mudaVezDoJogador = function () {
        if (jogador1.vez == true) {
            jogador1.vez = false;
            jogador2.vez = true;
        } else if (jogador2.vez == true) {
            jogador2.vez = false;
            jogador1.vez = true;
        }
    }

    this.jogoAcabou = function (numeroDeCasa, jogador) {
        if (numeroDeCasa > 26) {
            this.modalFimDeJogo('#janelaFimDeJogo');
            document.getElementById('finaldejogo').value = "O jogo terminou o " + jogador.nome + " venceu";

        }
    }
    this.modalFimDeJogo = function (id) {
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
        $('#mascara').css({'width': larguraTela, 'height': alturaTela});
        $('#mascara').fadeIn(1000);
        $('#mascara').fadeTo("slow", 0.8);
        var left = ($(window).width() / 2) - ($(id).width() / 2);
        var top = ($(window).height() / 2) - ($(id).height() / 2);
        $(id).css({'top': top, 'left': left});
        $(id).show();

    }
    ;
    //abrindo o div#modal ao carregar a página
    $(document).ready(function () {
        $('a[rel= moda]').click(function (e) {
            e.preventDefault();
            modalCrapcha($(this).attr('href'));
        });
        $('#fechar3').click(function (ev) {
            ev.preventDefault();
            $("#mascara").hide();
            $(".window").hide();

        });
    });

    this.modalIntruçõesInicioJogo = function (id) {
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
        $('#mascara').css({'width': larguraTela, 'height': alturaTela});
        $('#mascara').fadeIn(1000);
        $('#mascara').fadeTo("slow", 0.8);
        var left = ($(window).width() / 2) - ($(id).width() / 2);
        var top = ($(window).height() / 2) - ($(id).height() / 2);
        $(id).css({'top': top, 'left': left});
        $(id).show();
    }
    ;
    //abrindo o div#modal ao carregar a página
    $(document).ready(function () {
        $('a[rel= moda]').click(function (e) {
            e.preventDefault();
        });
        $('.botao4').click(function (ev) {
            ev.preventDefault();
            $("#mascara").hide();
            $(".window").hide();

        });
    });
    this.fechaIntrucao = function () {
        $(".window").hide();
        $("#mascara").hide();
    }

}