function mostrar()
{
	var randomNumber = Math.floor(Math.random()* ((11 - 1 )) + 1);
		if(randomNumber>=9)
		{
			alert(randomNumber+"="+"Excelente");
		}
		else
		{
		if(randomNumber>=4 && randomNumber<=8)
		{
			alert(randomNumber+"="+"Aprobo");	
		}
		else
		{
			alert(randomNumber +"="+"Vamos la proxima se puede");
		}
		}
}