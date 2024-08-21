<<<<<<< HEAD
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
=======
esMayuscula=function(caracter){
    

    if(caracter>=65 && caracter<=90){
>>>>>>> ecba08b5ce2b68be4ad1fd133aa51cadc8f6ef38
        return true;
    }else{
        return false;
    }
<<<<<<< HEAD
=======
}

EsDigito= function(caracter){
    if(caracter>=48  && caracter<=57){  
        return true;
    }else{
        return false;
    }
}

EsGuion=function(caracter){
    if (caracter==45){
        return true
    }else{
        return false
    }
}
EsDigito1=function(caracter){
    if(caracter==null){
        return true
    }else{
        return false
    }
>>>>>>> ecba08b5ce2b68be4ad1fd133aa51cadc8f6ef38
}