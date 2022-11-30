let noticias = [];
let id = null;

function ObtenerNoticias() {
    fetch('http://localhost:8080/noticias/all').
    then(resultado=> {
        resultado.json().then(json=>{
            noticias= json;
            console.log(noticias);
            MapearNoticias(noticias);
        })

    });

}

function MapearNoticias(array) {
    let contenedor=document.getElementById('noticias');
    contenedor.innerHTML="";
    for (let i=0; i< array.length; i++) {
        contenedor.innerHTML += MapearPlantilla(array[i]);
    }
}



function MapearPlantilla(noticia){
    return `    <div>
                    <div><h3>${noticia.categoriaNombre}</h3><h4>${noticia.titulo}</h4></div>
                    <div><img src="${noticia.fotoUrl}" alt=""></div>
                    <div><p class="description">${noticia.descripcion}</p></div>
                    <div><a href="noticia.html"><button class="info" onclick="noticia(${noticia.noticiaId})">Leer mas</button></a></div>
                </div>`

            
}

function noticia(id) {
    localStorage.setItem('noticiaId', id);
    window.location.href="noticia.html";
 
}


function individualNoticia() {
    let noticiaId=localStorage.getItem('noticiaId')
    fetch(`http://localhost:8080/noticia/${noticiaId}`).then(resultado=> {
        resultado.json().then(json=>{
            noticia= json;
            showNoticia(noticia)
        })
   
    });

}

function showNoticia(noticia) {
        let contenedor=document.getElementById('news');
        contenedor.innerHTML=
        ` <h1>${noticia.titulo}</h1>
        <div>
            <div>
                <img src="${noticia.fotoUrl}" alt="">
            </div>
            <div>
            <p>${noticia.contenido}</p>
            </div>
        
        </div>`

}


function ObtenerCategorias(){
    fetch('http://localhost:8080/categorias/all').
    then(resultado=> {
        resultado.json().then(json=>{ 
            categorias= json;
           MapearCategorias(categorias)
        })

    });
}

function MapearCategorias(categorias) {
    let contenedor=document.getElementById('categorias');
    console.log(categorias);



  contenedor.innerHTML=`<h2>Filtrar noticias</h2> <button onclick="ObtenerNoticias()">Ver todos</button>`

    for (let i=0; i< categorias.length; i++) {
        contenedor.innerHTML += crearBoton(categorias[i]);
    }
}

function crearBoton(categoria) {

    return `<button onclick="showNoticias(${categoria.categoriaID})">
             ${categoria.nombre}
             </button>`
 }
 
 function showNoticias(categoriaID){
    fetch('http://localhost:8080/noticias/all').
    then(resultado=> {
        resultado.json().then(json=>{
            noticias= json;
        })

        var filteredNoticias = noticias.filter(noticia=>noticia.categoriaId==categoriaID);

        MapearNoticias(filteredNoticias);

    });

}

function setId(newId) {
    console.log(id);
    id=newId;
    console.log(id);
}





