/* variables */
let eventos = [];
let noticias = [];
let categorias = [];
let Url = "http://localhost:8080";
/* variables */
function start() {
    ObtenerEventos();
    ObtenerNoticias();
    ObtenerCategorias();
}

/*------------------NOTICIAS-----------------*/
function ObtenerNoticias() {

    fetch(Url +'/noticias/all').
    then(resultado=> {

        resultado.json().then(json=>{
            noticias= json;
            console.log(noticias);
            MapearNoticiasADMIN(noticias);
            
        })
    });


}

function MapearNoticiasADMIN(array) {
    let contenedor=document.getElementById('noticiasadm');
    contenedor.innerHTML="";

    for (let i=0; i< noticias.length; i++) {
        contenedor.innerHTML += MapearPNoticiasADMIN(array[i]);
    }
}

function MapearPNoticiasADMIN(noticiasadm){
    return `
    <tr>  <td>${noticiasadm.noticiaId}</td>
          <td>${noticiasadm.categoriaId}</td>  
          <td>${noticiasadm.titulo}</td>
          <td>${noticiasadm.descripcion}</td>
          <td>${noticiasadm.fotoUrl}</td>
          <td>
          <div class="botones">
              <div class="boton-modal">
                  <label onclick="MostrarDatosCamposNoticia(${noticiasadm.noticiaId})"" for="btn-modal-edit"><i class="material-icons-edit" data-toggle="tooltip" title="Edit">&#xE254;</i></label>
              </div>
              <div class="boton-modal">
                  <label onclick="EliminarNoticia(${noticiasadm.noticiaId})" for="btn-modal-delete"><i class="material-icons-delete" data-toggle="tooltip" title="Delete">&#xE872;</i></label>
              </div>
          </div>
          </td>
          </tr>`

            
}

function EliminarNoticia(nid){
    fetch(Url +'/noticia/' +nid, { method:"Delete" }).then(res=>{
    console.log(res);
    ObtenerNoticias();
    });

}

function GuardarNoticia(){
    let data = {
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        contenido: document.getElementById("contenido").value,
        categoriaId:document.getElementById("categoria").value,
        fotoUrl: document.getElementById("url").value
    };
    if (data.titulo == "" || data.descripcion == "" || data.contenido == "" || data.categoriaId == "" || data.fotoUrl == "") {
        alert("Todos los campos son obligatorios");
    } else {
    fetch(Url+"/noticia", {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type":'application/json; charset=UTF-8'
        }}).then(res=>{
            ObtenerNoticias();
        });
} 
}


function EditarNoticias(){
    let data = {
        titulo: document.getElementById("titulonedit").value,
        descripcion: document.getElementById("descripcionnedit").value,
        categoriaId:document.getElementById("categorianedit").value,
        contenido: document.getElementById('contenidonedit').value,
        fotoUrl: document.getElementById("urlnedit").value,
        noticiaId: document.getElementById("noticiaid").value
    };
    if (data.titulo == "" || data.descripcion == "" || data.contenido == "" || data.categoriaId == "" || data.fotoUrl == "") {
        alert("Todos los campos son obligatorios");
    } else {
    fetch(Url+"/noticia", {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-type":'application/json; charset=UTF-8'
        }}).then(res=>{
            ObtenerNoticias();
        });
}
}

function MostrarDatosCamposNoticia(nid){
    let noticia = noticias.find(n=>n.noticiaId==nid);

    document.getElementById('titulonedit').value = noticia.titulo;
    document.getElementById('descripcionnedit').value = noticia.descripcion;
    document.getElementById('contenidonedit').value = noticia.contenido;
    document.getElementById('categorianedit').value = noticia.categoriaId;
    document.getElementById('urlnedit').value = noticia.fotoUrl;
    document.getElementById('noticiaid').value = noticia.noticiaId;
}

/*--------------FIN DE NOTICIAS-----------------*/

