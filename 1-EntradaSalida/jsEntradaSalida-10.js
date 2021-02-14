/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Importe;
	var nombredelProducto;
	var descuento;
	var preciofinal;
	
	 Importe = document.getElementById("txtIdImporte").value;
	 Importe = parseInt(Importe);

	 nombredelProducto = document.getElementById("txtIddescripciondelproducto").value;
     nombredelProducto = prompt(nombredelProducto);

	 descuento = Importe *porcentajedeDescuento;
	 descuento = parseInt(mostardescuento);

     preciofinal = Importe - descuento;
	 preciofinal = parseInt(preciofinal);
	
	 alert("Usted compro un" +  nombredelProducto + descuento + preciofinal) ;

	 
	 

	 
 
}
