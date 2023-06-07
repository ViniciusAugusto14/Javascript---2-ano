document.getElementById('converter').onclick = Converter
document.getElementById('resetar').onclick = Limpar

function Converter(){
    var celsius = document.getElementById('celsius').value
    var fahrenheit = document.getElementById('farenheit').value

    if(isNaN(celsius) || isNaN(fahrenheit)){
        alert("Digite um valor válido")
        return

    }else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8
    }
    else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32
    }

    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1)
    document.getElementById('farenheit').value = parseFloat(fahrenheit).toFixed(1)
}

function Limpar(){
    document.getElementById('celsius').value = ''
    document.getElementById('farenheit').value = ''
}