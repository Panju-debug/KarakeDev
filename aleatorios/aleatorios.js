crearAleatorio=function(){
    let aleatorio;
    let aleatorioInt;

    aleatorio=Math.random();
    aleatorio=aleatorio*100;
   aleatorioInt= (parseInt(aleatorio))+1;
   return aleatorioInt;
}

generarAleatorios=function(){
    let aleatorios=[];
    let numero;
    let contador;

    numero=recuperarEntero("txtNumeros");
    if(numero>=5 && numero<=20){
        for(i=0;i<numero;i++){
            console.log(i);
            contador=crearAleatorio();
            aleatorios.push(contador);
        }
        mostrarResultados(aleatorios);
    }
}

mostrarResultados=function(arregloNumeros){
    let arreglo;
    let cmpTabla=document.getElementById("table");
    let contenidoTabla="<table><tr><th>ALEATORIOS</th></tr>"
    for(let i=0;i<arregloNumeros.length;i++){
        arreglo=arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=arreglo;
        contenidoTabla+="</td></tr>"
    }
    contenidoTabla+="</table>"
    console.log(contenidoTabla);
    cmpTabla.innerHTML = contenidoTabla;
}