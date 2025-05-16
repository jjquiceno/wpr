function puntos(selector, cant){
    const puntosC = document.querySelector(selector);
    puntosC.innerHTML = '';

    for (let i = 0; i < cant; i++) {
        const cajita = document.createElement('div');
        cajita.classList.add('cajitaP');
        puntosC.appendChild(cajita)
    }
}