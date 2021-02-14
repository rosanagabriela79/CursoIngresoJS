/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var apellido;
	var edad;

	nombre = document.getElementById("txtIdNombre").value;
	apellido = document.getElementById("txtIdNombre").value;
	
	edad = document.getElementById("txtIdEdad"). value;

	// lo que esta en "" es literal de cadena, se realiza concatenar, combinamos literal de cadena con variables, nombre y edad.


	alert(" Usted se llama " + nombre + apellido + " y tiene " + edad + " años ");

	// otra forma de realizarlo es con back tick uso de comillas simples del teclado, y dentro del alert. cargar alert(`Usted se llama $ { nombre } y tiene $ { edad } años `);


}

