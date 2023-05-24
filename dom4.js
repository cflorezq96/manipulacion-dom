const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const calc1 = document.querySelector('#calculo1');
const calc2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//ejemplo normal
// .addEventListener agrega un escuchador de eventos... escucha cada vez que suceda cierto evento y cada vez que pasa, ejecuta el código js que se diga
// se ponen dos parámetros... btn.addEventListener('evento','codigo js que se ejcuta cuando pase el evento')
// btn.addEventListener('click', btnOnClick);
// en html tocaba hacer esto: <button id="btnCalcular" onclick="btnOnClick()">Calcular</button> ... llamando a la función btnOnClick()
// pero con .addEventListener se hace lo mismo sin necesidad de llamar la función en html pero acá no es necesario poner parentesis de la función, solo el nombre

function btnOnClick() {
    const sumaInputs = calc1.value + calc2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;
}

// ejemplo formulario
form.addEventListener('submit', sumarInputs);
// en html tocaba hacer esto: <form id="formulario" onsubmit="sumarInputs()">

function sumarInputs(event) {
    // console.log({event});
    // es para imprimir el evento que se generar (submit) y ahí vemos la propiedad defaultPrevented: true
    event.preventDefault();
    // se llama esta propiedad para que no ejecute lo que por defecto debería ejecutar el evento (y por defecto en los formularios, se recarga la página por ser tipo submit, ya que en un formulario se envia los datos y por eso se recarga por defecto)
    // .preventDefault() hace que no se recarge la página... para que pueda hacer el resto de cosas que se quiera hacer desde el codgo js
    const sumaInputs = calc1.value + calc2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;
}

// Para que funcione el addEventListener, es muy importante que en el archivo html, la etiqueta script este al final del body, para que cargue primero el árbol del DOM.
