function ParityCheck(num) {

  if( num % 2 == 0) {
    return"Par"
  } else {
    return "Impar"
  }

}

console.log(ParityCheck(5));


function SpeedCheck(permitida, velocidade) {

    const leve = permitida + (permitida * 0.20)


  if(velocidade <= permitida){
    return "Sem Multa"
  } else if(velocidade <= leve){
    return "Multa Leve"
  } else {
    return "Multa Grave"
  }

}

console.log(SpeedCheck(80, 90));


function CheckNums(num1, num2) {

  //  const primeiro = num1 > num2 ? "Primeiro" : "Segundo"
  if(num1 > num2) {
    return "Primeiro"
  } else if (num1 === num2) {
    return "Iguais"
  } else {
    return "Segundo"
  }

}

console.log(CheckNums(10, 20));

function TriangleType(a, b, c) {

  if(a === b && b === c){
    return "Equilatero"
  } else if(a === b || b === c || c === a){
    return "Isosceles"
  } else {
    return "Escaleno"
  }

}

console.log(TriangleType(5, 5, 3));

////////////////////////////////////////////////

function Discount(value) {

    const desconto = value - (value * 0.10)

    if(value >= 200){
        return desconto
    } else {
        return value
    }
    
}

console.log(Discount(250));


function ShippingCost(value, isMember) {

  if(value >= 150 || isMember === true && value >= 80){
    return "Frete Grátis"
  } else{
    return 15
  }

}

console.log(ShippingCost(90, true));


function MultipleCheck(num) {

  if(num % 3 === 0 && num % 5 === 0){
    return "Ambos"
  } else if (num % 3 === 0){
    return "Três"
  } else if (num % 5 === 0){
    return "Cinco"
  } else {
    return "Nenhum"
  }

}

console.log(MultipleCheck(15));