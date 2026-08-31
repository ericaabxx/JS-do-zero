const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

form.addEventListener("submit", (e) => {
    const nome = form.inMedicamento.value
    const preco = Number(form.inPreco.value)

    const soma = preco * 2
    const desconto = Math.floor(soma)

    resp1.innerText = `Promoçao de ${nome}`
    resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`
    e.preventDefault()
})