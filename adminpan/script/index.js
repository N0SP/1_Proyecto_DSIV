let usuarios = [];
let noticias = [];
let eventos = [];

function ObtenerUsuarios(){
    fetch('http://localhost:8080/usuarios/all').
    then(resultado=> {
        resultado.json().then(json=>{
            usuarios= json;
            MapearUsuarios(usuarios);
        
        })

    });
}

function MapearUsuarios(array){
    let contenedor= document.getElementById('usuarios');
    contenedor.innerHTML= `${array.length}(s) usuarios creados`;
}

function ObtenerNoticias(){
    fetch('http://localhost:8080/noticias/all').
    then(resultado=> {
        resultado.json().then(json=>{
            noticias= json;
            MapearNoticias(noticias);
        
        })

    });
}

function MapearNoticias(array){
    let contenedor= document.getElementById('noticia');
    contenedor.innerHTML= `${array.length}(s) noticias creados`;
}


function ObtenerEventos(){
    fetch('http://localhost:8080/eventos/all').
    then(resultado=> {
        resultado.json().then(json=>{
            eventos= json;
            MapearEventos(eventos);
        
        })

    });
}

function MapearEventos(array){
    let contenedor= document.getElementById('evento');
    contenedor.innerHTML= `${array.length}(s) eventos creados`;
}

function start() {
    ObtenerUsuarios();
    ObtenerNoticias();
    ObtenerEventos();
    ObtenerReportes();
}



function ObtenerReportes() {
    fetch('http://localhost:8080/reportes/all').
    then(resultado=> {
        resultado.json().then(json=>{
            reportes= json;
            MapearReportes(reportes);
        })


    });

}



function MapearReportes(array) {
    let contenedor=document.getElementById('bitacora');
    contenedor.innerHTML= `    <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Acción</th>
                                        <th>Titulo</th>
                                        <th>Categoria</th>
                                    </tr>
                                </thead>
                            <tbody>`
    for (let i=0; i< array.length; i++) {
        contenedor.innerHTML += MapearPlantilla(array[i]);
    }
    contenedor.innterHTML=" </tbody>"
}

function MapearPlantilla(reporte){
    return `    <tr>
                    <td class="reporte">${reporte.date}</td>
                    <td class="reporte">${reporte.accion}</td>
                    <td class="reporte">${reporte.titulo}</td>
                    <td class="reporte">${reporte.categoriaNombre}</td>
                </tr>`
          

            
}

