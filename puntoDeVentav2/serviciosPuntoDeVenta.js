


calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let subtotalSinDescuento;

    if(cantidad<3){
        subtotalSinDescuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        subtotalSinDescuento=(subtotal*cantidad*3)/100;
    }else if(cantidad>=6 && cantidad<=11){
        subtotalSinDescuento=(subtotal*cantidad*4)/100;
    }else if(cantidad>=12){
        subtotalSinDescuento=(subtotal*cantidad*5)/100;
    }
    return subtotalSinDescuento
}