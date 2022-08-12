// con document.querySelector(); puedo elegir que etiqueta 
//estoy tocando con javascript//

const h1 =document.querySelector('h1');
const p =document.querySelector('p');
const parrafito =document.getElementsByClassName('parrafito');
const pid =document.getElementById('pid');
const input =document.querySelector('input');

console.log(input.value );

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';// convierte lo que yo quiero a codigo html
h1.innerText = 'Patito <br> Feo';//cambia el texto que este dentro de la etiqueta a la que llamo por
//el texto que le ponga 
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');//


h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value ="456"

const img = document.createElement('img');
//para crear una etiqueta  es document.createElement



img.setAttribute('src','https://m.media-amazon.com/images/M/MV5BOGQ0MDQyYWMtNjdlYy00ZDAyLWE5YTItMzcyMjllZTA4MTcyXkEyXkFqcGdeQXVyMjEzNTg5Mzk@._V1_.jpg');

console.log(img);

pid.innerHTML = "";
pid.append(img);