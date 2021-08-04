let imagenCentro = document.querySelector('.img_central');
const galeria = document.querySelector('#gallery')
const left = document.querySelector('#previous');
const right = document.querySelector('#forward');

let index_selected_image = -1;


document.addEventListener('DOMContentLoaded', () => {
    alert("Selecciona una imagen o muevete con los botones laterales");
})


galeria.addEventListener('click', (e) => {
    const images = Array.from(gallery.querySelectorAll('img'));
    const i = images.indexOf(e.target);

    imagenCentro.setAttribute("src", e.target.getAttribute("src"));
    index_selected_image = i;
});

right.addEventListener('click', () => {
    let contador;
    let images = Array.from(galeria.querySelectorAll('img'));
    var selected_image = images[++index_selected_image];
    console.log();

   for(let i = 0; i <= images.length; i++) {
        contador = i++;
    }

    if (images[contador] == selected_image) {
        selected_image = images[0];
        index_selected_image = 0;
    }

    console.log(index_selected_image);
    imagenCentro.setAttribute("src", selected_image.getAttribute("src"));
}) 

left.addEventListener('click', () => {
    let contador;
    let images = Array.from(galeria.querySelectorAll('img'));
    var selected_image = images[--index_selected_image];

   for(let i = 0; i <= images.length; i++) {
        contador = i++;
        
    }

    if (index_selected_image < 0) {
        let nuevoContador = contador - 1;
        selected_image = images[nuevoContador];
        index_selected_image = nuevoContador;
    }

    imagenCentro.setAttribute("src", selected_image.getAttribute("src"));
}) 