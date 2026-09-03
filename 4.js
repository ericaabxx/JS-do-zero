function ShippingCost(value, isMember) {
  if (value >= 150 || (isMember === true && value >= 80)) { // juntar tudo com o or 
    // Se a compra for de pelo menos 150 ou se for membro e gastar pelo menos 80, o frete será grátis.
    return "Frete grátis";
  } else {
    return "Frete: R$ 15";
  }
}
console.log(ShippingCost(90, true));