let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
    
}
recorrerArreglo=function(){
    let recuperarNota;
    for(let indice=0;indice<notas.length;indice++){
        recuperarNota= notas[indice];
       console.log(recuperarNota)
    }
}

probarAgregar=function(){
    let notaRecuperada=recuperarEntero("txtNota")
    agregarNota(notaRecuperada);    
}
agregarNota=function(nota){
    notas.push(nota);
}

calcularPromedio=function(){
    let sumaNotas=0;
    let promedio;
    let grades;

    for(i=0;i<notas.length;i++){
        grades=notas[i];
        sumaNotas+=grades;
    }
    return promedio=sumaNotas/notas.length;
}

ejecutarPromedio=function(){
    let promedioNotas;
    promedioNotas=calcularPromedio();
    cambiarTexto("lblPromedio",promedioNotas);
}