//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

esMayuscula = function (palabra) {
  let code;
  let mayuscula=0;

  for (i = 0; i < palabra.length; i++) {
    code = palabra.charCodeAt(i);
    //p 76
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
    /*
     * Verificar si es mayuscula - esMayuscula -> true o false para uncarater
     * Realizar un bucle que recorra toda la cadena
     * Tener un if para verificar si es mayuscula(palabra.chatCode(i))
     * SI es mayuscula pasa, caso contrario no paso?
     * SonMayus -> false -  verificar que toda la cadena es mayuscula
     * Cuando SonMayus es true deja pasar
     */

  palabra = recuperarTexto("txtSecreta");
  if (palabra.length == 5) {
    mayuscula = esMayuscula(palabra);
    if (mayuscula == false) {
      alert(" DEBE INGRESAR UNA PALABRA CON 5 LETRAS MAYUSCULAS");
    } else {
      palabraSecreta = palabra;
      console.log(palabraSecreta);
    }
  }
};
