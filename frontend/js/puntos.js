function puntos(selector, cant){
    const puntosC = document.querySelectorAll(selector);

    puntosC.forEach(puntos => {
        puntos.innerHTML = '';

        for (let i = 0; i < cant; i++) {
            const cajita = document.createElement('div');
            cajita.classList.add('cajitaP');
            puntos.appendChild(cajita)
        }
    })
}