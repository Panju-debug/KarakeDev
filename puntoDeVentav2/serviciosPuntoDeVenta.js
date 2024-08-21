calcularDescuentoPorVolumen = function (subtotal, cantidad) {
  let descuento;

  if (cantidad < 3) {
    descuento=0;
  } else if (cantidad >= 3 && cantidad <= 5) {
    descuento = (subtotal * 3) / 100;
  } else if (cantidad >= 6 && cantidad <= 11) {
    descuento = (subtotal * 4) / 100;
  } else if(cantidad>=12){
    descuento = (subtotal * 5) / 100;
  }
  return descuento;
}
