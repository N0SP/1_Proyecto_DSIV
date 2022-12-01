let noticias = [];
let Url = "http://localhost:8080";

function start() {
    ObtenerNoticias();
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