
let notas = [7, 5, 8, 4, 9];

let soma = 0;
for( let i = 0; i < notas.length; i++){
    if(notas[i] >= 6){
        soma = soma + notas[i] //Pegue o valor que já está em soma e acrescente a nota atual.
    } 

}
    console.log(soma)
