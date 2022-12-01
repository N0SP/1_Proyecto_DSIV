let categorias = [];
let Url = "http://localhost:8080";

function start() {
    ObtenerCategorias();
}

/*------------------CATEGORIAS-----------------*/
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

    for (let i=0; i< categorias.length; i++) {
        contenedor.innerHTML += MapearPCategoriasADMIN(array[i]);
    }
}
function MapearPCategoriasADMIN(categoriasadm){
    return `
    <tr>  <td>${categoriasadm.categoriaId}</td>
          <td>${categoriasadm.nombre}</td>
          <td>
          <div class="botones">
          <div class="boton-modal">
          <label onclick="MostrarDatosCampos(${categoriasadm.categoriaId})" for="btn-modal-edit"><i class="material-icons-edit" data-toggle="tooltip" title="Edit">&#xE254;</i></label>
      </div>
          </div>
          </td>
          </tr>`
            
}

function GuardarCategoria(){
    let data = {
        nombre: document.getElementById("nombre").value
    };
   if (data.nombre == "") {
       alert("Escriba un nombre a La categoria");
   } else {
    fetch(Url+"/categoria", {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type":'application/json; charset=UTF-8'
        }}).then(res=>{
            ObtenerCategorias();
        });
}
}

function EditarCategorias(){
    let data = {
        nombre: document.getElementById("nombreedit").value,
        categoriaId: document.getElementById("categoriaid").value
    };
   if (data.nombre == "") {
       alert("Escriba un nombre a La categoria");
   } else {
    fetch(Url+"/categoria", {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-type":'application/json; charset=UTF-8'
        }}).then(res=>{
            ObtenerCategorias();
        });
}
}

function MostrarDatosCampos(cid){
    let categoria = categorias.find(c=>c.categoriaId==cid);

    document.getElementById('nombreedit').value = categoria.nombre;
    document.getElementById('categoriaid').value = categoria.categoriaId;
}
