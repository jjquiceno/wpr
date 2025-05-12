fetch('frontend/templates/indexT.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container').innerHTML = data;

        const menu = document.getElementById('menu');
        const menuFloat = document.getElementById('menu-float');
        menu.addEventListener("click", () => {
            menuFloat.classList.toggle('active');
        });
    })