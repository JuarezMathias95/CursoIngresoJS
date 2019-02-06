/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %  
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldoId = parseInt(document.getElementById("sueldo").value);
    var aumento = sueldoId + (10 * sueldoId) / 100;
    var resultado = document.getElementById("resultado").value = aumento
}
