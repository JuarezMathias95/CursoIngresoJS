/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    alert(numero + numero2);
}  

function restar()
{
	var numero = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    alert(numero - numero2);
}

function multiplicar()
{ 
	var numero = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    alert(numero * numero2);
}

function dividir()
{
	var numero = parseInt(document.getElementById("numeroUno").value);
    var numero2 = parseInt(document.getElementById("numeroDos").value);
    alert(numero / numero2);
}

