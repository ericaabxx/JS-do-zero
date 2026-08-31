const form = document.querySelector("form")
const resp1 = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    const valor = Number(form.inValor.value)
    const tempo = Number(form.inTempo.value)

    const blocos = Math.ceil(tempo / 15)
    const pagar = blocos * valor

    resp1.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`
    e.preventDefault()
})