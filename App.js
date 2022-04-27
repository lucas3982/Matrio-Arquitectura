let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

//menu de navegacion

btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

   if(activador){

    menu.style.left = "0";
    menu.style.transition = "0.5s";

    activador = false;

   }else{
       activador = false;
       menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador = true;
   }
});

//intercalar clase

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {

    element.addEventListener('click', (event) => {

        enlaces.forEach((link) => {

            link.classList.remove('activo');
        });

        event.target.classList.add('activo');

    });
});

// efectos scroll

let prevScrollpos = window.pageYOffset;
let irArriba = document.querySelector('.ir-arriba');

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    //mostrar y ocultar menu

    if (prevScrollpos > currenScrollPos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";

    }else{
        containerMenu.style.top = "-70px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollpos = currenScrollPos;

    // estilos mostrar y ocultar scroll

    let arriba = window.pageYOffset;

    if(arriba <= 600) {
        containerMenu.style.borderBottom = "none";

        irArriba.style.right = "-100%";

    }else{
        containerMenu.style.borderBottom = "2px solid blue";

        irArriba.style.right = "0";
        irArriba.style.transition = "0.5s";

    }

}

irArriba.addEventListener('click', () => {
    document.body.scroll = 0;
    document.documentElement.scrollTop = 0;

});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});


