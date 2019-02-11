function mostrar()
{
      var edadId = parseInt(document.getElementById("edad").value);
        if(edadId >=18)
        { 
          alert("usted es mayor de edad");
         }
     else 
    {
        if(edadId >= 13 && edadId <= 17)
    {
        alert("usted es un adolescente");
    } 
    else
    {
        alert("usted es un niño");   
    }
    }
}