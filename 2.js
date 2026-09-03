function ParityCheck(num) {
  if (num < 0) {
    return "Inválido";
  } else if (num % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(ParityCheck(8));