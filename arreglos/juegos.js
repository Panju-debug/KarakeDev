let frutas=["Pera","Manzana","Banana"]

probarBusqueda=function(){
    let frutaIngresada=recuperarTexto("lblFruta");
    let resultado=buscar(frutaIngresada);
    if(resultado==null){
        alert("NO EXISTE LA FRUTA")
    }else{
        alert(frutaIngresada+ " "+ "existe en el cesto")
    }

}   
buscar=function(fruta){
    let frutaEncontrada=null;

    for(i=0;i<frutas.length;i++){
        let elemento=frutas[i];
        if(fruta==elemento){
            frutaEncontrada=fruta;
            break;
        }
    }
    return frutaEncontrada;
}