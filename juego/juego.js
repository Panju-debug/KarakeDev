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
        mostrarTexto("txtGanador","GANASTE LA PARTIDA");
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("lblUsuario","TU PUNTAJE: "+puntosUsuario);
        if(puntosUsuario==5){
            mostrarTexto("txtGanador","HAS GANADO EL JUEGO!!")
        }
    }if(ganador==2){
        mostrarTexto("txtGanador","PERDISTE LA PARTIDA");
        puntosComputador=puntosComputador+1;
        mostrarTexto("lblComputadora","PUNTAJE COMPUTADOR: " + puntosComputador);
    }
}