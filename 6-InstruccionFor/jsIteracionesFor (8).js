function mostrar()
{ var num = prompt("Ingrese un numero primo");
num= parseInt(num);
cont=0
for(i=2;i<num;i++);

if ( num%i==0){
    cont++
}if(cont>2){
    alert("es primo");
}
else {
    alert("no es primo");
}
    




}//FIN DE LA FUNCIÓN