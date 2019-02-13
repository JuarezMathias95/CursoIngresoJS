function mostrar()
{
//tomo la edad  
    var laHora = document.getElementById('hora').value;
        switch(laHora){
        case "7":
        case "8":
        case "9":
        case "10":
        alert("Es de mañana");
        break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        alert ("Es tarde");
        break;
        case "20":
        case "21":
        case "22":
        case "23":
        alert ("Es de noche");
        break;
        default:
        alert("La hora no existe");
        break;










}


}//FIN DE LA FUNCIÓN