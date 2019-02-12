function mostrar()
{
 var precio = parseInt(prompt("Ingrese el precio"));
 var descuento = parseInt(prompt("Ingrese el porcentaje de descuento"));
 var cuenta = (precio) -((precio * descuento) / 100);
 var precioFinal = (document.getElementById("elPrecioFinal").value = cuenta);
}
