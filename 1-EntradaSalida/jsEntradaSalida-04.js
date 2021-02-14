/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var descripcion;
	var precio;
	var aumento;
	var preciofinal;

	descripcion = document.getElementById("descripcion").value;
	precio = prompt(precio);
	precio = parseInt(precio);

	aumento = precio*30/100;
	aumento = parseFloat(aumento);
	console.log("aumento ", precio);
    preciofinal = precio + aumento;
	preciofinal = parseFloat(preciofinal);
	console.log("preciofinal",preciofinal);
	
    
	alert(" El precio del producto de un 30% es " + preciofinal );
 
	

}

