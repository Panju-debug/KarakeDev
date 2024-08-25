let empleados = [
  { cedula: "1714616123", nombre: "JOHN", apellido: "CENA", sueldo: 500.0 },
  {
    cedula: "0914632123",
    nombre: "Luisa",
    apellido: "Gonzalez",
    sueldo: 900.0,
  },
];
let esNuevo = false;

mostrarOpcionEmpleado = function () {
  mostrarComponente("divEmpleado");
  ocultarComponente("divRol");
  ocultarComponente("divResumen");
  mostrarEmpleados();
  deshabilitar();
};

mostrarOpcionRol = function () {
  ocultarComponente("divEmpleado");
  mostrarComponente("divRol");
  ocultarComponente("divResumen");
};

mostrarOpcionResumen = function () {
  ocultarComponente("divEmpleado");
  ocultarComponente("divRol");
  mostrarComponente("divResumen");
};

mostrarEmpleados = function () {
  cmpTabla = document.getElementById("tablaEmpleados");
  let tabla = mostrarComponente("tablaEmpleados");
  tabla =
    "<table><tr>" +
    "<th>CEDULA</th>" +
    "<th>NOMBRE</th>" +
    "<th>APELLIDO</th>" +
    "<th>SUELDO</th>" +
    "</tr>";
  let empleado;
  for (i = 0; i < empleados.length; i++) {
    empleado = empleados[i];
    tabla +=
      "<tr><td>" +
      empleado.cedula +
      "</td><td>" +
      empleado.nombre +
      "</td><td>" +
      empleado.apellido +
      "</td><td>" +
      empleado.sueldo +
      "</td>" +
      "</tr>";
  }
  tabla += "</table>";
  cmpTabla.innerHTML = tabla;
};

ejecutarNuevo = function () {
  esNuevo = true;
  habilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");
};

buscarEmpleado = function (cedula) {
  for (i = 0; i < empleados.length; i++) {
    siExiste=empleados[i]
    if (cedula == siExiste.cedula) {
      return empleados[i];
    } 
  }
  return null
};

agregarEmpleado = function (empleado) {
  let noExisteEmpleado;
  noExisteEmpleado = buscarEmpleado(empleado.cedula);
  if (noExisteEmpleado == null) {
    return true;
  } else {
    return false;
  }
};

guardar = function () {
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let sueldo = recuperarFloat("txtSueldo");
  let obligatorio = 0;
  let errores = 0;
  if (nombre == "") {
    obligatorio++;
  } 
  if (apellido == "") {
    obligatorio++;
  } if (isNaN(sueldo)) {
    obligatorio++;
  } if (cedula == "") {
    obligatorio++;
  }
  if (cedula.length != 10 ) {
    mostrarTexto("lblErrorCedula", "DEBE SER DE 10 DIGITOS");
    errores++;
  }if(cedula.length==10){
    mostrarTexto("lblErrorCedula", "");
  }
  if (nombre.length < 3) {
    mostrarTexto("lblErrorNombre", "DEBE TENER MINIMO 3 CARACTERES");
      errores++;
  } if (nombre.length >= 3) {
    let esMayuscula = verificarMayuscula(nombre);
    if (esMayuscula == false) {
      mostrarTexto("lblErrorNombre", "LOS CARACTERES DEBEN SER MAYUSCULAS");
      errores++;
    }else{
      mostrarTexto("lblErrorNombre", "");
    }
  } if (apellido.length < 3) {
    mostrarTexto("lblErrorApellido", "DEBE TENER MINIMO 3 CARACTERES");
    errores++;
  } if (apellido.length >= 3) {
    let esMayuscula = verificarMayuscula(apellido);
    if (esMayuscula == false) {
      mostrarTexto("lblErrorApellido", "LOS CARACTERES DEBEN SER MAYUSCULAS");
      errores++;
    }else{
      mostrarTexto("lblErrorApellido", "");
    }
  } if (sueldo < 400 || sueldo > 5000 || (isNaN(sueldo))) {
    mostrarTexto("lblErrorSueldo", "EL VALOR DEBE ESTAR ENTRE 400 Y 5000");
    errores++;
  }if(sueldo>=400 && sueldo<=5000){
    mostrarTexto("lblErrorSueldo", "");
  } if (obligatorio == 4) {
    alert("LOS 4 CAMPOS SON OBLIGATORIOS")
    errores++;
  } if (errores == 0) {
    if (esNuevo == true) {
      let empleado = []
      empleado.cedula = cedula;
      empleado.nombre = nombre;
      empleado.apellido = apellido;
      empleado.sueldo = sueldo;
      let agregado = agregarEmpleado(empleado);
      if (agregado == true) {
        alert("EMPLEADO GUARDADO CORRECTAMENTE")
        empleados.push(empleado);
        mostrarEmpleados();
        deshabilitar()
        esNuevo=false;
      } else {
        alert("YA EXISTE UN EMPLEADO CON LA CEDULA" + " " + empleado.cedula)
        let existeEmpleado=buscarEmpleado(empleado.cedula)
        if(existeEmpleado!=null){
          existeEmpleado.nombre=empleado.nombre;
          existeEmpleado.apellido=empleado.apellido;
          existeEmpleado.sueldo=empleado.sueldo;
          alert("EMPLEADO MODIFICADO EXITOSAMENTE");
          mostrarEmpleados();
          deshabilitar();
        }
      }
    }
  }
}

