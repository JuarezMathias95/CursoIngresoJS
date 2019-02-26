function mostrar()
{

var cont=0
var clave = prompt(" ingrese el numero clave. ");
while(clave!="utn750"){
    alert("clave incorrecta");
    cont++
    console.log(clave)
    if(cont==3){
        alert("3 intendos fallidos, reintente luego");
        break;
    }
    clave = prompt(" ingrese el numero clave .");
}
if(clave=="utn750"){
    alert("Acceso correcto");
}

}//FIN DE LA FUNCIÓN
