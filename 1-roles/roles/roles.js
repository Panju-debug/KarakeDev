let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
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
  }
  if (nombre.length < 3) {
    mostrarTexto("lblErrorNombre", "DEBE TENER MINIMO 3 CARACTERES");
      errores++;
  } if (nombre.length >= 3) {
    let esMayuscula = verificarMayuscula(nombre);
    if (esMayuscula == false) {
      mostrarTexto("lblErrorNombre", "LOS CARACTERES DEBEN SER MAYUSCULAS");
      errores++;
    }
  } if (apellido.length < 3) {
    mostrarTexto("lblErrorApellido", "DEBE TENER MINIMO 3 CARACTERES");
    errores++;
  } if (apellido.length >= 3) {
    let esMayuscula = verificarMayuscula(apellido);
    if (esMayuscula == false) {
      mostrarTexto("lblErrorApellido", "LOS CARACTERES DEBEN SER MAYUSCULAS");
      errores++;
    }
  } if (sueldo < 400 || sueldo > 5000 || (isNaN(sueldo))) {
    mostrarTexto("lblErrorSueldo", "EL VALOR DEBE ESTAR ENTRE 400 Y 5000");
    errores++;
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
        
      } else {
        alert("YA EXISTE UN EMPLEADO CON LA CEDULA" + " " + empleado.cedula)
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