/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero = parseInt(document.getElementById("numeroDividendo").value);
    var numero2 = parseInt(document.getElementById("numeroDivisor").value);
    alert(numero % numero2);
}
