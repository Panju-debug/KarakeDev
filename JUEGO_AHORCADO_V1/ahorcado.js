//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;

esMayusculaCadena = function (palabra) {
  let code;
  let mayuscula=0;
  let letra;

  for (i = 0; i < palabra.length; i++) {
    
    code = palabra.charCodeAt(i);
    letra=palabra.charAt(i)
    if (code >= 65 && code <= 90) {
      mayuscula++;
    }
  }
  if (mayuscula == 5) {
    return true;
  } else {
    return false;
  }
};

EsMayusculaLetra = function (palabra) {
    let code;
    let mayuscula=0;
    let letra;
  
    for (i = 0; i < palabra.length; i++) {
      
      code = palabra.charCodeAt(i);
      letra=palabra.charAt(i)
      if (code >= 65 && code <= 90) {
        mayuscula++;
      }
    }
    if (mayuscula == 1) {
      return true;
    } else {
      return false;
    }
  };

guardarPalabra = function () {
  let palabra;
  let mayuscula;

  palabra = recuperarTexto("txtSecreta");
  if (palabra.length == 5) {
    mayuscula = esMayusculaCadena(palabra);
    if (mayuscula == false) {
      alert(" DEBE INGRESAR UNA PALABRA CON 5 LETRAS MAYUSCULAS");
    } else {
      palabraSecreta = palabra;
    }
  }
};

mostrarLetra=function(letra,posicion){
    if(posicion==0){
        mostrarTexto("div0",letra);
    }if(posicion==1){
        mostrarTexto("div1",letra);
    }if(posicion==2){
        mostrarTexto("div2",letra);
    }if(posicion==3){
        mostrarTexto("div3",letra);
    }if(posicion==4){
        mostrarTexto("div4",letra);
    }
}

validar=function(letra){
    let letrasEncontradas=0;
    let  caracter;

    for(i=0;i<palabraSecreta.length;i++){
        caracter=palabraSecreta.charAt(i);
        if(caracter==letra){
            
            letrasEncontradas++;
            coincidencias++;
            mostrarLetra(letra,i)
            if(coincidencias==5){
                mostrarImagen("ahorcadoImagen","ganador.gif");
            }
        }
    }if(letrasEncontradas==0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA")
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra=function(){
    let letra;
    let mayus;

    letra=recuperarTexto("txtLetra");
    mayus=EsMayusculaLetra(letra)
    intentos++;
    if(intentos==10){
        mostrarImagen("ahorcadoImagen","gameOver.gif");
    }if(mayus==true){
        validar(letra);
    }if(mayus==false){
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    } 
    }

mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }if(errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }if(errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }if(errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }if(errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }if(errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }if(errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }if(errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }if(errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
}



