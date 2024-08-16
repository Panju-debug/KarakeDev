calcularPromedioNotas=function(){
    let notaFloat1
    let notaFloat2
    let notaFloat3

    notaFloat1=parseFloat(recuperarTexto("txtNota1"));
    notaFloat2=parseFloat(recuperarTexto("txtNota2"));
    notaFloat3=parseFloat(recuperarTexto("txtNota3"));

    promediofloat=calcularPromedio(notaFloat1,notaFloat2,notaFloat3);
    promedio=promediofloat.toFixed(2);
    mostrarTexto("lblPromedio",promedio);
    return promedio
    
}