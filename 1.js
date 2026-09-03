function GradeCheck(score) {
  // escreva seu código aqui
  if(score < 60){
    return "Reprovado"
  } else if (score >= 60 && score <= 89) { // else if (score < 90) da o mesmo
    return "Aprovado"
  } else {
    return "Excelente"
  }
}

console.log(GradeCheck(75));

//"Reprovado" se a nota for menor que 60;
//"Aprovado" se a nota estiver entre 60 e 89;
//"Excelente" se a nota for igual ou maior que 90.