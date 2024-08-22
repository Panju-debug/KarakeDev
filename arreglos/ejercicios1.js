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

generarTabla=function(){
    let contenidoTabla="";
    let cmpTabla=document.getElementById("divTabla")
    contenidoTabla+="<table><tr><td>UNO</td></tr>"+"<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}

probarAgregar=function(){
    let notaRecuperada=recuperarEntero("txtNota")
    agregarNota(notaRecuperada);    
}
agregarNota=function(nota){
    notas.push(nota);
    mostrarNotas();
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

mostrarNotas=function(){
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}