/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreyapellidodelalumno; // por id.value
	var edaddelalumno; //por prompt


	nombreyapellidodelalumno=document.getElementById("txtIdNombre").value;

	edaddelalumno=prompt("ingrese su edad");

	alert(" Usted se llama " + nombreyapellidodelalumno + " y tiene " + edaddelalumno  + " años "); 

	

}


