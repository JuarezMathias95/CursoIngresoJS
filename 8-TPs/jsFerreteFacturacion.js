/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioA = parseInt(document.getElementById("PrecioUno").value);
    var precioB = parseInt(document.getElementById("PrecioDos").value);
    var precioC = parseInt(document.getElementById("PrecioTres").value);
    
    alert(precioA+precioB+precioC);
}
function Promedio () 
{
	var precioA = parseInt(document.getElementById("PrecioUno").value);
    var precioB = parseInt(document.getElementById("PrecioDos").value);
    var precioC = parseInt(document.getElementById("PrecioTres").value);

    alert(precioA+precioB+precioC/3);
}
function PrecioFinal () 
{
	var precioA = parseInt(document.getElementById("PrecioUno").value);
    var precioB = parseInt(document.getElementById("PrecioDos").value);
    var precioC = parseInt(document.getElementById("PrecioTres").value);
    var resultado = (precioA+precioB+precioC);

    alert(resultado+(resultado * 21) / 100);
    
}