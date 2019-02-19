
function mostrar()
{   
    var PrimeraMascota = prompt("Ingrese nombre primera mascota");
    PesoPrimeraMascota = parseInt(PesoPrimeraMascota);
    var SegundaMascota = prompt("Ingrese nombre segunda mascota");
    PesoSegundaMascota = parseInt(PesoSegundaMascota);
    var Resultado = (PesoPrimeraMascota + PesoSegundaMascota); 
    alert(" Tenes dos mascotas" + PrimeraMascota + " y " + SegundaMascota + " que pesan " + PesoPrimeraMascota + " y" + PesoSegundaMascota + " La suma de ambos pesajes es " + Resultado);
}
