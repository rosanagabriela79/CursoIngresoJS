/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    var largo;
    var ancho;
    var perimetro;
    
   largo = document.getElementById("txtIdLargo").value;
   largo = parseInt(largo);
   ancho = document.getElementById("txtIdAncho").value;
   ancho = parseInt(ancho);
   

   perimetro = (largo*2 + ancho*2);
   cantidadAlambre = perimetro*3;

   alert(" la cantidad de alambre es " + cantidadAlambre);


}
function Circulo () 
{
    var radio;
    var circunsferencia;
    var cantidadAlambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    circunsferencia = 2* Math.PI *radio;

    cantidadAlambre = circunsferencia*3;


    alert(" La cantidad de alambre " + cantidadAlambre);

	
}
function Materiales () 
{
    var largo;
    var ancho;
    var areaRectangulo;
    var bolsadeCemento;
    var bolsadeCal;
    
    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    areaRectangulo = largo * ancho;
    bolsadeCemento = areaRectangulo*2;
    bolsadeCal = areaRectangulo*3;

    alert(" La cantidad de bolsa de Cemento " + bolsadeCemento + " y la cantidad de bolsa de Cal " + bolsadeCal);
	
}