let eventos = [];

function ObtenerEventos() {
    fetch('http://localhost:8080/eventos/all').
    then(resultado=> {
        resultado.json().then(json=>{
            eventos= json;
            console.log(eventos);
            MapearEventos(eventos);
        })

    });

}

function MapearEventos(array) {
    let contenedor=document.getElementById('eventos');
    contenedor.innerHTML="";


    for (let i=0; i< eventos.length; i++) {
        contenedor.innerHTML += MapearPlantilla(array[i]);
    }
}



function MapearPlantilla(evento){
    return ` <div>
                <div>
                    <a href=""><img src="${evento.fotoUrl}""></a>
                </div>
                <div>
                     <h1>${evento.titulo}</h1>
                    <p>${evento.descripcion}</p>
                  </div>
            </div>`

            
}


//category buttons

function ObtenerCategorias(){
    fetch('http://localhost:8080/categorias/all').
    then(resultado=> {
        resultado.json().then(json=>{
            categorias= json;
            console.log(categorias);
           MapearCategorias(categorias)
        })

    });
}

function MapearCategorias(categorias) {
    let contenedor=document.getElementById('categorias');

    contenedor.innerHTML=`<h2>Filtrar eventos</h2> <button onclick="ObtenerEventos()">Ver todos</button>`

    for (let i=0; i< categorias.length; i++) {
        contenedor.innerHTML += crearBoton(categorias[i]);
    }
}

function crearBoton(categoria) {

   return `<button onclick="showEvents(${categoria.categoriaID})">
            ${categoria.nombre}
            </button>`
}

function showEvents(categoriaID){
    console.log("hola");
    fetch('http://localhost:8080/eventos/all').
    then(resultado=> {
        resultado.json().then(json=>{
            eventos= json;
        })

        var filteredEventos = eventos.filter(evento=>evento.categoriaId==categoriaID);
        console.log(filteredEventos);
        MapearEventos(filteredEventos);

    });

}



