/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ var numero = document.getElementById("numeroUno").value;
  var numero2 = document.getElementById("numeroDos").value;
  var numeroa = parseInt(numero);
  var numerob =  parseInt(numero2);
  alert(numeroa + numerob);
}

