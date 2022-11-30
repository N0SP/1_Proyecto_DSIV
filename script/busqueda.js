let noticias=[];
let eventos=[];

function filter() {
    filterEvents();
    filterNoticias();

}


function filterEvents() {
    var filter= document.getElementById('textbox').value.toLowerCase();

    if (filter!= "") {
    fetch('http://localhost:8080/eventos/all').
    then(resultado=> {
        resultado.json().then(json=>{
            eventos= json;
            var filteredEventos= eventos.filter(evento=>evento.titulo.toLowerCase().includes(filter) || evento.categoriaNombre.toLowerCase().includes(filter));
            MapearEventos(filteredEventos, filter);
        
        })

    });

}

}

   



function MapearEventos(array, filter) {
    let contenedor=document.getElementById('eventos');
    contenedor.innerHTML="";


    let contenedor2=document.getElementById('resultE');
    contenedor2.innerHTML=`<h2 class="noticiatitle"> ${array.length} evento(s) referentes a "${filter}" </h2>`


    for (let i=0; i< array.length; i++) {
        contenedor.innerHTML += MapearPlantillaEvento(array[i]);
    }
}
 
function MapearPlantillaEvento(evento){
    return ` <div>
                <div class="fiba"><img src="${evento.fotoUrl}" alt=""></div>
                <div><h3>${evento.titulo}</h3><p>${evento.descripcion}.</p></div>
            </div>
                `

            
}


function filterNoticias() {
    var filter=document.getElementById('textbox').value.toLowerCase();
    if (filter!= "") {
    fetch('http://localhost:8080/noticias/all').
    then(resultado=> {
        resultado.json().then(json=>{
           noticias= json;
            var filteredNoticias= noticias.filter(noticia=>noticia.titulo.toLowerCase().includes(filter) || noticia.categoriaNombre.toLowerCase().includes(filter));
            MapearNoticias(filteredNoticias, filter);
        
        })

    });

}

}

function MapearNoticias(array, filter) {
    let contenedor=document.getElementById('noticias');
    contenedor.innerHTML="";
    let contenedor2=document.getElementById('resultN');
    console.log(contenedor2);
    contenedor2.innerHTML=` <h2 class="noticiatitle"> ${array.length}  Noticia(s) referentes a "${filter}"</h2>`


    for (let i=0; i< array.length; i++) {
        contenedor.innerHTML += MapearPlantillaNoticia(array[i]);
    }
}

function MapearPlantillaNoticia(noticia){
    return `    <div>
                <div> <h3>${noticia.categoriaNombre}</h3><h4>${noticia.titulo}</h4></div>
                 <div><img src="${noticia.fotoUrl}" alt=""></div>
                 <div><p>${noticia.descripcion}</p></div>
                </div>
                `

            
}

