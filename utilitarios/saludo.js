saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");
    let edad= recuperarInt("txtEdad");
    let estatura= recuperarFloat ("txtEstatura");
    let mensajeBienvenida="Bienvenido " + nombre + " " + apellido;   

    mostrarTexto("lblResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo","./Imagenes/main-qimg-8b9d64dd7a997f9c55116b167429a478.webp")
    mostrarTextoEnCaja("txtNombre", " ");
    
}

