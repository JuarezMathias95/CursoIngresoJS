function mostrar()
{

var CantidadDeAmigos
var Monto
var ValorTotal
var Propina
var CuentaAbonar
var PrecioPorPersona

var CantidadDeAmigos = prompt("Ingrese la cantidad de amigos");
CantidaDeAmigos = parseInt(CantidadDeAmigos);
var Monto = prompt("Ingrese monto abonar");
Monto = parseInt(Monto);
var ValorTotal = Monto + (Monto * 21 ) / 100;
ValorTotal = parseInt(ValorTotal);
var Propina = (ValorTotal * 10) / 100;
Propina = parseInt(Propina);
var CuentaAbonar = ValorTotal + Propina;
CuentaAbonar = parseInt(CuentaAbonar);
var PrecioPorPersona = CuentaAbonar / CantidadDeAmigos;
PrecioPorPersona =  parseInt(PrecioPorPersona);
alert(" El monto abonar por cada uno es " + PrecioPorPersona );

}
