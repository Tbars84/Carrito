var dibujo, lienzo, index, SpiderFerrari;
//objeto de referencia a la imagen
var objFondo = { nombreUrl : "fondo.jpg", imagenOk : false };
//objeto de referencia al keycode(codigo ASCII) de las letras
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };
//Objetos de coordanadas donde se estrella el carro

var rangosRestringidos = {
	DirY1: 410, DirY2: 300, DirY3: 450, DirY4: 265,DirY5: 155, DirY6: 125,
		RaX1: 25, RaX2: 50, RaX3: 170,RaX4: 200, RaX5: 305, RaX6: 420,
	DirX1: 200,DirX2: 170, DirX3: 50, DirX4: 270,
		RaY1: 300, RaY2: 410, RaY3 : 160
}
var RangoX1 = []; var RangoX2 =[]; var RangoX3 =[]; RangoX4 = []; RangoX5 =[];
for (var i = rangosRestringidos.RaX1; i <= rangosRestringidos.RaX2; i++ ) {
	RangoX1.push(i);
};
for (var a = rangosRestringidos.RaX3; a <= rangosRestringidos.RaX4; a++) {
	RangoX1.push(a);
};
for (var b = rangosRestringidos.RaY1; b <= rangosRestringidos.RaY2; b++) {
	RangoX2.push(b);
};
for (var c = rangosRestringidos.DirY4; c <= rangosRestringidos.RaX5; c++) {
	RangoX3.push(c);
};
for (var c = rangosRestringidos.RaX6; c <= rangosRestringidos.DirY3; c++) {
	RangoX3.push(c);
};
for (var d = rangosRestringidos.RaX2; d <= rangosRestringidos.DirY3; d++) {
	RangoX4.push(d);
};
for (var e = rangosRestringidos.RaY3; e <= rangosRestringidos.DirX4; e++) {
	RangoX5.push(e);
};


//objeto de referencia al carro
var Objcarro = function(x , y , nom)
{
	this.x= x,
	this.y= y,
	this.marca= nom,
	this.carroOk = false
}

function cargaImagen(){
	var canvas = document.getElementById("dib");
	lienzo = canvas.getContext("2d");
	objFondo.imagen = new Image();
	objFondo.imagen.src = objFondo.nombreUrl;

	SpiderFerrari = new Objcarro(425,450,"488 Spider" );
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
						//Funcion que me permitemanejar el carro con las teclas up - left - right - down
						function movimiento(teclado){
							Evteclado = teclado.keyCode;
						 	if (Evteclado == teclas.UP) {
								SpiderFerrari.y = SpiderFerrari.y -5; 
								dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img0 , SpiderFerrari.x , SpiderFerrari.y );
								if(SpiderFerrari.y <= -50){
									reiniciaDibujo()								
								}
							};
							if (Evteclado == teclas.DOWN) {
								SpiderFerrari.y = SpiderFerrari.y +5; 
								dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img1 , SpiderFerrari.x , SpiderFerrari.y );
								if(SpiderFerrari.y >= 500){
									reiniciaDibujo()								
								}
							};
							if (Evteclado == teclas.LEFT) {
								SpiderFerrari.x = SpiderFerrari.x -5; 
								dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img2 , SpiderFerrari.x , SpiderFerrari.y );
								if(SpiderFerrari.x <= 25){
									reiniciaDibujo()								
								}
							};
							if (Evteclado == teclas.RIGHT) {
								SpiderFerrari.x = SpiderFerrari.x +5;
								dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img3 , SpiderFerrari.x , SpiderFerrari.y );
								if(SpiderFerrari.x >= 445){
									reiniciaDibujo()								
								}
							};

							//CONDICIONALES CON ARRAYS PARA CONDUCIR SOLO EN EL CAMINO
							console.log(SpiderFerrari.x);
							
							if (SpiderFerrari.y == rangosRestringidos.DirY1) {
								rangoViaY1(RangoX1, SpiderFerrari.x);
							};
							if (SpiderFerrari.y == rangosRestringidos.DirY2) {
								rangoViaY1(RangoX1, SpiderFerrari.x);
							};
							if (SpiderFerrari.y == rangosRestringidos.DirY3) {
								rangoViaY1(RangoX1, SpiderFerrari.x);
							};
							if (SpiderFerrari.y == rangosRestringidos.DirY4) {
								rangoViaY1(RangoX3, SpiderFerrari.x);
							};
							if (SpiderFerrari.y == rangosRestringidos.DirY5) {
								rangoViaY1(RangoX3, SpiderFerrari.x);
							};
							if (SpiderFerrari.y == rangosRestringidos.DirY6) {
								rangoViaX1(RangoX4, SpiderFerrari.x);
							};
							if (SpiderFerrari.x == rangosRestringidos.DirX1) {
								//console.log(SpiderFerrari.x +" "+ SpiderFerrari.y);
								rangoViaX1(RangoX2 , SpiderFerrari.y)
							};
							if (SpiderFerrari.x == rangosRestringidos.DirX2) {
								//console.log(SpiderFerrari.x +" "+ SpiderFerrari.y);
								rangoViaX1(RangoX2 , SpiderFerrari.y)							
							};
							if (SpiderFerrari.x == rangosRestringidos.DirX3) {
								//console.log(SpiderFerrari.x +" "+ SpiderFerrari.y);
								rangoViaX1(RangoX2 , SpiderFerrari.y)							
							};
							if (SpiderFerrari.x == rangosRestringidos.DirY4) {
								//console.log(SpiderFerrari.x +" "+ SpiderFerrari.y);
								rangoViaX1(RangoX5 , SpiderFerrari.y)
							};
							if (SpiderFerrari.x == rangosRestringidos.DirY2) {
								//console.log(SpiderFerrari.x +" "+ SpiderFerrari.y);
								rangoViaX1(RangoX5 , SpiderFerrari.y)
							};
							if (SpiderFerrari.x == rangosRestringidos.RaX6) {
								//console.log(SpiderFerrari.x +" "+ SpiderFerrari.y);
								rangoViaX1(RangoX5 , SpiderFerrari.y)
							};

								function rangoViaY1(Rango, Busc){
									var index = Rango.indexOf(Busc);
									if (index == -1) {
										reiniciaDibujo()
									};
								}
								function rangoViaX1(Rango, Busc){
									var index = Rango.indexOf(Busc);
									if (index != -1) {
										reiniciaDibujo()
									};

								}
								function reiniciaDibujo(){
										SpiderFerrari.x = posIniX;
										SpiderFerrari.y = posIniY;
										dibujar( objFondo.imagenOk , SpiderFerrari.carroOk, SpiderFerrari.img0 , SpiderFerrari.x , SpiderFerrari.y );
								}

						}
				}
}
function dibujar(ValFondo , ValCarro, CarroImg, CoorX , CoorY){
	if (ValFondo == true && ValCarro == true) {
		lienzo.drawImage( objFondo.imagen , 0,0 )
		lienzo.drawImage( CarroImg , CoorX , CoorY );
	};
}