//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula=function(caracter){
    let code;
   code =caracter.charCodeAt()
   if(code>=65 && code<=90){
    return true;
   }else{
    return false;
   }
}
