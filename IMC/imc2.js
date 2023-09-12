function calcular_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo =(peso/(altura*altura));

    if(calculo<18.5){
        resultado = "Você está magro com essa indice: "+ calculo;
    }
    else if(calculo>=18.5 && calculo<24.9){
        resultado = "Você está normal com essa indice: "+ calculo;
    }
    else if(calculo>=25 && calculo<29.9){
        resultado = "Você está com sobrepeso com essa indice: "+ calculo ;
    }
    else if(calculo>=30 && calculo<39.9){
        resultado = "Você está com obesidade com essa indice: "+ calculo;
    }
    else if(calculo>40){
        resultado = "Você está com obesidade grave com essa indice: "+ calculo;
    }   

    document.getElementById('resul').innerHTML = resultado;
} 
