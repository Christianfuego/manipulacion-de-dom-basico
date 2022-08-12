//aqui esta la lista de lo eventos que podemos aplicar manejando el DOM:

//Evento : | Descripción | Elementos para los que está definido
//onblur: Deseleccionar el elemento => <button>, <input>, <label>,<select>, <textarea>, <body>
//onchange: Deseleccionar un elemento que se ha modificado => <input>, <select>, <textarea>
//onclick: Pinchar y soltar el ratón => Todos los elementos
//ondblclick: Pinchar dos veces seguidas con el ratón => Todos los elementos
//onfocus: Seleccionar un elemento => <button>, <input>, <label>,<select>, <textarea>, <body>
//onkeydown: Pulsar una tecla y no soltarla => Elementos de formulario y <body>
//onkeypress: Pulsar una tecla => => Elementos de formulario y <body>
//onkeyup: Soltar una tecla pulsada => Elementos de formulario y <body>
//onload: Página cargada completamente => <body>
//onmousedown: Pulsar un botón del ratón y no soltarlo => Todos los elementos
//onmousemove: Mover el ratón => Todos los elementos
//onmouseout: El ratón “sale” del elemento => Todos los elementos
//onmouseover:El ratón “entra” en el elemento => Todos los elementos
//onmouseup: Soltar el botón del ratón => Todos los elementos
//onreset :Inicializar el formulario => <form>
//onresize :Modificar el tamaño de la ventana => <body>
//onselect: Seleccionar un texto =><input>, <textarea>
//onsubmit :Enviar el formulario
//onunload: Se abandona la página, por ejemplo al cerrar el navegador => <body>**





const h1 =document.querySelector('h1');
const form =document.querySelector('#form');
const input1 =document.querySelector('#calculo1');
const input2 =document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//form.addEventListener('submit',sumarInpuntsValues)
//para escuchar los eventos con .addEventListener donde el primero parametro
//que ira dentro del parentesis  lo primero es decirle cual de todos los posible eventos queremos escuchar y segundo la funcion que queremos que se ejecute cuando ocurra ese evento


//PRIMERA FORMA PARA QUITAR QUE FORMULARIO COLOQUE MI BUTTON TIPO SUBMITT Y RECARGUE LA PAGINA
//function sumarInpuntsValues(event){
   // console.log({event})
    //event.preventDefault();
    //const sumaInputs = input1.value + input2.value;
   // pResult.innerHTML = "Resultado: " + sumaInputs;
//}

//SEGUNDA FORMA PARA QUITAR QUE FORMULARIO COLOQUE MI BUTTON TIPO SUBMITT Y RECARGUE LA PAGINA y colocando al button type=button

btn.addEventListener('click',sumarInpuntsValues);

function sumarInpuntsValues(event){
    //console.log({event})
    //event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;
}