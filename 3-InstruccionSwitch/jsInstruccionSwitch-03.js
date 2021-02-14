function mostrar()
{
	
	var mesDelAño =txtIdMes.value;
	
	switch(mesDelAño) 
	{
		case "Enero":
			alert(" Este mes tiene 30 o más días ");
			break;
		case "Febrero":
			alert(" Este mes no tiene más de 29 días.");
			break;
		default:
			alert(" Este mes tiene 30 o más días");
			break;
	}
	
	
}