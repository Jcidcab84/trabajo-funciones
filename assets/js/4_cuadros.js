// cuadro azul

const azul = document.getElementById('azul');

function pintar_azul(color = 'black'){
    azul.style.backgroundColor = 'black';
}

azul.addEventListener('click', pintar_azul);

// cuadro rojo

const rojo = document.getElementById('rojo');

function pintar_rojo(color = 'black'){
    rojo.style.backgroundColor = 'black';
}

rojo.addEventListener('click', pintar_rojo);
    

// cuadro verde

const verde = document.getElementById('verde');

function pintar_verde(color = 'black'){
    verde.style.backgroundColor = 'black';
}

verde.addEventListener('click', pintar_verde);
    

// cuadro amarillo

const amarillo = document.getElementById('amarillo');

function pintar_amarillo(color = 'black'){
    amarillo.style.backgroundColor = 'black';
}

amarillo.addEventListener('click', pintar_amarillo);