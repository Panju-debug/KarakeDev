calcularPromedioNotas=function(){
    let notaFloat1
    let notaFloat2
    let notaFloat3

    notaFloat1=parseFloat(recuperarTexto("txtNota1"));
    notaFloat2=parseFloat(recuperarTexto("txtNota2"));
    notaFloat3=parseFloat(recuperarTexto("txtNota3"));

    promediofloat=calcularPromedio(notaFloat1,notaFloat2,notaFloat3);
    promedio=promediofloat.toFixed(2);
    
    if(promedio<5 && promedio>0){
        mostrarTexto("lblPromedio",promedio);
        mostrarImagen("img1","./reprobado.jpg.gif");
        mostrarTexto("lblResultado","Reprobado");  
    }else if(promedio>=5 && promedio<=8){
        mostrarImagen("img1","./good.gif.gif");
        mostrarTexto("lblResultado","Buen Trabajo");  
    }else if(promedio>8 && promedio<=10){
        mostrarTexto("lblPromedio",promedio);
        mostrarImagen("img1","./excelente.jfif");
        mostrarTexto("lblResultado","Excelente");  
    }
    else{
        
        mostrarImagen("img1","./incorrecto.gif");
        mostrarTexto("lblResultado","DATOS INCORRECTOS");  
    }
    
    return promedio
    
}