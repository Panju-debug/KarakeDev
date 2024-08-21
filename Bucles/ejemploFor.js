mostrarNumeros=function(){
    console.log("Antes del for")
    for(let i=0;i<4;i++){
        console.log(i);
    }
    console.log("Despues del for")
}

mostrarNumeros2=function(){
    console.log("Antes del for")
    for(let indice=1;indice<=5;indice++){
        console.log(indice)
    }       
    console.log("Despues del for")
}

mostrarPares=function(){
    for(x=2;x<=10;x+=2){
        console.log(x);
    }
}

mostrarInverso=function(){
    for(x=10;x>=0;x--){
        console.log(x)
    }
}
hackearNasaPelis=function(){
    for(let porcentaje=0;porcentaje<=100;porcentaje+=10){
        console.log("Hackeando nasa: "+porcentaje+"%")
    }
}
mostrarImpares=function(){
    console.log("Antes del for")
    for(let impares=1;impares<=21;impares+=2){
        console.log(impares);
    }
    console.log("Despues del for")
}
