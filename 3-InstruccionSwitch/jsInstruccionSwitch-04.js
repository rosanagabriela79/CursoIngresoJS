function mostrar()
{
	
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert(" Estos meses tienen 31 días ");			
			break;
		case "Febrero":
			alert(" Este mes tiene 28 días ");
			break;
		default:
			alert(" Este mes tiene 30 días ");
			break;
	
	}
	
}