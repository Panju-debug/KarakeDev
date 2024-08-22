//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

esMayuscula = function (palabra) {
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

guardarPalabra = function () {
  let palabra;
  let mayuscula;

  palabra = recuperarTexto("txtSecreta");
  if (palabra.length == 5) {
    mayuscula = esMayuscula(palabra);
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
        caracter=palabraSecreta.charAt(i)
        if(caracter==letra){
            letrasEncontradas++;
            mostrarLetra(letra,i)
        }
    }
}

