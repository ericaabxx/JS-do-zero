// Mostra um alerta inicial explicando como sair do programa
alert("Digite 0 para sair")

// Inicia um loop.
// Como a condição no final é sempre verdadeira,
// o loop continuará repetindo até encontrar um break.
do {

    // Pede um valor ao usuário e transforma o texto digitado em número
    const num = Number(prompt("Número: "))

    // Verifica se o usuário digitou 0 ou algo que não seja um número
    if (num === 0 || isNaN(num)) {

        // Abre uma caixa de confirmação.
        // OK retorna true e Cancelar retorna false.
        const sair = confirm("Confirma saída?")

        if (sair) {
            // Encerra imediatamente o loop do...while
            break
        } else {
            // Interrompe somente esta repetição
            // e volta para o começo do loop
            continue
        }
    }

    // O operador % retorna o resto de uma divisão.
    // Se o resto da divisão por 2 for zero, o número é par.
    if (num % 2 === 0) {

        // Se o número for par, mostra o seu dobro
        alert(`O dobro de ${num} é: ${num * 2}`)

    } else {

        // Se não for par, o número é ímpar.
        // Nesse caso, mostra o seu triplo.
        alert(`O triplo de ${num} é: ${num * 3}`)
    }

// true é sempre verdadeiro.
// Por isso, o loop somente termina quando o break é executado.
} while (true)

// Este alerta somente é executado depois que o loop termina
alert("Bye bye...")

/*
Digita 4 → é par → mostra o dobro → repete
Digita 5 → é ímpar → mostra o triplo → repete
Digita 0 → pergunta se deseja sair
          ├─ OK → break → encerra o loop
          └─ Cancelar → continue → pede outro número */