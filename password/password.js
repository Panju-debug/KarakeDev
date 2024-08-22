

ejecutarValidacion=function(){
    let recuperado;
    let valido;

    recuperado=recuperarTexto("lblPassword");
    valido=validarPassword(recuperado);
    if(valido==""){
        mostrarTexto("txtValido","PASSWORD CORRECTO");
    }else{
        mostrarTexto("txtValido",valido)
    }
}

validarPassword=function(password){
    let noMayuscula=0;
    let noCaracter=0;
    let noDigito=0;
    let errores="";

    if(password.length<8){
        errores="La contraseña debe tener minimo 8 caracteres"
        return errores;
    }else if(password.length>16){
        errores="La contraseña debe tener máximo 16 caracteres"
        return errores;
    }else if(password.length>=8 && password.length<=16){
        for(i=0;i<=password.length-1;i++){
            let mayuscula=password.charCodeAt(i)
            if(mayuscula>=65 && mayuscula<=90 ){
                noMayuscula++;
            }if(mayuscula==45 || mayuscula==42 || mayuscula==95){
                noCaracter++;
            }if(mayuscula>=48 && mayuscula<=57){
                noDigito++;
            }
        }
        if(noMayuscula==0){
            errores=" Debe tener al menos una mayuscula "
        }if(noCaracter==0){
            errores=errores+" Debe tener al menos un caracter especial "
        }if(noDigito==0){
            errores=errores+" Debe tener al menos un digito "
        }return errores;
    }
    
}   