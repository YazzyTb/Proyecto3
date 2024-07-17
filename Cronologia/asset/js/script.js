document.addEventListener("DOMContentLoaded", () => {
    fetch('/Cronologia/asset/data/data2.JSON')
        .then(response => response.json())
        .then(data => {
            const timelineContainer = document.getElementById("timeline-container");

            for (const phase in data) {
                const phaseElement = document.createElement("div");
                phaseElement.className = "phase";
                phaseElement.textContent = phase;
                timelineContainer.appendChild(phaseElement);

                data[phase].forEach(movie => {
                    const movieElement = document.createElement("div");
                    movieElement.className = "timeline-item";
                    movieElement.innerHTML = `
                        <img class="imagen" src="${movie.img}" alt="${movie.nombre}">
                        <h2>${movie.nombre} (${movie.año})</h2>
                        <p>${movie.sinopsis}</p>
                    `;
                    timelineContainer.appendChild(movieElement);
                });
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
//animacion timeline
var _items = document.querySelectorAll(".timeline-item")
    _items.forEach(element =>{
        if(element.offsetTop < 300)
            element.classList.add('_show')
})

window.addEventListener("scroll", timelineContainer =>{
    var scroll =document.documentElement.scrollTop
    var items = document.querySelectorAll(".timeline-item")
    items.forEach(elem => {
        if (elem.offsetTop -window.innerHeight/2 < scroll) {
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        } else {
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }
    })
})

});

