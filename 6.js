// Exemplo de encadeamento
const nota = 8;
const conceito = nota >= 9 ? "A" : nota >= 7 ? "B" : nota >= 5 ? "C" : "D";


/*1. Classificação de Compra

A função PurchaseLevel(value, isMember) deve receber o valor da compra e informar a classificação:

"VIP" se o valor for maior ou igual a 300 e o cliente for membro
"Premium" se o valor for maior ou igual a 200
"Comum" se o valor for menor que 200 */

function PurchaseLevel(value, isMember) {

  const classificacao = value >= 300 && isMember === true ? "VIP" 
  : value >= 200 ? "Premium" 
  : "Comum"

  return classificacao

}

console.log(PurchaseLevel(320, true));

/*2. Verifica Faixa de Idade

A função AgeGroup(age) deve retornar:

"Crianca" se idade for menor que 12
"Adolescente" se estiver entre 12 e 17
"Adulto" se estiver entre 18 e 59
"Idoso" se tiver 60 ou mais */

function AgeGroup(age) {

  const idade = age < 12
    ? "Criança"
    : age < 18
    ? "Adolescente"
    : age < 60
    ? "Adulto"
    : "Idoso"

  return idade
}

console.log(AgeGroup(25))

/*3. Desconto por Quantidade

A função QuantityDiscount(price, quantity) deve calcular o total da compra.

Regras:

10% de desconto se comprar 5 ou mais unidades
20% de desconto se comprar 10 ou mais unidades
sem desconto se comprar menos de 5

Retorne o valor final. */

function QuantityDiscount(price, quantity) {

  const preco = price * quantity

  const dez = preco - (preco * 0.10)
  const vinte = preco - (preco * 0.20)

  if(quantity >= 10){
    return dez
  } else if(quantity >= 5){
    return vinte
  } else {
    return "sem desconto"
  }

}

console.log(QuantityDiscount(20, 12));

/*4. Aprovação com Frequência

A função StudentStatus(score, attendance) deve retornar:

"Aprovado" se a frequência for pelo menos 75 e a nota for maior ou igual a 7
"Recuperacao" se a frequência for pelo menos 75 e a nota estiver entre 5 e 6.9
"Reprovado" se a frequência for menor que 75
"Reprovado" se a nota for menor que 5 */

function StudentStatus(score, attendance) {

  if (attendance >= 75 && score >=7){
    return "Aprovado"
  } else if(attendance >=75 && score >= 5){
    return "Recuperacao"
  } else {
    return "reprovado"
  }

}

console.log(StudentStatus(6, 80));

/*5. Frete por Região

A função ShippingPrice(value, region) deve retornar:

"Frete Gratis" se a compra for maior ou igual a 200
10 se a região for "Sul"
20 se a região for "Sudeste"
30 para qualquer outra região */

function ShippingPrice(value, region) {

  if(value>= 200){
    return "Frete Gratis"
  } else if (region === "Sul"){
    return 10
  } else if (region === "Sudeste"){
    return 20
  } else {
    return 30
  }

}

console.log(ShippingPrice(150, "Sul"));

/*6. Número Especial

A função SpecialNumber(num) deve retornar:

"Especial" se o número for múltiplo de 3 e de 5
"Par" se não for especial, mas for par
"Multiplo de 3" se for apenas múltiplo de 3
"Multiplo de 5" se for apenas múltiplo de 5
"Comum" caso contrário */

function SpecialNumber(num) {
  
  const especial = num % 3 === 0 && num % 5 === 0

 if(especial){
  return "Especial"
 } else if ( num % 2 === 0 ){
  return "Par"
 }else if (num % 3 === 0){
  return "Multiplo de 3"
 } else if (num % 5 === 0){
  return "Multiplo de 5"
 } else {
  return "Comun"
 }

}

console.log(SpecialNumber(30));

/*7. Categoria de Salário

A função SalaryCategory(salary, years) deve retornar:

"Senior" se o salário for maior que 5000 e tiver 5 anos ou mais de empresa
"Pleno" se o salário for maior que 3000
"Junior" caso contrário */

function SalaryCategory(salary, years) {

  if(salary >= 5000 && years >= 5){
    return "Senior"
  } else if (salary >= 3000){
    return "Pleno"
  } else {
    return "Junior"
  }

}

console.log(SalaryCategory(5500, 6));

/*8. Sistema de Login

A função LoginCheck(user, password, active) deve retornar:

"Conta Inativa" se active for falso
"Acesso Permitido" se usuário for "admin" e senha for "1234"
"Senha Incorreta" se o usuário for "admin" mas a senha estiver errada
"Usuario Invalido" nos demais casos */

function LoginCheck(user, password, active) {

  // seu código aqui

}

console.log(LoginCheck("admin", "1234", true));

/*9. Faixa de Temperatura com Alerta

A função TemperatureCheck(temp, raining) deve retornar:

"Frio e Chuvoso" se temperatura for menor que 15 e estiver chovendo
"Frio" se temperatura for menor que 15
"Agradavel" se estiver entre 15 e 25
"Quente" se for maior que 25 e não estiver chovendo
"Quente e Chuvoso" se for maior que 25 e estiver chovendo*/

function TemperatureCheck(temp, raining) {

  // seu código aqui

}

console.log(TemperatureCheck(28, true));
/*10. Bônus de Funcionário

A função EmployeeBonus(salary, years, performance) deve calcular e retornar o salário final.

Regras:

20% de bônus se tiver 5 anos ou mais e performance "alta"
10% se tiver 3 anos ou mais
5% se performance for "alta"
sem bônus nos demais casos */

function EmployeeBonus(salary, years, performance) {

  // seu código aqui

}

console.log(EmployeeBonus(3000, 6, "alta"));