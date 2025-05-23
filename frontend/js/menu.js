const menu = document.getElementById('menu');
const cerrar = document.getElementById('closeIcon');
const menuFloat = document.getElementById('menu-float');
const menuFloat2 = document.getElementById('menu-float2');
const enlaces = document.querySelectorAll('.enlace');
function desplegar(){
    const isActive = menuFloat.classList.toggle('active');
    const isActive2 = menuFloat2.classList.toggle('active');
    const pantalla = window.innerWidth > 820;
    if (isActive || isActive2) {
        if (pantalla) {
            setTimeout(() => {
                enlaces.forEach(enlace => {
                    enlace.style.background = '#84d1da'
                })
            },400)
        }else{
            enlaces.forEach(enlace => {
                enlace.style.background = 'none'
            })
        }
    } else {
        enlaces.forEach(enlace => {
            enlace.style.background = 'none'
        });
    }
}
menu.addEventListener("click", desplegar);
cerrar.addEventListener("click", desplegar);