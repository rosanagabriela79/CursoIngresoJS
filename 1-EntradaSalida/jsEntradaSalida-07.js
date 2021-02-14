/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var unNumero;
	var otroNumero;
	var suma;
	
	unNumero = document.getElementById("txtIdNumeroUno").value;
	unNumero = parseInt(unNumero);
	otroNumero = document.getElementById("txtIdNumeroDos").value;
	otroNumero = parseInt(otroNumero);
	suma = unNumero + otroNumero;
	
    	alert("La suma es " + suma);

	
}

function restar()
{   var unNumero;
	var otroNumero;
	var restar;
	
	unNumero = document.getElementById("txtIdNumeroUno").value;
	unNumero = parseInt(unNumero);
	otroNumero = document.getElementById("txtIdNumeroDos").value;
	otroNumero = parseInt(otroNumero);
	restar = unNumero - otroNumero;
	
    	alert("La restar es " + restar);

	
}

function multiplicar()
{ 
	var unNumero;
	var otroNumero;
	var multiplicar;
	
	unNumero = document.getElementById("txtIdNumeroUno").value;
	unNumero = parseInt(unNumero);
	otroNumero = document.getElementById("txtIdNumeroDos").value;
	otroNumero = parseInt(otroNumero);
	multiplicar = unNumero * otroNumero;
	
    	alert(" multiplicar es " + multiplicar);

}

function dividir()
{
	var unNumero;
	var otroNumero;
	var dividir;
	
	unNumero = document.getElementById("txtIdNumeroUno").value;
	unNumero = parseInt((unNumero))
	otroNumero = document.getElementById("txtIdNumeroDos").value;
	otroNumero = parseInt(otroNumero);
	dividir = unNumero / otroNumero;
	
    	alert(" dividir es " + dividir );

}

