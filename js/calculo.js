function calcular(){
 
    let ventas = document.getElementById("txtventa").value;
    let viaticos= document.getElementById("txtvia").value;
    let comida= document.getElementById("txtcomida").value;
    let transporte= document.getElementById("txttrans").value;
    let hospedaje= document.getElementById("txthos").value;

    let sueldoB=ventas*0.1;
    let sobrante=viaticos-comida-transporte-hospedaje;
    let sueldoF=sueldoB-sobrante;

    let espacio=document.getElementById("resultado");
    espacio.innerHTML='';


    if(sobrante>=0){
        espacio.innerHTML=`
        <h3 class="text-white">Tus ventas de la quicena fueron:$${ventas}</h3>
        <h3 class="text-white">Tu sueldo base de la quicena fue:$${sueldoB}</h3>
        <h3 class="text-white">Tus viaticos de la quicena fueron:$${viaticos}</h3>
        <h3 class="text-white">Tu gasto en comida de la quicena fue:$${comida}</h3>
        <h3 class="text-white">Tu gasto en transporte de la quicena fue:$${transporte}</h3>
        <h3 class="text-white">Tu gasto en hospedaje de la quicena fue:$${hospedaje}</h3>
        <h3 class="text-white">Tu sobrante de la quicena fue:$${sobrante}</h3>
        <h3 class="text-white">Tu sueldo total de la quicena fue:$${sueldoF}</h3>
        `;
    }else{
        sobrante=Math.abs(sobrante)
        espacio.innerHTML=`
        <h3 class="text-white">Tus ventas de la quicena fueron:$${ventas}</h3>
        <h3 class="text-white">Tu sueldo base de la quicena fue:$${sueldoB}</h3>
        <h3 class="text-white">Tus viaticos de la quicena fueron:$${viaticos}</h3>
        <h3 class="text-white">Tu gasto en comida de la quicena fue:$${comida}</h3>
        <h3 class="text-white">Tu gasto en transporte de la quicena fue:$${transporte}</h3>
        <h3 class="text-white">Tu gasto en hospedaje de la quicena fue:$${hospedaje}</h3>
        <h3 class="text-white">Tu pusiste de tu bolsillo:$${sobrante}</h3>
        <h3 class="text-white">Tu sueldo total de la quicena fue:$${sueldoF}</h3>
        `;
    }



   
}