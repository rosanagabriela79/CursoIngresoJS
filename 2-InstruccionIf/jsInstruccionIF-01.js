function mostrar()
{
	var distancia;
	var tiempo;
	var velocidadKmh;

	distancia =prompt("distancia");
	distancia= parseInt(distancia);
	tiempo =prompt("tiempo");
	tiempo =parseInt(tiempo);
	velocidadKmh = distancia/tiempo;

	if(velocidadKm<=60)
	{
		alert(" Muy lento ");
	}
	else
	{
		if(velocidadKmh>=130)
		{
			alert(" Eso no se hace ");
		}
		else
		{
		if(velocidadKmh<120)
		{
			alert(" Ahi de la ley ");
		}
		else
		{
			if(velocidad<=100)
			{
				alert(" Buen ritmo ");
			}
			}
		}
	}
	
}//FIN DE LA FUNCIÓN
	
	