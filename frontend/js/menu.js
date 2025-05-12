const menu = document.getElementById('menu');
const menuFloat = document.getElementById('menu-float');
const enlaces = document.querySelectorAll('.enlace');
menu.addEventListener("click", () => {
    const isActive = menuFloat.classList.toggle('active');
    if (isActive) {
        setTimeout(() => {
            enlaces.forEach(enlace => {
                enlace.style.background = '#84d1da'
                
            })
        },400)
    } else {
        enlaces.forEach(enlace => {
            enlace.style.background = 'none'
        });
    }
    
});