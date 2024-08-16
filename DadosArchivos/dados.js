jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    
    if(aleatorio>3){
        console.log("ES MAYOR A 3")
        console.log("GANASTE")
    }else{
        console.log("ES MENOR A 3")
        console.log("PERDISTE")
    }

}




lanzarDado= function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;

   aleatorio= Math.random();
   numeroMultiplicado= aleatorio*6;
   numeroEntero= parseInt(numeroMultiplicado);
   valorDado= numeroEntero+1;
   return valorDado;
}