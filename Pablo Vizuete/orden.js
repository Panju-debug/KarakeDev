let arreglo=[
    {nombre:"Marcos",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Dianda",edad:12},
    {nombre:"Benja",edad:5}
]

agregarPersona=function(){
    let nombrePersona=recuperarTexto("txtNombre");
    let edadPersona=recuperarInt("txtEdad"); 
    let error=0;
    
    
    if(nombrePersona.length>=3){
        
    }else{
        error++;;
        mostrarTexto("lblErrorNombre","Debe tener mas de 2 caracteres");
    }
    if(edadPersona>0 && edadPersona<100){

    }else{
        error++;
        mostrarTexto("lblErrorEdad","Debe ser entre 0 y 100");
    }

    if(error==0){
        let nuevaPersona={};
        nuevaPersona.nombre=nombrePersona;
        nuevaPersona.edad=edadPersona;
        arreglo.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersona();
    }
}

mostrarPersona=function(){
    cmpTabla=document.getElementById("table");
        let tabla = mostrarComponente("table");
        tabla =
        "<table><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>"+
        "</tr>";
        let persona;
        for (i = 0; i < arreglo.length; i++) {
          persona = arreglo[i];
          tabla +=
            "<tr><td>" +
            persona.edad +
            "</td><td>" +
            persona.nombre +
            "</td><td>" 
            "</tr>";
        }
        tabla += "</table>";
        cmpTabla.innerHTML = tabla;
        
}
encontrarMayor=function(){
    let personaMayor=arreglo[0];
    let elementoPersona;

    for(i=0; i<arreglo.length; i++){
        elementoPersona=arreglo[i];
        console.log(elementoPersona);
        if(elementoPersona.edad>personaMayor.edad){
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTexto("mayor","Nombre:"+" "+mayor.nombre+" "+"Edad:"+" "+mayor.edad);
}

encontrarMenor=function(){
    let personaMenor=arreglo[0];
    let elementoPersona;

    for(i=0; i<arreglo.length; i++){
        elementoPersona=arreglo[i];
        console.log(elementoPersona);
        if(elementoPersona.edad<personaMenor.edad){
            personaMenor=elementoPersona;
        }
    }
    return personaMenor;
}

determinarMenor=function(){
    let menor=encontrarMenor();
    mostrarTexto("menor","Nombre:"+" "+menor.nombre+ " "+"Edad:"+" "+menor.edad);
}