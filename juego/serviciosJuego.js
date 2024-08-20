obtenerAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let random;

   aleatorio= Math.random();
   numeroMultiplicado= aleatorio*3;
   numeroEntero= parseInt(numeroMultiplicado);
   random= numeroEntero+1;
    return random;
}
generarElemento=function(){
    let juego=obtenerAleatorio();
    
    if(juego==1){   
        return "Piedra"
    }else if(juego==2){   
        return "Papel"
    }else if(juego==3){   
        return "Tijera"
    }
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1==eleccionJugador2){
        return 0;
    }if(eleccionJugador1=="Papel" && eleccionJugador2=="Piedra"){
        return 1;
    }if(eleccionJugador1=="Tijera" && eleccionJugador2=="Papel"){
        return 1;
    }if(eleccionJugador1=="Piedra" && eleccionJugador2=="Tijera"){
        return 1;
    }if(eleccionJugador2=="Papel" && eleccionJugador1=="Piedra"){
        return 2;
    }if(eleccionJugador2=="Tijera" && eleccionJugador1=="Papel"){
        return 2;
    }if(eleccionJugador2=="Piedra" && eleccionJugador1=="Tijera"){
        return 2;
    }
}
generarRuta=function(nombre){
    if(nombre=="Papel"){
        return "./imagenes/papel.jpg"
    }if(nombre=="Piedra"){
        return "./imagenes/piedra.jpg"
    }if(nombre=="Tijera"){
        return "./imagenes/tijera1.png"
    }
}
