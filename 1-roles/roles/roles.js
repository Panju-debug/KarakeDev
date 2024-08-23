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
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
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
    if (cedula == empleados.cedula) {
      return empleados[i];
    } else {
      return null;
    }
  }
};

agregarEmpleado = function (empleado) {
  let noExisteEmpleado;
  noExisteEmpleado = buscarEmpleado(empleado);
  if (noExisteEmpleado == null) {
    return false;
  } else {
    return true;
  }
};

guardar = function () {
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let sueldo = recuperarFloat("txtSueldo");
  let obligatorio=0;
  let errores;
  
  if(nombre==null){
    obligatorio++;
  }if(apellido==null){
    obligatorio++;
  }if(sueldo==null){
    obligatorio++;
  }if(cedula==null){
    obligatorio++;
  }
  if (cedula != 10) {
    mostrarTexto("lblErrorCedula", "DEBE SER DE 10 DIGITOS");
    errores++;
  }
  if (nombre.length < 3) {
    mostrarTexto("lblErrorNombre", "DEBE TENER MINIMO 3 CARACTERES");
    errores++;
  }if(nombre.length>3){
    let esMayuscula=verificarMayuscula(nombre);
    if(esMayuscula==false){
        mostrarTexto("lblErrorNombre", "LOS CARACTERES DEBEN SER MAYUSCULAS");
        errores++;
    }
  }if (apellido.length < 3) {
    mostrarTexto("lblErrorApellido", "DEBE TENER MINIMO 3 CARACTERES");
    errores++;
  }if(apellido.length>3){
    let esMayuscula=verificarMayuscula(apellido);
    if(esMayuscula==false){
        mostrarTexto("lblErrorApellido", "LOS CARACTERES DEBEN SER MAYUSCULAS");
        errores++;
    }
  }if(sueldo<400 && sueldo>5000){
    mostrarTexto("lblErrorSueldo","EL VALOR DEBE ESTAR ENTRE 400 Y 5000");
    errores++;
  }if(obligatorio==4){
    mostrarTexto=("","LOS 4 CAMPOS SON OBLIGATORIOS")
    errores++;
  }if(errores==0){
    if(errores==true){
        let empleado=[]
        empleado.cedula=cedula;
        empleado.nombre=nombre;
        empleado.apellido=apellido;
        empleado.sueldo=sueldo;
        let agregado=agregarEmpleado(empleado);
        if(agregado==true){
            alert("EMPLEADO GUARDADO CORRECTAMENTE")
            
        }
    };
  }
}

verificarMayuscula=function(nombre){
    let esMayuscula=true;
    for (i = 0; i < nombre.length; i++) {
        let letra = nombre.charAt(i);
        let Mayuscula = letra.charCodeAt(i);
        if (Mayuscula>= 65 && Mayuscula <= 90) {
          esMayuscula=true;
        }else{
            esMayuscula=false;
            break;
        }
      } 
}