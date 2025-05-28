const docs = [
    // {name: 'Archivo 1', download: '../docs/archivo1'},
    // {name: 'Archivo 1', download: '../docs/archivo1'},
    // {name: 'Archivo 1', download: '../docs/archivo1'},
    // {name: 'Archivo 1', download: '../docs/archivo1'},
    // {name: 'Archivo 1', download: '../docs/archivo1'}
];

function mostrarDocs(){
    docs.forEach((doc) => {
        const padre = document.getElementById('docs');
        const docCaja = document.createElement('div');
        docCaja.classList.add('docCaja');

        const docCajaint = document.createElement('div');
        docCajaint.classList.add('docCaja-int', 'dcI1');

        const icono = document.createElement('i');
        icono.classList.add('fa-solid', 'fa-file-pdf', 'fa-5x');
        const tittle = document.createElement('p');
        tittle.classList.add('regular');
        tittle.textContent = doc.name;

        const separador = document.createElement('div');
        separador.classList.add('separador')

        const a = document.createElement('a');
        a.classList.add('docCaja-int', 'dcI2', 'bold')
        a.href = doc.download;
        a.download = doc.download;
        a.textContent = 'Descargar';
        
        docCajaint.appendChild(icono)
        docCajaint.appendChild(tittle)
        docCaja.appendChild(docCajaint)
        docCaja.appendChild(separador)
        docCaja.appendChild(a)
        padre.appendChild(docCaja)
    });
};

mostrarDocs();
function searchFile(){
    const input = document.querySelector('.buscador-input').value.toLowerCase();
    const padre = document.getElementById('docs');
    padre.innerHTML = '';

    if (input === '') {
        mostrarDocs();
    } else {
        const searchResults = docs.filter((doc) => doc.name.toLowerCase().includes(input));
        if (searchResults.lenght > 0) {
            searchResults.forEach((doc) => {
                const docCaja = document.createElement('div');
                docCaja.classList.add('docCaja');

                const docCajaint = document.createElement('div');
                docCajaint.classList.add('docCaja-int', 'dcI1');

                const icono = document.createElement('i');
                icono.classList.add('fa-solid', 'fa-file-pdf', 'fa-5x');
                const tittle = document.createElement('p');
                tittle.classList.add('regular'); 
                tittle.textContent = documento.name;   
            
                const separador = document.createElement('div');
                separador.classList.add('separador-black');
            
                const a = document.createElement('a');
                a.classList.add('docCaja-int', 'dcI2', 'bold');
                a.href = documento.download;
                a.download = documento.name;
                a.textContent = 'Descargar';
            
                
                docCajaint.appendChild(icono);
                docCajaint.appendChild(tittle);
                docCaja.appendChild(docCajaint);  
                docCaja.appendChild(separador);
                docCaja.appendChild(a);
                padre.appendChild(docCaja);
            })
        } else {
            padre.innerHTML = '<p>No se encontraron resultados</p>'; 
        }
    }
}

const inputElement = document.querySelector('.buscador-input');
const buttonElement = document.querySelector('.buscador-button');

inputElement.addEventListener('input', () => {
    searchFunction();
});

buttonElement.addEventListener('click', (e) => {
    e.preventDefault();
    searchFunction();
});