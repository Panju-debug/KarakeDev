
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
<<<<<<< HEAD
    if(guion==45){}

esMayuscula=function(caracter){
=======
    if(guion==45){
        return true
    }else{
        return false
    }
}
>>>>>>> 701274a7cf78ec34140bae662394ef388791d93b
    

esMayuscula=function(caracter){
    if(caracter>=65 && caracter<=90){
        return true;
    }else{
        return false;
    }

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
<<<<<<< HEAD
}}
=======

}
>>>>>>> 701274a7cf78ec34140bae662394ef388791d93b
