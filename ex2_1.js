const form = document.querySelector("form") // Seleciona o primeiro <form> do HTML e guarda na variável form.
const resposta = document.querySelector("h3") //Seleciona o primeiro <h3>, onde a resposta será exibida.

form.addEventListener("submit", (e) => { //Fica “escutando” o envio do formulário. Quando isso acontece, executa a função. O e representa o evento de envio.
    const nome = form.inNome.value // Pega o valor digitado no campo que tem name="inNome".
    resposta.innerText = `Olá ${nome}` // Altera o conteúdo do <h3>. Se a pessoa digitou Erica, aparecerá:
    e.preventDefault() //Impede o comportamento padrão do formulário, que seria enviar os dados e recarregar a página.
})