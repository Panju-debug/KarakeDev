<<<<<<< HEAD
function validarEstructura(placa) {
    let errores = [];

    // Validar longitud
    if (placa.length !== 7 && placa.length !== 8) {
        errores.push("La placa debe tener 7 u 8 caracteres.");
    }

   
    if (!placa[0] || !/[A-Z]/.test(placa[0])) {
        errores.push("El primer carácter debe ser una letra mayúscula.");
    }
    if (!placa[1] || !/[A-Z]/.test(placa[1])) {
        errores.push("El segundo carácter debe ser una letra mayúscula.");
    }
    if (!placa[2] || !/[A-Z]/.test(placa[2])) {
        errores.push("El tercer carácter debe ser una letra mayúscula.");
    }

 
    if (!placa[3] || placa[3] !== '-') {
        errores.push("El cuarto carácter debe ser un guion (-).");
    }

  
    if (!placa[4] || !/[0-9]/.test(placa[4])) {
        errores.push("El quinto carácter debe ser un dígito.");
    }
    if (!placa[5] || !/[0-9]/.test(placa[5])) {
        errores.push("El sexto carácter debe ser un dígito.");
    }
    if (!placa[6] || !/[0-9]/.test(placa[6])) {
        errores.push("El séptimo carácter debe ser un dígito.");
    }

    if (placa.length === 8 && (!placa[7] || !/[0-9]/.test(placa[7]))) {
        errores.push("El octavo carácter, si existe, debe ser un dígito.");
    }

    
    if (errores.length > 0) {
        return errores.join(" ");
    }

    return null;
=======
validarEstructura = function (placa) {
  let longitudPlaca = placa.length;
  let codigoCaracter;
  let error = "";

  if (longitudPlaca == 8 || longitudPlaca == 7) {
    codigoCaracter = placa.charCodeAt(0);
    let esMayus = esMayuscula(codigoCaracter);
    if (esMayus == false) {
      error = "El primer caracter debe ser una letra mayuscula";
    }
    codigoCaracter = placa.charCodeAt(1);
    let esMayus2 = esMayuscula(codigoCaracter);
    if (esMayus2 == false) {
      error = error + " " + "El segundo caracter debe ser una letra mayuscula";
    }
    codigoCaracter = placa.charCodeAt(2);
    let esMayus3 = esMayuscula(codigoCaracter);
    if (esMayus3 == false) {
      error = error + " " + "El tercer caracter debe ser una letra mayuscula";
    }
    codigoCaracter = placa.charCodeAt(3);
    let guion = EsGuion(codigoCaracter);
    if (guion == false) {
      error = error + " " + "El cuarto caracter debe ser un guion";
    }
    codigoCaracter = placa.charCodeAt(4);
    let digito = EsDigito(codigoCaracter);
    if (digito == false) {
      error = error + " " + "El quinto caracter debe ser un digito";
    }
    codigoCaracter = placa.charCodeAt(5);
    let digito1 = EsDigito(codigoCaracter);
    if (digito1 == false) {
      error = error + " " + "El sexto caracter debe ser un digito";
    }
    codigoCaracter = placa.charCodeAt(6);
    let digito2 = EsDigito(codigoCaracter);
    if (digito2 == false) {
      error = error + " " + "El septimo caracter debe ser un digito";
    }
    if (longitudPlaca == 8) {
      codigoCaracter = placa.charCodeAt(7);
      let digito3 = EsDigito(codigoCaracter);
      if (digito3 == false) {
        error = error + " " + "El octavo caracter debe ser un digito";
      }
    }
    if (error == "") {
      return null;
    }else{
        return error
    }
  } else {
    return (error = "La placa debe tener 7 u 8 caracteres");
  }
};

obtenerProvincia=function(placa){
let letraProvincia


    letraProvincia=placa.charAt(0)
    if(letraProvincia=="A"){
      return "Azuay"
    }else if(letraProvincia=="B"){
      return "Bolívar"
    }else if(letraProvincia=="U"){
      return "Cañar"
    }else if(letraProvincia=="X"){
      return "Cotopaxi"
    }else if(letraProvincia=="H"){
      return "Chimborazo"
    }else if(letraProvincia=="O"){
      return "El Oro"
    }else if(letraProvincia=="E"){
      return "Esmeraldas"
    }else if(letraProvincia=="W"){
      return "Galápagos"
    }else if(letraProvincia=="G"){
      return "Guayas"
    }else if(letraProvincia=="I"){
      return "Imbabura"
    }else if(letraProvincia=="L"){
      return "Loja"
    }else if(letraProvincia=="R"){
      return "Los Ríos"
    }else if(letraProvincia=="M"){
      return "Manabí"
    }else if(letraProvincia=="V"){
      return "Morona Santiago"
    }else if(letraProvincia=="N"){
      return "Napo"
    }else if(letraProvincia=="S"){
      return "Pastaza"
    }else if(letraProvincia=="P"){
      return "Pichincha"
    }else if(letraProvincia=="K"){
      return "Sucumbios"
    }else if(letraProvincia=="Q"){
      return "Orellana"
    }else if(letraProvincia=="T"){
      return "Tungurahua"
    }else if(letraProvincia=="Z"){
      return "Zamora Chinchipe"
    }else if(letraProvincia=="Y"){
      return "Santa Elena"
    }else{
      return null;
    }
}
obtenerTipoVehiculo=function(placa){
  let letraVehiculo;
  letraVehiculo=placa.charAt(1);
if(letraVehiculo=="A" || letraVehiculo=="Z"){
  return "Comercial";
}else if(letraVehiculo=="E"){
  return "Gubernamental";
}else if(letraVehiculo=="X"){
  return "Vehiculo de uso oficial";
}else if(letraVehiculo=="S"){
  return "Vehiculo del gobierno provincial";
}else if(letraVehiculo=="M"){
  return "Municipal";
}else if(letraVehiculo=="B"){
  return "Particular";
}else{
  return null;
}
}
obtenerDiaPicoYPlaca=function(placa){
  let placaLongitud;
  let picoPlaca

  placaLongitud=placa.length;
  picoPlaca=placa.charAt(placaLongitud-1)
  if(picoPlaca==1 || picoPlaca==2){
    return "Lunes"
  }if(picoPlaca==3 || picoPlaca==4){
    return "Martes"
  }if(picoPlaca==5 || picoPlaca==6){
    return "Miercoles"
  }if(picoPlaca==7 || picoPlaca==8){
    return "Jueves"
  }if(picoPlaca==9 || picoPlaca==10){
    return "Viernes"
  }
>>>>>>> ecba08b5ce2b68be4ad1fd133aa51cadc8f6ef38
}