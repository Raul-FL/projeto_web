/* global casas, codificandoArray */

function ControlaCasasClass() {

    /**
     Método responsável por inserir imagens,tipo e numero para cada casa, listar as casas do tabuleiro.
     ***/
    this.SorteiaCasas = function () {


        casas[0] = new CasasClass();
        casas[0].setTipo("jogaDado");
        casas[0].setimg("<img src='campos/1.jpg' alt='Assistiu palestra sobre acessibilidade. Jogue o dado novamente' style='width: 10.2em; height: 10.2em'>");
        casas[1] = new CasasClass();
        casas[1].setTipo("avanca");
        casas[1].setNumero(1);
        casas[1].setimg("<img src='campos/2.jpg' alt='Ouviu o site no leitor de tela pela primeira vez. Avance uma casa'>")
        casas[2] = new CasasClass();
        casas[2].setTipo("chaptcha");
        casas[2].setimg("<img src='campos/chaptcha.jpg' alt='CHAPTHA!! tire uma carta'>");
        casas[3] = new CasasClass();
        casas[3].setTipo("voltaInicio");
        casas[3].setimg("<img src='campos/5.jpg' alt='Usou o clique aqui como link. Volte ao ínicio'>");
        casas[4] = new CasasClass();
        casas[4].setTipo("codificando");
        casas[4].setimg("<img src='campos/codificando.jpg' alt='Codificando tire uma carta'>");
        casas[5] = new CasasClass();
        casas[5].setTipo("pausaCafe");
        casas[5].setimg("<img src='campos/cafe.jpg' alt='Pausa para o café'>");
        casas[5].setNumero(1);
        casas[6] = new CasasClass();
        casas[6].setTipo("avancePausaCafe");
        casas[6].setimg("<img src='campos/7.jpg' alt='Colocou atributo alt nas figuras. Faça uma pausa para o café'>");
        casas[7] = new CasasClass();
        casas[7].setTipo("chaptcha");
        casas[7].setimg("<img src='campos/chaptcha.jpg' alt='CHAPTHA!! tire uma carta'>");
        casas[8] = new CasasClass();
        casas[8].setTipo("perdeRodada");
        casas[8].setimg("<img src='campos/8.jpg' alt='Misturou o CSS com HTML. Perca uma rodada arrumando'>");
        casas[9] = new CasasClass();
        casas[9].setTipo("chaptcha");
        casas[9].setimg("<img src='campos/chaptcha.jpg' alt='CHAPTHA!! tire uma carta'>");
        casas[10] = new CasasClass();
        casas[10].setTipo("pausaCafe");
        casas[10].setimg("<img src='campos/cafe.jpg' alt='Pausa para o café'>");
        casas[11] = new CasasClass();
        casas[11].setTipo("avanca");
        casas[11].setNumero(2);
        casas[11].setimg("<img src='campos/10.jpg' alt='Retirou o javascript inútil. Avançe duas casas'>");

        casas[12] = new CasasClass();
        casas[12].setTipo("avanca");
        casas[12].setNumero(2);
        casas[12].setimg("<img src='campos/18.jpg'alt='Estudando Acessibilidade Avance duas casas'>");

        casas[13] = new CasasClass();
        casas[13].setTipo("codificando");
        casas[13].setimg("<img src='campos/codificando.jpg'alt='Codificando tire uma carta'>");
        casas[14] = new CasasClass();
        casas[14].setTipo("avancePausaCafe");
        casas[14].setimg("<img src='campos/12.jpg'alt='Colocou imagens decorativas no CSS. Faça uma pausa para o café'>")
        casas[15] = new CasasClass();
        casas[15].setTipo("jogaDado");
        casas[15].setimg("<img src='campos/13.jpg' alt='Avaliou o site pela primeia vez. Jogue o dado novamente'>");
        casas[16] = new CasasClass();
        casas[16].setTipo("voltaInicio");
        casas[16].setimg("<img src='campos/14.jpg' alt='O script funciona só com o mouse. Volte ao ínicio'>");
        casas[17] = new CasasClass();
        casas[17].setTipo("pausaCafe");
        casas[17].setimg("<img src='campos/cafe.jpg' alt='Pausa para o café'>");
        casas[18] = new CasasClass();
        casas[18].setTipo("chaptcha");
        casas[18].setimg("<img src='campos/chaptcha.jpg' alt='CHAPTHA!! tire uma carta'>");

        casas[19] = new CasasClass();
        casas[19].setTipo("jogaDado");
        casas[19].setimg("<img src='campos/19.jpg' alt='Separou o CSS do HTML. Jogue o dado novamente'>");

        casas[20] = new CasasClass();
        casas[20].setTipo("volta");
        casas[20].setimg("<img src='campos/16.jpg' alt='Usou o texto justificado no site. Volte duas casas'>");
        casas[20].setNumero(2);
        casas[21] = new CasasClass();
        casas[21].setTipo("codificando");
        casas[21].setimg("<img src='campos/codificando.jpg' alt='Codificando tire uma carta'>");
        casas[22] = new CasasClass();
        casas[22].setTipo("jogaDado");
        casas[22].setimg("<img src='campos/17.jpg' alt='Retirou 20 banners do site. Jogue o dado novamente'>");

        casas[23] = new CasasClass();
        casas[23].setTipo("jogaDado");
        casas[23].setimg("<img src='campos/20.jpg' alt='Convenceu o designer a não usar Flash. Jogue o dado outra vez'>");

        casas[24] = new CasasClass();
        casas[24].setTipo("avanca");
        casas[24].setNumero(2);
        casas[24].setimg("<img src='campos/22.jpg' alt='Formulários validados. Avance duas casas.'>");

        casas[25] = new CasasClass();
        casas[25].setimg("<img src='campos/4.jpg' alt='eMAG é um modelo para sites brasileiros.'>");
        casas[25].setTipo("informativa");
        function shuffle(o) {
            for (var j, x, i = o.length; i;
                    j = Math.floor (Math.random () * i)
                    , x = o [-- i ],
                    o[ i ] = o [ j ],
                    o[ j ] = x)
                ;
        }
        this.verificaCasas = function () {
            var x = false;
            while (x == false) {
                for (var i = 0; i < casas.length; i++) {
                    for (var j = 0; j < 24; j++) {
                        if (casas[j].tipo == "chaptcha" && casas[j + 1].tipo == "chaptcha" || casas[j].tipo == "codificando" && casas[j + 1].tipo == "codificando" || casas[j].tipo == "pausaCafe" && casas[j + 1].tipo == "pausaCafe") {
                            aux = casas[j + 1];
                            casas[j + 1] = casas[j + 2];
                            casas[j + 2] = aux;
                            x = true;
                        } else {

                            x = true;
                        }
                    }
                }

            }
        }

        shuffle(casas);
        this.verificaCasas();
        $(".iniciar").append("<img src='campos/iniciar1.png' alt='Começe aqui' style='width: 17em; height: 17em'>");
        $(".camp1").append(casas[0].getImg());
        $(".camp2").append(casas[1].getImg());
        $(".camp3").append(casas[2].getImg());
        $(".camp4").append(casas[3].getImg());
        $(".camp5").append(casas[4].getImg());
        $(".camp6").append(casas[5].getImg());
        $(".camp7").append(casas[6].getImg());
        $(".camp8").append(casas[7].getImg());
        $(".camp9").append(casas[8].getImg());
        $(".camp10").append(casas[9].getImg());
        $(".camp11").append(casas[10].getImg());
        $(".camp12").append(casas[11].getImg());
        $(".camp13").append(casas[12].getImg());
        $(".camp14").append(casas[13].getImg());
        $(".camp15").append(casas[14].getImg());
        $(".camp16").append(casas[15].getImg());
        $(".camp17").append(casas[16].getImg());
        $(".camp18").append(casas[17].getImg());
        $(".camp19").append(casas[18].getImg());
        $(".camp20").append(casas[19].getImg());
        $(".camp21").append(casas[20].getImg());
        $(".camp22").append(casas[21].getImg());
        $(".camp23").append(casas[22].getImg());
        $(".camp24").append(casas[23].getImg());
        $(".camp25").append(casas[24].getImg());
        $(".camp26").append(casas[25].getImg());
        $(".final").append("<img src='campos/fim.png' alt='Parabéns seu site é acessivel' style='width: 17em; height: 17em'>");
    }

    this.determinaAcaoCasa = function (jogador, numeroCasa, numeroDado) {

        switch (casas[numeroCasa - 1].getTipo()) {

            case "chaptcha":
            case "chaptcha":
                document.getElementById("areaDeTExto").value = "O jogador " + jogador.nome + " está casa Craptcha, presione tab para reponder a pergunta";
                this.sorteia(jogador);
                modalCrapcha('#janelaCraptcha');
                jogador.taNoCratpcha = true;
                break;
            case "codificando":
                document.getElementById("areaDeTExto").value = "O jogador " + jogador.nome + " na casa Codificando, presione tab para acessar o codificado ";
                this.sorteiaCodificando();
                this.abrirModalCodificando('#ModalCodificando');
                this.verificaTipoCodificando(jogador, numeroCasa, numeroDado);
                break;
            case "jogaDado":
                document.getElementById("areaDeTExto").value = "O jogador " + jogador.nome + " pode Jogar o dado novamente";
                this.casaJogaDadoNovamente(jogador);
                break;
            case "perdeRodada":
                document.getElementById("areaDeTExto").value = "O Jogador " + jogador.nome + " perdeu uma rodada, seu adversario pode jogar 2 veses seguidas";

                break;
            case "avanca":
                this.casaAvancaJogador(jogador, numeroCasa);
                break;
                break;
            case "volta":

                this.casaVoltaJogador(jogador, numeroCasa);

                break;
            case "voltaInicio":
                document.getElementById("areaDeTExto").value = "O jogador " + jogador.nome + " voltou ao inicio do jogo, agora é a vez do seu adversario";
                this.casaVoltaInicio(jogador);
                break;
            case "avancePausaCafe":
                document.getElementById("areaDeTExto").value = "O jogador " + jogador.nome + " avançou até casa pausa pro café mais proxima, agora vez de seu adversario";
                this.avancePausaCafe(numeroCasa, jogador);
                break;
            case "pausaCafe":
                document.getElementById("areaDeTExto").value = "O jogador " + jogador.nome + " está na casa pausa para o café, agora vez de seu adversario";
                break;
        }
        document.getElementById("areaDeTExto").focus();
    }



    /*Métodos para a ação de cada casa do tabuleiro*/
    this.casaJogaDadoNovamente = function (jogador) {
        switch (jogador) {
            case jogador1:
                jogador1.vez = true;
                jogador2.vez = false;
                break;
            case jogador2:
                jogador2.vez = true;
                jogador1.vez = false;
                break;
        }
    }
    this.casaVoltaInicio = function (jogador, numeroCasa) {
        switch (jogador) {
            case jogador1:
                numeroCasa = 0;
                casaAtualJ1 = 0;
                $("#personagemAzul").remove();
                $(".iniciar").append("<div id=personagemAzul style='right:3em;'><div id=personagemAzulNome>" + jogador1.nome + "</div></div>");
                this.vereficaCraptcha(jogador2, casaAtualJ2);
                break;

            case jogador2:
                numeroCasa = 0;
                casaAtualJ2 = 0;
                $("#personagemVerde").remove();
                $(".iniciar").append("<div id=personagemVerde style='right:-3em;'><div id=personagemVerdeNome>" + jogador2.nome + "</div></div>");
                this.vereficaCraptcha(jogador1, casaAtualJ1);
                break;

        }
    }


    this.casaAvancaJogador = function (jogador, numeroCasa) {
        switch (jogador) {
            case jogador1:
                numeroCasa = numeroCasa + casas[numeroCasa - 1].numero;
                casaAtualJ1 = numeroCasa;
                $("#personagemAzul").remove();
                $(".camp" + numeroCasa).append("<div id=personagemAzul style='right:3em; top:2.8em;'></div>");
                document.getElementById("areaDeTExto").value = "O Jogador " + jogador.nome + " avançou  " + casas[numeroCasa - 1].numero;
                this.determinaAcaoCasa(jogador1, numeroCasa);
                break;
            case jogador2:
                numeroCasa = numeroCasa + casas[numeroCasa - 1].numero;
                casaAtualJ2 = numeroCasa;
                $("#personagemVerde").remove();
                $(".camp" + numeroCasa).append("<div id=personagemVerde style='right:3em; top:2.9em'></div>");
                document.getElementById("areaDeTExto").value = "O Jogador " + jogador.nome + " avançou " + casas[numeroCasa - 1].numero;
                this.determinaAcaoCasa(jogador2, numeroCasa);
                break;
        }
    }
    this.casaVoltaJogador = function (jogador, numeroCasa) {
        switch (jogador) {
            case jogador1:
                numeroCasa = numeroCasa - casas[numeroCasa - 1].numero;
                if (numeroCasa > 0) {
                    casaAtualJ1 = numeroCasa;
                    $("#personagemAzul").remove();
                    $(".camp" + numeroCasa).append("<div id=personagemAzul style='right:3em; top:2.8em;'></div>");
                    document.getElementById("areaDeTExto").value = "O Jogador  " + jogador.nome + " voltou " + casas[numeroCasa - 1].numero;
                    this.determinaAcaoCasa(jogador1, numeroCasa);
                } else {
                    this.casaVoltaInicio(jogador1, numeroCasa);
                }
                break;
            case jogador2:
                numeroCasa = numeroCasa - casas[numeroCasa - 1].numero;
                if (numeroCasa > 0) {
                    casaAtualJ2 = numeroCasa;
                    $("#personagemVerde").remove();
                    $(".camp" + numeroCasa).append("<div id=personagemVerde style='right:3em; top:2.9em'></div>");
                    document.getElementById("areaDeTExto").value = "O Jogador " + jogador.nome + "  voltou  " + casas[numeroCasa - 1].numero;
                    this.determinaAcaoCasa(jogador2, numeroCasa);
                } else {
                    this.casaVoltaInicio(jogador2, numeroCasa);
                }
                break;
        }
    }

    this.avancePausaCafe = function (numeroCasa, jogador) {
        var i = numeroCasa;
        for (; i < casas.length; i++) {
            if (casas[i].tipo == "pausaCafe") {
                var aux = i + 1;
                controlaJogador.andaJogador(jogador.cor, aux);
                break;
            }
        }
        if (jogador == jogador1) {
            casaAtualJ1 = aux;
            this.vereficaCraptcha(jogador2, casaAtualJ2);
        }
        if (jogador == jogador2) {
            casaAtualJ2 = aux;
            this.vereficaCraptcha(jogador1, casaAtualJ1);
        }
    }

    function Matrix() {
        this.rows = new Array();
    }

    var craptchas = new Matrix();
    craptchas.rows[0] = new Array("craptcha1", "craptcha1b");
    craptchas.rows[1] = new Array("craptcha2", "craptcha2a");
    craptchas.rows[2] = new Array("craptcha3", "craptcha3d");
    craptchas.rows[3] = new Array("craptcha4", "craptcha4a");
    craptchas.rows[4] = new Array("craptcha5", "craptcha5c");
    craptchas.rows[5] = new Array("craptcha6", "craptcha6b");
    craptchas.rows[6] = new Array("craptcha7", "craptcha7b");
    craptchas.rows[7] = new Array("craptcha8", "craptcha8a");
    var index = 7;
    var nume = 0;
    var craptchasSorteado = [];
    function modalCrapcha(id) {
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
        $('.fechar').click(function (ev) {
            ev.preventDefault();
            $("#mascara").hide();
            $(".window").hide();
            document.getElementById('errou').style.display = 'none';
            document.getElementById('acerto').style.display = 'none';
            document.getElementById('some').style.display = 'block';
            document.getElementById('fechar').style.display = 'none';
            todosNoCraptcha();
            escondePergunda();
            document.getElementById("areaDeTExto").focus();

        });
    });
    this.sorteia = function (jogador) {
        nume = Math.floor((Math.random() * index) + 1);
        craptchasSorteado = craptchas.rows[nume - 1];
        jogador.idCratpcha = craptchasSorteado;
        document.getElementById(craptchasSorteado[0]).style.display = 'block';
        craptchas.rows.splice(nume - 1, 1);
        index = craptchas.rows.length;
    }

    document.getElementById("botao").onclick = function () {
        var radios = document.getElementsByName(craptchasSorteado[0]);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                if (radios[i].value === craptchasSorteado[1]) {
                    Acerto();
                } else {
                    Errou(radios[i].value);
                    if (i == 0) {
                        radios[1].checked = true;
                    }
                    radios[0].checked = true;
                }
            }

        }

        escondePergunda();
    };
    //metodo com ações que acontecem quando o jogador erra a pergunta do craptcha
    function Errou(resposta) {

        audio = document.createElement('audio');
        audio.src = 'audios/fail.ogg';
        audio.autoplay = true;
        document.body.appendChild(audio);
        document.getElementById(craptchasSorteado[0]).style.display = 'none';
        document.getElementById('some').style.display = 'none';
        document.getElementById('errou').style.display = 'block';
        document.getElementById('errou').focus();
        document.getElementById('fechar').style.display = 'block';
        document.getElementById(resposta).style.display = 'none';

        document.getElementById("areaDeTExto").value = "Você erro a pergunta, tente na proxima rodada, agora é vez so seu adversario";

    }
    function Acerto() {
        audio = document.createElement('audio');
        audio.src = 'audios/aplausos.ogg';
        audio.autoplay = true;
        document.body.appendChild(audio);
        document.getElementById(craptchasSorteado[0]).style.display = 'none';
        document.getElementById('some').style.display = 'none';
        document.getElementById('acerto').style.display = 'block';
        document.getElementById('acerto').focus();
        document.getElementById('fechar').style.display = 'block';
        jogo.mudaVezDoJogador();
        tirarJogadorDocraptcha();
        document.getElementById("areaDeTExto").value = "Você acertou, pode jogar o dado";
    }
    //verefica se o jogador esta no Craptcha e chama o modal
    this.vereficaCraptcha = function (jogador, numeroCasa) {
        if (casas[numeroCasa - 1].getTipo() != "jogaDado") {
            if (jogador.taNoCratpcha) {
                modalCrapcha('#janelaCraptcha');
                document.getElementById(jogador.idCratpcha[0]).style.display = 'block';
                document.getElementById(craptchasSorteado[0]).focus();
                document.getElementById("areaDeTExto").value = "O jogador " + jogador.nome + " está casa Craptcha, presione tab para reponder a pergunta";
                jogo.mudaVezDoJogador();
            }
        }
    }
    //verefica se os dois jogares estão no craptcha ao mesmo tempo
    function todosNoCraptcha() {
        if (jogador1.taNoCratpcha == true && jogador2.taNoCratpcha == true) {
            if (jogador1.vez) {
                document.getElementById(jogador1.idCratpcha[0]).style.display = 'block';
                document.getElementById(jogador1.idCratpcha[0]).focus();
                document.getElementById(jogador2.idCratpcha[0]).style.display = 'nome';
                modalCrapcha('#janelaCraptcha');
                craptchasSorteado = jogador1.idCratpcha;
                document.getElementById("areaDeTExto").value = "Você erro a pergunta, tente na proxima rodada, agora é vez so seu " + jogador2.nome;
            }
            if (jogador2.vez) {
                modalCrapcha('#janelaCraptcha');
                document.getElementById(jogador2.idCratpcha[0]).style.display = 'block';
                document.getElementById(jogador2.idCratpcha[0]).focus();
                document.getElementById(jogador1.idCratpcha[0]).style.display = 'nome';
                craptchasSorteado = jogador2.idCratpcha;
                document.getElementById("areaDeTExto").value = "Você erro a pergunta, tente na proxima rodada, agora é vez so seu " + jogador1.nome;
            }
            jogo.mudaVezDoJogador();
        }
    }
    //para tirar o jogador do craptcha, método é chamado no acertou  
    function tirarJogadorDocraptcha() {
        if (jogador1.vez) {
            jogador1.respostas = [];
            jogador1.taNoCratpcha = false;
        }
        if (jogador2.vez) {
            jogador2.taNoCratpcha = false;
            jogador2.respostas = [];
        }
    }
    // método para esconder a pergunta no modal 
    function escondePergunda() {
        if (jogador1.taNoCratpcha) {
            document.getElementById(jogador1.idCratpcha[0]).style.display = 'nome';
        }
        if (jogador2.taNoCratpcha) {
            document.getElementById(jogador2.idCratpcha[0]).style.display = 'nome';
        }
    }

    function modalCodificando() {
        $(document).click(function () {
            $("a[rel= modal]").load(function (ev) {
                ev.preventDefault();
                var id = $(this).attr("href");
                var alturaTela = $(document).height();
                var larguraTela = $(window).width();
                //colocando o fundo preto
                $('#mascaraCodificando').css({'width': larguraTela, 'height': alturaTela});
                $('#mascaraCodificando').fadeIn(1000);
                $('#mascaraCodificando').fadeTo("slow", 0.8);
                var left = ($(window).width() / 2) - ($(id).width() / 2);
                var top = ($(window).height() / 2) - ($(id).height() / 2);
                $(id).css({'top': top, 'left': left});
                $(id).show();
                $(document).keydown(function (e) {
                    $('h1').attr('disabled', 'disabled');
                    $('titulo').attr('disabled', 'disabled');
                });
            });
        });
    }

    this.abrirModalCodificando = function (id) {
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
        //colocando o fundo preto
        $('#mascaraCodificando').css({'width': larguraTela, 'height': alturaTela});
        $('#mascaraCodificando').fadeIn(1000);
        $('#mascaraCodificando').fadeTo("slow", 0.8);
        var left = ($(window).width() / 2) - ($(id).width() / 2);
        var top = ($(window).height() / 2) - ($(id).height() / 2);
        $(id).css({'top': top, 'left': left});
        $(id).show();



    }
    ;
    $(document).ready(function () {

        $('a[rel= modal]').click(function (e) {
            e.preventDefault();
            abrirModalCodificando($(this).attr('href'));


        });
        //abrindo o div#modal ao carregar a página
        $('.windows #fecharCodificando').click(function (ev) {
            ev.preventDefault();
            $("#mascaraCodificando").hide();
            $(".windows").hide();

        });



    });
    this.sorteiaCodificando = function () {

        codificandoArray[0] = new CodificandoClass();
        codificandoArray[0].id = "codificando1";
        codificandoArray[0].tipo = "permaneceAte6";

        codificandoArray[1] = new CodificandoClass();
        codificandoArray[1].id = "codificando2";
        codificandoArray[1].tipo = "pausaCafe";

        codificandoArray[2] = new CodificandoClass();
        codificandoArray[2].id = "codificando3";
        codificandoArray[2].tipo = "permaneceAte6";

        function shuffle(o) {
            for (var j, x, i = o.length; i;
                    j = Math.floor (Math.random () * i)
                    , x = o [-- i ],
                    o[ i ] = o [ j ],
                    o[ j ] = x)
                ;
        }
        shuffle(codificandoArray);
        document.getElementById(codificandoArray[0].id).style.display = 'block';
        document.getElementById(codificandoArray[0].id).focus();

        for (var i = 1; i < codificandoArray.length; i++) {
            document.getElementById(codificandoArray[i].id).style.display = 'none';
        }
    }

    this.verificaTipoCodificando = function (jogador, numeroCasa, numeroDado) {
        if (jogador1.permaneceAte6 == true) {
            this.permaneceAteTirar6(jogador, numeroCasa, numeroDado);
        } else if (jogador1.permaneceAte6 == true) {
            this.permaneceAteTirar6(jogador, numeroCasa, numeroDado);
        } else {
            switch (codificandoArray[0].tipo) {
                case "jogaDadoNovamente":
                    this.casaJogaDadoNovamente(jogador);
                    break;
                case "pausaCafe":
                    this.avancePausaCafe(numeroCasa, jogador);
                    break;
                case "permaneceAte6":
                    this.permaneceAteTirar6(jogador, numeroCasa, numeroDado);
            }
        }
    }

    this.permaneceAteTirar6 = function (jogador, numeroCasa, numeroDado) {
        switch (jogador) {
            case jogador1:
                if (numeroDado != 6) {
                    jogador1.permaneceAte6 = true;
                    
                    alert("não jogador1");
                } else {
                    jogador1.permaneceAte6 = false;
                    alert("igual a 6" + numeroDado);
                }
                break;

            case jogador2:
                if (numeroDado != 6) {
                    jogador2.permaneceAte6 = true;
                    
                     alert("não jogador2");
                } else {
                    jogador2.permaneceAte6 = false;
                    alert("igual a 6" + numeroDado);
                }
                break;
        }
    }

    this.andaJogador = function (jogador, numeroCasa) {
        switch (jogador) {
            case jogador1:
                $("#personagemAzul").remove();
                $(".camp" + numeroCasa).append("<div id=personagemAzul style='right:3em;'><div id=personagemAzulNome>" + jogador1.nome + "</div></div>");
                break;
            case jogador2:
                $("#personagemVerde").remove();
                $(".camp" + numeroCasa).append("<div id=personagemVerde style='right:-3em'><div id=personagemVerdeNome>" + jogador2.nome + "</div></div>");
                break;
        }
    }

    this.trocaLugar = function (jogador, casaAtual1, casaAtual2) {
        alert(casaAtual1);
        alert(casaAtual2);
        switch (jogador) {
            case jogador1:
                $("#personagemAzul").remove();
                $("#personagemVerde").remove();
                if (casaAtual1 == 0) {
                    $(".iniciar").append("<div id=personagemAzul style='right:3em;'><div id=personagemAzulNome>" + jogador1.nome + "</div></div>");
                    $(".camp" + casaAtual2).append("<div id=personagemVerde style='right:-3em'><div id=personagemVerdeNome>" + jogador2.nome + "</div></div>");
                } else {
                    $(".camp" + casaAtual1).append("<div id=personagemAzul style='right:-3em;'><div id=personagemAzulNome>" + jogador1.nome + "</div></div>");
                    $(".camp" + casaAtual2).append("<div id=personagemVerde style='right:3em'><div id=personagemVerdeNome>" + jogador2.nome + "</div></div>");
                }
                break;
            case jogador2:
                $("#personagemAzul").remove();
                $("#personagemVerde").remove();
                if (casaAtual2 == 0) {
                    $(".iniciar").append("<div id=personagemVerde style='right:-3em'><div id=personagemVerdeNome>" + jogador2.nome + "</div></div>");
                    $(".camp" + casaAtual1).append("<div id=personagemAzul style='right:3em;'><div id=personagemAzulNome>" + jogador1.nome + "</div></div>");
                } else {
                    $("#personagemAzul").remove();
                    $("#personagemVerde").remove();
                    $(".camp" + casaAtual2).append("<div id=personagemVerde style='right:3em;'><div id=personagemVerdeNome>" + jogador2.nome + "</div></div>");
                    $(".camp" + casaAtual1).append("<div id=personagemAzul style='right:-3em;'><div id=personagemAzulNome>" + jogador1.nome + "</div></div>");
                }
                break;
        }
    }

    this.casaVoltaJogadorCodificando = function (jogador, numeroCasa) {
        switch (jogador) {

            case jogador1:
                if (numeroCasa >= 5) {
                    var casa = numeroCasa - codificandoArray[0].numero;
                    if (casa != 0) {
                        this.andaJogador(jogador, casa);
                    } else if (casa < 0) {
                        this.casaVoltaInicio(jogador, numeroCasa);
                    }
                } else if (numeroCasa < 5) {
                    this.casaVoltaInicio(jogador, numeroCasa);
                }
                break;

            case jogador2:
                if (numeroCasa >= 5) {
                    var casa = numeroCasa - codificandoArray[0].numero;
                    if (casa != 0) {
                        this.andaJogador(jogador, casa);
                    } else if (casa < 0) {
                        this.casaVoltaInicio(jogador, numeroCasa);
                    }
                } else if (numeroCasa < 5) {
                    this.casaVoltaInicio(jogador, numeroCasa);
                }
                break;

        }

    }

    this.trocaLugarUltimoColocado = function (jogador) {

        switch (jogador) {
            case jogador1:
                if (casaAtualJ1 > casaAtualJ2) {
                    var guardacasa = casaAtualJ1;
                    casaAtualJ1 = casaAtualJ2;
                    casaAtualJ2 = guardacasa;
                    this.trocaLugar(jogador, casaAtualJ1, casaAtualJ2);
                } else if (casaAtualJ1 < casaAtualJ2) {
                    alert("Você é o ultimo colocado!");
                }
                break;
            case jogador2:
                if (casaAtualJ2 > casaAtualJ1) {
                    var guardacasa = casaAtualJ2;
                    casaAtualJ2 = casaAtualJ1;
                    casaAtualJ1 = guardacasa;
                    this.trocaLugar(jogador, casaAtualJ1, casaAtualJ2);
                } else if (casaAtualJ2 < casaAtualJ1) {
                    alert("Você é o ultimo colocado!");
                }
                break;
        }

    }
}







