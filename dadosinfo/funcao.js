var nome
var email
var num = 0;
saldo= 1000;
var saque =0;

function comretorno(saque){
    saldo= saldo- saque
    return saldo
}
function escrever(quadro){
    info = "Usuario numero" + (++num) + "\n";
    info += "Nome:" + nome + "\n";
    info += "E-mail:" + email + "\n";
    info += "Saldo: " + comretorno(saque) + "\n";
    quadro.value += info;
}
