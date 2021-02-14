function mostrar()
{
	var peso;
	var altura;
	var IMC = peso/altura*2;

	peso =prompt("Ingrese su peso");
	peso = parseFloat(peso);
	altura =prompt("Ingrese su altura");
	altura =parseFloat(altura);
	IMC = peso/altura*2;

	if(IMC>30)
	{
		alert(" Presenta obesidad severa obesidad II, II o III");
	}
	else
	{ if(IMC==25 && IMC<29)
		{
			alert(" Presenta preobesidad ");
		}
		else
		{
		if(IMC<18.5)
		{
			alert(" Presenta bajo peso ");
		}
		else
		{
			alert(" Su peso es normal");
		}

		}
	}
}//FIN DE LA FUNCIÓN3-con if
/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/
