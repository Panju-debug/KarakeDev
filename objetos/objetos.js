
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