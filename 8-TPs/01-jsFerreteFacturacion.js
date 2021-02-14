/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var PrecioUno;
	var PrecioDos;
    var PrecioTres;
    var suma;

	PrecioUno = document.getElementById("txtIdPrecioUno").value;
    PrecioUno = parseInt (PrecioUno);

	PrecioDos = document.getElementById("txtIdPrecioDos").value;
    PrecioDos = parseInt (PrecioDos);

    PrecioTres = document.getElementById("txtIdPrecioTres"). value;
    PrecioTres = parseInt(PrecioTres);

    suma = PrecioUno + PrecioDos + PrecioTres;
    
     alert(" La suma es " + suma);
	
}
function Promedio () 
{   
    var PrecioUno;
	var PrecioDos;
    var PrecioTres;
    var promedio;
    
	
    PrecioUno = document.getElementById("txtIdPrecioUno").value;
    PrecioUno = parseInt( PrecioUno );
    
	PrecioDos = document.getElementById("txtIdPrecioDos").value;
    PrecioDos = parseInt( PrecioDos);
    
    PrecioTres = document.getElementById("txtIdPrecioTres"). value;
    PrecioTres = parseInt( PrecioTres);
    
    promedio = (PrecioUno + PrecioDos + PrecioTres)/3;

    
    alert(" El promedio es " + promedio);
	
}
function PrecioFinal () 
{  
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var valorIncremento;
    
	
    PrecioUno = document.getElementById("txtIdPrecioUno").value;
    PrecioUno = parseInt( PrecioUno );

    PrecioDos= document.getElementById("txtIdPrecioDos").value;
    PrecioDos = parseInt(PrecioDos);

    PrecioTres= document.getElementById("txtIdPrecioTres"). value;
    PrecioTres = parseInt(PrecioTres);
    
    suma = PrecioUno+PrecioDos+PrecioTres;
    
    valorIncremento = suma*21/100;
    
    resultado = valorIncremento + suma;
    
	
       alert(" El Precio Final es  " + resultado );
        
        
} 
        
        
        
        
        
        
        
        
        
        