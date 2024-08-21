function validarEstructura(placa) {
    let errores = [];

    // Validar longitud
    if (placa.length !== 7 && placa.length !== 8) {
        errores.push("La placa debe tener 7 u 8 caracteres.");
    }

   
    if (!placa[0] || !/[A-Z]/.test(placa[0])) {
        errores.push("El primer carácter debe ser una letra mayúscula.");
    }
    if (!placa[1] || !/[A-Z]/.test(placa[1])) {
        errores.push("El segundo carácter debe ser una letra mayúscula.");
    }
    if (!placa[2] || !/[A-Z]/.test(placa[2])) {
        errores.push("El tercer carácter debe ser una letra mayúscula.");
    }

 
    if (!placa[3] || placa[3] !== '-') {
        errores.push("El cuarto carácter debe ser un guion (-).");
    }

  
    if (!placa[4] || !/[0-9]/.test(placa[4])) {
        errores.push("El quinto carácter debe ser un dígito.");
    }
    if (!placa[5] || !/[0-9]/.test(placa[5])) {
        errores.push("El sexto carácter debe ser un dígito.");
    }
    if (!placa[6] || !/[0-9]/.test(placa[6])) {
        errores.push("El séptimo carácter debe ser un dígito.");
    }

    if (placa.length === 8 && (!placa[7] || !/[0-9]/.test(placa[7]))) {
        errores.push("El octavo carácter, si existe, debe ser un dígito.");
    }

    
    if (errores.length > 0) {
        return errores.join(" ");
    }

    return null;
}