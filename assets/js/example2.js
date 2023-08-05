const git=document.querySelector('#git');
const gitHub=document.querySelector('#github');
const js=document.querySelector('#js');
const Verificar=document.querySelector('#Verificar');
const resultado=document.querySelector('#comentarios');




eventLiseners(); 




function eventLiseners(){

git.addEventListener('change', number1);
gitHub.addEventListener('change',number1);
js.addEventListener('change', number1);
Verificar.addEventListener('click',suma);

}


function number1(e){
    numbers1[e.target.name]= Number(e.target.value);
    console.log(numbers1);
}



const numbers1={
    numbers1:"",
    numbers2:"",
    numbers3:"",
}


function suma(){
    limpiarHtml()

    const sumaTotal=numbers1.numbers1+numbers1.numbers2+numbers1.numbers3
    const mensaje=document.createElement('p');

    if(sumaTotal<=10){

        mensaje.textContent= `usted lleva el total de ${sumaTotal} stickers`;
        mensaje.classList.add ('mensaje')

    }else{
    mensaje.classList.remove('mensaje1')
      mensaje.textContent=`Llevas demasiados stickers`;
    
      mensaje.classList.add('mensaje2');
    
      console.log(mensaje);

    }
    resultado.appendChild(mensaje);

    
}



function limpiarHtml(){


    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}
