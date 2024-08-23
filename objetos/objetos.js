
probarAtributos =function(){
    let persona={
        nombre: "Pablo",
        apellido: "Vizuete",
        edad: 18,
        estaVivo:true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo==false){
        console.log("no esta vivo")
    }else{
        console.log("esta vivo")
    }
}

crearProducto=function(){
    let producto1={
        nombre:"Fideos",
        precio:1.50,
        stock:3,
    }
    console.log(producto1.nombre)
    let producto2={
        nombre:"Papas",
        precio:0.50,
        stock:5,
    }
    console.log(producto2.precio)

    if(producto1.stock>producto2.stock){
        console.log("Producto 1 tiene mayor stock")
    }
    if(producto1.stock<producto2.stock){
        console.log("Producto 2 tiene mayor stock")
    }
    if(producto1.stock==producto2.stock){
        console.log("Ambos tienen el mismo stock")
    }
}

mosdificarAtributos=function(){
    let cuenta={
        numero: "1234567891234",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula:172344334,
        nombre:"Juan"
    }
    let cliente1={};
    cliente1.nombre="Romeo"
    cliente1.apellido="Salcedo"
    cliente1.cedula="123456"
}

probarIncrementoSaldo=function(){
    let cta={numero:12344,saldo:34.0};
    incrementarSaldo(cta,100)
    console.log(cta.saldo);

}

probarDeterminarMayor=function(){
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor;
    mayor=determinarMayor(per1,per2)
    if(mayor!=null){
        console.log("El mayor es:" +mayor.nombre);
    }
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona1.edad<persona2.edad){
        return persona2;
    }else{
        return null;
    }
}