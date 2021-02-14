function mostrar()
{   
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>17)
	{ 
		alert(" Es mayor de edad ");
	}
	else
	{
		if(edad<13)
		{
			alert(" Es niño");
		}
		else
		{
			alert(" Es adolescente");
		}
		
	}
}
	
	


