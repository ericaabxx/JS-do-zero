//media
let notas = [7, 5, 8, 4, 9];

let soma = 0;
let contador = 0;

for( let i = 0; i < notas.length; i++){
    if(notas[i] >= 6){
        contador++
        soma = soma + notas[i] //Pegue o valor que já está em soma e acrescente a nota atual.
    } 

}
    let media = soma / contador
    console.log(media)
