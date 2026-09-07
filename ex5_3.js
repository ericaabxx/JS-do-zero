let num 


do {
    num = Number(prompt("Numero: "))
    if(num === 0 || isNaN(num)){ // se o numero for zero ou nao for um numero repete o alerta
        alert("Digite um numero valido")
    }
} while (num == 0 || isNaN(num)) // repete a pergunta enquanto o valor continuar invalido
    let pares = `Pares entre 1 e ${num}: `
    for (let i =2; i <= num; i = i +2) { // quando digitar um numero valido ele faz o loop
        pares = pares + i + ", "
    }
    alert(pares)