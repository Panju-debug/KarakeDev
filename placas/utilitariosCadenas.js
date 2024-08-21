esMayuscula = function (caracter,posicion) {
    let mayuscula;
    mayuscula = caracter.charCodeAt(posicion);
    if (mayuscula >= 65 && mayuscula <= 90) {
       return true
    } else {
        mayuscula = false;
    }
}

esDigito = function (caracter) {
    let digito;

    digito = caracter.charCodeAt(0);
    if (digito >= 48 && digito <= 57) {
        return true;
    } else {
        return false;
    }
}

esGuion=function(caracter){
    let guion;

    guion=caracter.charCodeAt(0);
    if(guion==45){
        return true;
    }else{
        return false;
    }
}