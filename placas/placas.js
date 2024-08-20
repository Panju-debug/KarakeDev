validarPlaca=function(){
    let placa;
    let erroresEstructura;
    let provincia;
    let vehiculo
    let diaPicoPlaca;

    placa=recuperarTexto("txtprueba");
    erroresEstructura=validarEstructura(placa)
    if(erroresEstructura==null){
        mostrarTexto("lblEstructura","ESTRUCTURA VALIDA")
        mostrarTexto("lblErrores","");
        
        provincia=obtenerProvincia(placa)
        if(provincia!=null){
            mostrarTexto("txtProvincia","provincia: " + provincia)
        }else{
            mostrarTexto("txtProvincia","Provincia: No encontrada");
        }
        vehiculo=obtenerTipoVehiculo(placa);
        if(vehiculo!=null){
            mostrarTexto("txtVehiculo","Tipo de vehiculo: " + vehiculo);
        }else{
            mostrarTexto("txtVehiculo","Tipo de vehiculo: Incorrecto");
        }
        diaPicoPlaca=obtenerDiaPicoYPlaca(placa);
        if(diaPicoPlaca!=null){
            mostrarTexto("txtPicoPlaca","Pico y Placa: " + diaPicoPlaca);
        }
    }else{  
        mostrarTexto("lblEstructura","ESTRUCTURA NO VALIDA")
        mostrarTexto("lblErrores",erroresEstructura)
        
    }
        
}

limpiar=function(){
        mostrarTextoEnCaja("txtprueba","");
        mostrarTexto("txtProvincia","provincia:")
        mostrarTexto("txtVehiculo","Tipo de vehiculo:")
        mostrarTexto("txtPicoPlaca","Pico y Placa:")
        mostrarTexto("lblEstructura","")
        mostrarTexto("lblErrores","")
}