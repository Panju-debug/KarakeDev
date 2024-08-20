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
}