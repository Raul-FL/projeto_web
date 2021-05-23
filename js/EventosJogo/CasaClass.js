/**
 Classe responsável por conter a imagem, numero e tipo de cada jogador.
 ***/
function CasasClass(){
    var img;
    var numero;
    var tipo;
    
     this.setimg = function (vImg) {
        this.img = vImg;
    }

    this.setNumero = function (vNumero) {
        this.numero = vNumero;
    }

    this.getImg = function () {
        return this.img;
    }

    this.getNumero = function () {
        return this.numero;
    }
     this.setTipo = function (vTipo) {
        this.tipo = vTipo;
    }

    this.getTipo = function () {
        return this.tipo;
    }

   
}