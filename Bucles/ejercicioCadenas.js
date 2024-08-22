ejecutarPrueba1=function(){
  let mensaje;

  mensaje=recuperarTexto("txtCadena");
  recorrerCadena(mensaje);
  invertirCadena(mensaje);
}
ejecutarPrueba2=function(){
  let mensaje;

  mensaje=recuperarTexto("txtCadena");
  invertirCadena(mensaje);
}

recorrerCadena = function (cadena) {
    let caracter;

  for (let posicion = 0; posicion <= cadena.length-1; posicion++) {
    caracter=cadena.charAt(posicion);   
    console.log("caracter: "+caracter+" posicion "+posicion)
  }     
}

invertirCadena=function(cadenaInversa){
  let inversa=cadenaInversa.length-1;
  let concatenar="";
  

  for(let posicion=inversa;posicion<=inversa&& posicion>=0;posicion--){
    caracter=cadenaInversa.charAt(posicion);  
    concatenar+=caracter
  }
  cambiarTexto("mostrarInverso",concatenar)
}

buscarLetra=function(cadena,letra){
  let letraIterada;
  let existeLetra=false;

  for(let i=0;cadena.length;i++){
    letraIterada=cadena.charAt(i);
   if(letraIterada==letra){
    existeLetra==true;
   }
  }
  if(existeLetra==true){
    return true;
  }else{
    return true;
  }
}

contarMayusculas=function(cadena){
  let letra;
  let contadorMayusculas=0;

  for(let i=0;cadena.length;i++){
    letra=cadena.charAt(i);
    if(esMayuscula(letra)){
      contadorMayusculas++;
    }
  }
}