/*------------------CATEGORIAS------------------*/
function ObtenerCategorias() {

    fetch(Url +'/categorias/all').
    then(resultado=> {

        resultado.json().then(json=>{
            categorias= json;
            console.log(categorias);
            MapearCategoriasADMIN(categorias);
            
        })
    });


}
function MapearCategoriasADMIN(array) {
    let contenedor=document.getElementById('categoriasadm');
    contenedor.innerHTML="";

    for (let i=0; i< noticias.length; i++) {
        contenedor.innerHTML += MapearPCategoriasADMIN(array[i]);
    }
}
function MapearPCategoriasADMIN(categoriasadm){
    return `
    <tr>  <td>${categoriasadm.categoriaID}</td>
          <td>${categoriasadm.nombre}</td>
          <td>
          <div class="botones">
              <div class="boton-modal">
                  <label onclick="" for="btn-modal-delete"><i class="material-icons-delete" data-toggle="tooltip" title="Delete">&#xE872;</i></label>
              </div>
          </div>
          </td>
          </tr>`

            
}


/*--------------FIN DE CATEGORIAS-----------------*/

/*------------------Eventos-----------------*/

function ObtenerEventos() {
    fetch(Url +'/eventos/all').
    then(resultado=> {

        resultado.json().then(json=>{
            eventos= json;
            console.log(eventos);
            MapearEventosADMIN(eventos);
            
        })
    });


}
function MapearEventosADMIN(array) {
    let contenedor=document.getElementById('eventosadm');
    contenedor.innerHTML="";

    for (let i=0; i< eventos.length; i++) {
        contenedor.innerHTML += MapearPlantillaADMIN(array[i]);
    }
}
function MapearPlantillaADMIN(eventosadm){
    return `
    <tr>  <td>${eventosadm.eventoId}</td>  
          <td>${eventosadm.titulo}</td>
          <td>${eventosadm.descripcion}</td>
          <td>${eventosadm.categoriaId}</td>
          <td>${eventosadm.fotoUrl}</td>
          <td>
          <div class="botones">
              <div class="boton-modal">
                  <label onclick="MostrarDatosCampos(${eventosadm.eventoId})" for="btn-modal-edit"><i class="material-icons-edit" data-toggle="tooltip" title="Edit">&#xE254;</i></label>
              </div>
              <div class="boton-modal">
                  <label onclick="EliminarEventos(${eventosadm.eventoId})" for="btn-modal-delete"><i class="material-icons-delete" data-toggle="tooltip" title="Delete">&#xE872;</i></label>
              </div>
          </div>
          </td>
          </tr>`

            
}

function EliminarEventos(eid){
    fetch(Url +'/evento/' +eid, { method:"Delete" }).then(res=>{
    console.log(res);
    ObtenerEventos();
    });

}

function GuardarEvento(){
    let data = {
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        categoriaId:document.getElementById("categoria").value,
        fotoUrl: document.getElementById("url").value
    };
    if (data.titulo == "" || data.descripcion == "" || data.categoriaId == "" || data.fotoUrl == "") {
        alert("Todos los campos son obligatorios");
    } else {
    fetch(Url+"/evento", {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type":'application/json; charset=UTF-8'
        }}).then(res=>{
            ObtenerEventos();
        });
} 
}

function EditarEventos(){
    let data = {
        titulo: document.getElementById("tituloedit").value,
        descripcion: document.getElementById("descripcionedit").value,
        categoriaId:document.getElementById("categoriaedit").value,
        fotoUrl: document.getElementById("urledit").value,
        eventoId: document.getElementById("eventoid").value
    };
    if (data.titulo == "" || data.descripcion == "" || data.categoriaId == "" || data.fotoUrl == "") {
        alert("Todos los campos son obligatorios");
    } else {
    fetch(Url+"/evento", {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-type":'application/json; charset=UTF-8'
        }}).then(res=>{
            ObtenerEventos();
        });
}
}

function MostrarDatosCampos(eid){
    let evento = eventos.find(e=>e.eventoId==eid);

    document.getElementById('tituloedit').value = evento.titulo;
    document.getElementById('descripcionedit').value = evento.descripcion;
    document.getElementById('categoriaedit').value = evento.categoriaId;
    document.getElementById('urledit').value = evento.fotoUrl;
    document.getElementById('eventoid').value = evento.eventoId;
}
/*------------------FIN DE EVENTOS------------------*/


/*------------------USUARIOS------------------*/

/*--------------FIN DE USUARIOS-----------------*/

