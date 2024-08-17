
calcularTasaInteres=function(ingresoAnual){
    
    let tasa;
    
    if(ingresoAnual<300000){
        tasa=(ingresoAnual*16)/100;
    }else if(ingresoAnual<300000 && ingresoAnual<500000){
        tasa=(ingresoAnual*15)/100;
    }else if(ingresoAnual<500000 && ingresoAnual<1000000){
        tasa=(ingresoAnual*14)/100;
    }else if(ingresoAnual<1000000 && ingresoAnual<2000000){
        tasa=(ingresoAnual*13)/100;
    }else{
        tasa=(ingresoAnual*12)/100;
    }
    return tasa
}
calcularCapacidadPago= function(edad,ingresos,egresos){
    
    let valorCuota;

    if(edad>50){
        valorCuota=((ingresos-egresos)*30)/100;
    }else if(edad<=50){
        valorCuota=((ingresos-egresos)*40)/100;
    }
    return valorCuota;
}
calcularDescuento=function(precio,cantidad){
    
    let valorDescuento;
    let total;
    let pagar;

    if(cantidad<3){
        total=precio*cantidad
    }else if(cantidad>=3 && cantidad<6){
        pagar=precio*cantidad
        valorDescuento=(pagar*2)/100;
        total= pagar-valorDescuento
    }else if(cantidad>=6 && cantidad<=11){
        pagar=precio*cantidad
        valorDescuento=(pagar*3)/100;
        total= pagar-valorDescuento
    }else if (cantidad>=12) {
        pagar=precio*cantidad
        valorDescuento=(pagar*4)/100;
        total= pagar-valorDescuento
    }
    return total;
}   
determinarColesterolLDL=function(nivelColesterol){
    
    let nivel;
     
    if(nivelColesterol<100){
        nivel="Optimo para su salud"
    }else if(nivelColesterol>=100 && nivelColesterol<130){
        nivel="Casi optimo para su salud"
    }else if(nivelColesterol>=130 && nivelColesterol<160){
        nivel="Limite superior al rango normal"
    }else if(nivelColesterol>=160 && nivelColesterol<190){
        nivel="Su nivel de colesterol es alto"
    }else if(nivelColesterol>=190){
        nivel="Su nivel de colesterol es muy alto"
    }
    return nivel    
}
validarClave=function(clave){
    let tamanio;

    tamanio=clave.length;
    if (tamanio>=8 && tamanio<=16){
        tamanio=true;
    }else{
        tamanio=false;
    }
    return tamanio;
}
esMayuscula=function(caracter){
    let mayuscula;

    
    mayuscula=caracter.charCodeAt(0);
    if(mayuscula>=65 && mayuscula<=90){
        mayuscula=true;
    }else{
        mayuscula=false;
    }
    return mayuscula;
}
esMinuscula=function(caracter){
    let minuscula;

    
    minuscula=caracter.charCodeAt(0);
    if(minuscula>=97 && minuscula<=122){
        minuscula=true;
    }else{
        minuscula=false;
    }
    return minuscula;
}
esDigito= function(caracter){
    let digito;

    digito= caracter.charCodeAt(0);
    if(digito>=48  && digito<=57){
        return true;
    }else{
        return false;
    }
}
darPersmiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80 ){
        return true;
    }else{
        return false;
    }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica>90||notaFisica>90||notaGeometria>90){
        if(notaMatematica<notaFisica){
            return true;
        }  
        else{
            return false;
        }
    }
    }