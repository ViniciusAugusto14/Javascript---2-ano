//se .... if 
function se(n){
    if (n <= 10){
        console.log('Você é criança')
    } else if(n> 11 &&  n < 18){
        console.log('Você é adolescente')
    } else if(n === 65){
        console.log('Você se aposentou')
    } else if(n === 70 || n == 90){
        console.log('Você é idoso')
    } else {
        console.log('nao atende nenhuma das condiçoes')
    }
}
//se(9)

//para ... for
function para(n){
    for(let i=0;i<n;i++)
    if (i == 10){
        console.log("Você é criança")
        break
    } else {
        console.log("nao atende nenhuma das condiçoes")
    }
}
//para(14)

//enquanto ... while
function enquanto(n){
    let i = 0
    while(i<n){
        i++
        if (i == 10){
            console.log("Você é criança")
            break
        } else {
            console.log("nao atende nenhuma das condiçoes")
        }
    }
}
//enquanto(11)

//faça_enquanto ... do qhile
function facaenq(n){
let i = 0
    do{
        i++
        if (i == 10){
            console.log("Você é criança")
            break
        } else {
            console.log("nao atende nenhuma das condiçoes")
        }
     }while(n==10)
    }    
    //facaenq(10)
    
    //repeticao switch case
    function caso(n){
        switch(n){
            case 1: console.log("nao atende nenhuma das condiçoes")
            break
            case 2:console.log('voce escolheu o 2')
            break
            default: console.log('nao atende nenhuma das condiçoes')
        }

    }
    caso(4)