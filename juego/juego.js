let puntosUsuario=0;
let puntosComputador=0;


jugar=function(seleccionado){
    let generar;
    let ganador;
    let img;

    generar=generarElemento();
    img=generarRuta(generar);
    mostrarImagen("imgCompu",img);
    ganador=determinarGanador(seleccionado,generar);
    if(ganador==0){ 
        mostrarTexto("txtGanador","EMPATE");    
    }if(ganador==1){
        if(puntosUsuario==-1){
            mostrarTexto("txtGanador","REINICIA LA PARTIDA");
        }else{
            mostrarTexto("txtGanador","GANASTE LA PARTIDA");
        }
        
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("lblUsuario","TU PUNTAJE: "+puntosUsuario);
        if(puntosUsuario==5){
            mostrarTexto("txtGanador","HAS GANADO EL JUEGO!!")
            puntosUsuario=-1;
        }
    }if(ganador==2){
        if(puntosComputador==-1){
            mostrarTexto("txtGanador","REINICIA LA PARTIDA");
        }else{
            mostrarTexto("txtGanador","PERDISTE LA PARTIDA");
        }
        puntosComputador=puntosComputador+1;
        mostrarTexto("lblComputadora","PUNTAJE COMPUTADOR: " + puntosComputador);
        if(puntosComputador==5){
            mostrarTexto("txtGanador","HAS PERDIDO EL JUEGO :C")
            puntosComputador=-1;

        }

    }
}

limpiar=function(){
    puntosUsuario=0;
    puntosComputador=0;
    mostrarTexto("txtGanador","");
    mostrarTexto("lblUsuario","TU PUNTAJE: " + puntosUsuario);
    mostrarTexto("lblComputadora","PUNTAJE COMPUTADORA: "+ puntosComputador);
    mostrarImagen("imgCompu","./imagenes/blanco.jpg");
}