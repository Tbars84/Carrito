var dibujo, lienzo, index, SpiderFerrari;
//objeto de referencia a la imagen
var objFondo = { nombreUrl : "fondo.jpg", imagenOk : false };
//objeto de referencia al keycode(codigo ASCII) de las letras
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };
//Objetos de coordanadas donde se estrella el carro
var PosPrimerLimite, PosSegundoLimite, PosTercerLimite, PosCuartoLimite;

//objeto de referencia al carro
var Objcarro = function(x , y , nom)
{
	this.x= x,
	this.y= y,
	this.marca= nom,
	this.carroOk = false
}
//
function cargaImagen(){
	var canvas = document.getElementById("dib");
	lienzo = canvas.getContext("2d");
	objFondo.imagen = new Image();
	objFondo.imagen.src = objFondo.nombreUrl;
	SpiderFerrari = new Objcarro(430,450,"488 Spider" );
	posIniY = SpiderFerrari.y; posIniX = SpiderFerrari.x;
		for (var i = 0; i < Object.keys(teclas).length; i++) {
			SpiderFerrari["img"+i] = new Image();
			SpiderFerrari["UrlImagen" + i] = "carro-"+i+".png";
			SpiderFerrari["img"+i].src = SpiderFerrari["UrlImagen" + i];
		};
				SpiderFerrari.img3.onload = function(){
					SpiderFerrari.carroOk = true;
					objFondo.imagenOk = true;
					dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img0 , SpiderFerrari.x , SpiderFerrari.y );
					document.addEventListener( "keydown", movimiento );

				}

}
//
function dibujar(ValFondo , ValCarro, CarroImg, CoorX , CoorY){
	if (ValFondo == true && ValCarro == true) {
		lienzo.drawImage( objFondo.imagen , 0,0 )
		lienzo.drawImage( CarroImg , CoorX , CoorY );
	};
	dibujarLimites( )
}
function dibujarLimites( ){
	//Valido las coordenadas de los limites de cada canvas para crear los array de poscisiones
	PosPrimerLimite =  [ [450 , 500], [450 , 420], [200 , 420] , [200 , 300] , [450 , 300] , [450 , 130] , [75 , 130] , [75 , 0] , [500 , 0] , [500 , 500] ];
	PosSegundoLimite = [ [425 , 500], [425, 460] , [30, 460] , [30, 275], [280, 275], [280, 175], [30, 175], [30, 0], [0, 0], [0, 500] ]
	PosTercerLimite = [ [300 , 175], [425, 175] , [425, 275] , [300, 275] ]
	PosCuartoLimite = [ [55 , 420], [170, 420] , [170, 300] , [55, 300] ]
	//Establezco los limites en X para establecer los limites de la carretera
	LimitesenEjeX = [  450,400,300,270,200,170,55,30 ];
	/*
	lienzo.beginPath;lienzo.moveTo(PosPrimerLimite[0][0] , PosPrimerLimite[0][1]);lienzo.lineTo(PosPrimerLimite[1][0] , PosPrimerLimite[1][1]);lienzo.lineTo(PosPrimerLimite[2][0] , PosPrimerLimite[2][1]);lienzo.lineTo(PosPrimerLimite[3][0] , PosPrimerLimite[3][1]);lienzo.lineTo(PosPrimerLimite[4][0] , PosPrimerLimite[4][1]);lienzo.lineTo(PosPrimerLimite[5][0] , PosPrimerLimite[5][1]);lienzo.lineTo(PosPrimerLimite[6][0] , PosPrimerLimite[6][1]);lienzo.lineTo(PosPrimerLimite[7][0] , PosPrimerLimite[7][1]);	lienzo.lineTo(PosPrimerLimite[8][0] , PosPrimerLimite[8][1]);lienzo.lineTo(PosPrimerLimite[9][0] , PosPrimerLimite[9][1]);lienzo.lineTo(PosPrimerLimite[0][0] , PosPrimerLimite[0][1]);lienzo.fillStyle = "rgba(255,255,255,0)";lienzo.strokeStyle ="rgb(255,255,255)";lienzo.closePath;lienzo.stroke();lienzo.fill();
	lienzo.beginPath;lienzo.moveTo(PosSegundoLimite[0][0] , PosSegundoLimite[0][1]);lienzo.lineTo(PosSegundoLimite[1][0] , PosSegundoLimite[1][1]);lienzo.lineTo(PosSegundoLimite[2][0] , PosSegundoLimite[2][1]);lienzo.lineTo(PosSegundoLimite[2][0] , PosSegundoLimite[2][1]);lienzo.lineTo(PosSegundoLimite[3][0] , PosSegundoLimite[3][1]);lienzo.lineTo(PosSegundoLimite[4][0] , PosSegundoLimite[4][1]);lienzo.lineTo(PosSegundoLimite[5][0] , PosSegundoLimite[5][1]);lienzo.lineTo(PosSegundoLimite[6][0] , PosSegundoLimite[6][1]);lienzo.lineTo(PosSegundoLimite[7][0] , PosSegundoLimite[7][1]);lienzo.lineTo(PosSegundoLimite[8][0] , PosSegundoLimite[8][1]);lienzo.lineTo(PosSegundoLimite[9][0] , PosSegundoLimite[9][1]);lienzo.lineTo(PosSegundoLimite[0][0] , PosSegundoLimite[0][1]);lienzo.fillStyle = "rgba(255,255,255,0)";lienzo.strokeStyle ="rgb(255,255,255)";lienzo.stroke();lienzo.closePath;lienzo.fill();
	lienzo.beginPath;lienzo.moveTo(PosTercerLimite[0][0] , PosTercerLimite[0][1]);lienzo.lineTo(PosTercerLimite[1][0] , PosTercerLimite[1][1]);lienzo.lineTo(PosTercerLimite[2][0] , PosTercerLimite[2][1]);lienzo.lineTo(PosTercerLimite[3][0] , PosTercerLimite[3][1]);lienzo.lineTo(PosTercerLimite[0][0] , PosTercerLimite[0][1]);lienzo.fillStyle = "rgba(255,255,255,0)";lienzo.strokeStyle ="rgb(255,255,255)";lienzo.stroke();lienzo.closePath;	lienzo.fill();
	lienzo.beginPath;lienzo.moveTo(PosCuartoLimite[0][0] , PosCuartoLimite[0][1]);lienzo.lineTo(PosCuartoLimite[1][0] , PosCuartoLimite[1][1]);lienzo.lineTo(PosCuartoLimite[2][0] , PosCuartoLimite[2][1]);lienzo.lineTo(PosCuartoLimite[3][0] , PosCuartoLimite[3][1]);lienzo.lineTo(PosCuartoLimite[0][0] , PosCuartoLimite[0][1]);lienzo.fillStyle = "rgba(255,255,255,0)";lienzo.strokeStyle ="rgb(255,255,255)";lienzo.stroke();lienzo.closePath;lienzo.fill();
	*/
}
function movimiento(teclado){
	//Eventos del cursor para manejar el carro
	Evteclado = teclado.keyCode;
 	if (Evteclado == teclas.UP) {
		SpiderFerrari.y = SpiderFerrari.y -5; 
		dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img0 , SpiderFerrari.x , SpiderFerrari.y );
	};
	if (Evteclado == teclas.DOWN) {
		SpiderFerrari.y = SpiderFerrari.y +5; 
		dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img1 , SpiderFerrari.x , SpiderFerrari.y );
	};
	if (Evteclado == teclas.LEFT) {
		SpiderFerrari.x = SpiderFerrari.x -5; 
		dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img2 , SpiderFerrari.x , SpiderFerrari.y );
	};
	if (Evteclado == teclas.RIGHT) {
		SpiderFerrari.x = SpiderFerrari.x +5;
		dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img3 , SpiderFerrari.x , SpiderFerrari.y );
	}
		// CONFIGURO LOS LIMITES DE LA CARRETERA DESDE X
		if (SpiderFerrari.x >= LimitesenEjeX[0] ) {
				reiniciaDibujo();
		};
		if (SpiderFerrari.x <= LimitesenEjeX[1] ) {
			if (( SpiderFerrari.y >= 440 && SpiderFerrari.y <= 500 ) ) {
				reiniciaDibujo();
			};			
		};
		if ( SpiderFerrari.x >= LimitesenEjeX[2] && SpiderFerrari.x <= LimitesenEjeX[1]) {
			if ((SpiderFerrari.y >= 165 && SpiderFerrari.y <= 270)) {
				console.log(SpiderFerrari.x)
				reiniciaDibujo();
			};
		};
		if ( SpiderFerrari.x <= LimitesenEjeX[3]) {
			if ((SpiderFerrari.y >= 155 && SpiderFerrari.y <= 270)) {
				reiniciaDibujo();
			};
		};
		if ( SpiderFerrari.x >= LimitesenEjeX[4]) {
			if ((SpiderFerrari.y >= 300 && SpiderFerrari.y <= 420)) {
				reiniciaDibujo();
			};
		};
		if ( SpiderFerrari.x <= LimitesenEjeX[5] && SpiderFerrari.x >= LimitesenEjeX[6]) {
			if ((SpiderFerrari.y >= 300 && SpiderFerrari.y <= 420)) {
				reiniciaDibujo();
			};
		};
		if (SpiderFerrari.x >= LimitesenEjeX[6]) {
			if ((SpiderFerrari.y >= 0 && SpiderFerrari.y <= 130)) {
				reiniciaDibujo();
			};
		};
		if ( SpiderFerrari.x <= LimitesenEjeX[7]) {
				reiniciaDibujo();
		};
		if (SpiderFerrari.y == 0 ) { 
			reiniciaDibujo()
		};
		if (SpiderFerrari.y >= 500 ) { 
			dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img0 , 50 , 0 );
		};		

}
function reiniciaDibujo(){
		SpiderFerrari.x = posIniX;
		SpiderFerrari.y = posIniY;
		dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img0 , SpiderFerrari.x , SpiderFerrari.y );
}
