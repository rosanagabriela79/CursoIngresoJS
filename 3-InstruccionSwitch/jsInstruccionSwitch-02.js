function mostrar()
{
	
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert(" Falta para el invierno ");
			break;
		case "Julio":
		case "Agosto":
			alert(" Abrigate que hace frio ");
			break;
		default:
			alert(" Ya paso el frio, ahora calor!! ");
			break
	}
	
}