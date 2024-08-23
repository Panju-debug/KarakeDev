let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol=function(){
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen")
}

mostrarOpcionResumen=function(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen")
}

mostrarEmpleados=function(){
    cmpTabla=document.getElementById("tablaEmpleados");
    let tabla=mostrarComponente("tablaEmpleados");
    tabla="<table><tr>"
    +"<th>CEDULA</th>"
    +"<th>NOMBRE</th>"
    +"<th>APELLIDO</th>"
    +"<th>SUELDO</th>"
    +"</tr>"
    let empleado;
    for(i=0;i<empleados.length;i++){
        empleado=empleados[i];
        tabla+=
        "<tr><td>"
        +empleado.cedula
        +"</td><td>"
        +empleado.nombre
        +"</td><td>"
        +empleado.apellido
        +"</td><td>"
        +empleado.sueldo
        +"</td>"
        +"</tr>"
    }
    tabla+="</table>"
    cmpTabla.innerHTML=tabla;
}