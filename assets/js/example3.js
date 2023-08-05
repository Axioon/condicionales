const selec1=document.querySelector('#select1')

const selec2=document.querySelector('#select2')
const selec3=document.querySelector('#select3')
const verificar=document.querySelector('#button')
const mens=document.querySelector('#mens')

const ing=document.querySelector('#ing')
console.log(ing)

console.log(mens)
eventLiseners();

function eventLiseners(){

selec1.addEventListener('change', obj1)
selec2.addEventListener('change', obj1)
selec3.addEventListener('change', obj1)

verificar.addEventListener('click', verificacion)
}

const object1={
  select1:"",
  select2:"",
  select3:"",
}


function obj1(e){
  object1[e.target.name]= Number(e.target.value);
console.log(object1)
}

function verificacion(){

 

const object2={
  select1:"9",
  select2:"1",
  select3:"1",
}

const object3={
  select1:"7",
  select2:"1",
  select3:"4",
} 
const v1= object1.select1;
const v2=object1.select2;
const v3=object1.select3;

const v4=object2.select1;
const v5=object2.select2;
const v6=object2.select3;

const v7=object3.select1;
const v8=object3.select2;
const v9=object3.select3;


const mensaje= document.createElement('p');

limpiarHTML(); 
if(Number(v1) === Number(v4) && Number(v2)=== Number(v5) && Number(v3)===Number(v6)){

  
  mensaje.textContent=`Correcto`




}else if ((Number(v1) === Number(v7) && Number(v2)=== Number(v8) && Number(v3)===Number(v9)) ){
  mensaje.textContent=`Correcto`


}else{
  mens.classList.remove='container'
  mens.classList.add('mensaje2')
  mensaje.classList.remove('mensaje');
  mensaje.textContent = `Incorrecto`
 
}

mens.appendChild(mensaje);

setTimeout(()=>{

  location.reload();

},1500)

}


function limpiarHTML(){
while(mens.firstChild){
  mens.removeChild(mens.firstChild)
}


}



