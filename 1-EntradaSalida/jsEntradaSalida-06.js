/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;
	
	numero1 = document.getElementById("txtIdNumeroUno") . value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos") . value;
	numero2 = parseInt(numero2);
	resultado = numero1 + numero2;
	
    	alert("La suma es " + resultado);



 // let x = " 20"   
 //x = parseInt(x); ejecuta lo que esta a la derecha en primera medida. ej: "20"
}

