
function Calcular() {
    var kg =parseInt(document.getElementById('valor1').value);
    var largo =parseInt(document.getElementById('valor2').value);
    var ancho =parseInt(document.getElementById('valor3').value);
    var alto =parseInt(document.getElementById('valor4').value);
   
    const calculo1 = ((largo * ancho * alto )/(kg*1000)).toFixed(2);
    const calculo2 =  (largo * ancho *alto).toFixed(2);
    

    const calculo4 = (largo*ancho*alto * (0.0000353147)).toFixed(2);


   var peso1 =(document.getElementById('peso1').innerHTML=calculo1);
   var volumen=(document.getElementById('volumen').innerHTML=calculo2);
   var peso2=document.getElementById('peso2').innerHTML=(peso1 );
   var volumen2=(document.getElementById('volumen2').innerHTML= calculo4);
   var mar=document.getElementById('mar').innerHTML=volumen2* 30;
   var aire=document.getElementById('aire').innerHTML=peso2* 17;
}

