let eventos = [];
let Url = "http://localhost:8080";
function start() {
    ObtenerEventos();
}
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