verificarMayuscula = function (nombre) {
  let esMayuscula = true;
  for (i = 0; i < nombre.length; i++) {
    let letra = nombre.charAt(i);
    let Mayuscula = letra.charCodeAt();
    if (Mayuscula >= 65 && Mayuscula <= 90) {
      esMayuscula = true;
    } else {
      return esMayuscula = false;
    }
  }if(esMayuscula==true){
    return true
  }
}

deshabilitar=function(){
      deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");
}

ejecutarBusqueda=function(){
  let buscaCedula=recuperarTexto("txtBusquedaCedula");
  let empleadoEncontrado=buscarEmpleado(buscaCedula);
  if(empleadoEncontrado==null){
    alert("EL EMPLEADO NO EXISTE");
  } else{
    mostrarTextoEnCaja("txtCedula",empleadoEncontrado.cedula);
    mostrarTextoEnCaja("txtNombre",empleadoEncontrado.nombre);
    mostrarTextoEnCaja("txtApellido",empleadoEncontrado.apellido);
    mostrarTextoEnCaja("txtSueldo",empleadoEncontrado.sueldo);
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    deshabilitarComponente("txtCedula");
  }
}

limpiar=function(){
  mostrarTextoEnCaja("txtCedula","");
  mostrarTextoEnCaja("txtNombre","");
  mostrarTextoEnCaja("txtApellido","");
  mostrarTextoEnCaja("txtSueldo","");
  esNuevo=false;
  deshabilitar();
}

buscarPorRol=function(){
  let cedulaRol=recuperarTexto("txtBusquedaCedulaRol")
  let rolEmpleado=buscarEmpleado(cedulaRol);
  if(rolEmpleado!=null){
    mostrarTexto("infoCedula",rolEmpleado.cedula)
    mostrarTexto("infoNombre",rolEmpleado.nombre+" "+rolEmpleado.apellido)
    mostrarTexto("infoSueldo",rolEmpleado.sueldo)
  }else{
    alert("NO EXISTE EMPLEADO")
  }
}
recuperarTextoDiv=function(idComponente){
  let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.textContent;
    return valorIngresado;
}
recuperarFloatDiv=function(idComponente){
  let valorCaja= recuperarTextoDiv(idComponente);
 let valorEntero = parseFloat(valorCaja);
 return valorEntero;
}
recuperarEnterotDiv=function(idComponente){
  let valorCaja= recuperarTextoDiv(idComponente);
 let valorEntero = parseInt(valorCaja);
 return valorEntero;
}


calcularAporteEmpleado=function(sueldo){
  let aporte=(sueldo*9.45)/100;
  return aporte;
}

calcularValorAPagar=function(sueldo,aporteIess,descuento){
  valorAPagar=sueldo-aporteIess-descuento;
  return valorAPagar;
}

calcularRol=function(){
  let sueldo=recuperarFloatDiv("infoSueldo");
  let descuento=recuperarFloat("txtDescuentos");
  if(descuento>=0 && descuento<=sueldo){
  let aporte=calcularAporteEmpleado(sueldo);
  mostrarTexto("infoIESS",aporte);
  let total=calcularValorAPagar(sueldo,aporte,descuento);
  mostrarTexto("infoPago",total);
  }
}