let usuarios = [];
let Url = "http://localhost:8080";
function start() {
    ObtenerUsuarios();
}
/*------------------USUARIOS-----------------*/
function ObtenerUsuarios() {
    fetch(Url +'/usuarios/all').
    then(resultado=> {

        resultado.json().then(json=>{
            usuarios= json;
            console.log(usuarios);
            MapearUsuariosADMIN(usuarios);
            
        })
    });

}

function MapearUsuariosADMIN(array) {
    let contenedor=document.getElementById('usuariosadm');
    contenedor.innerHTML="";

    for (let i=0; i< usuarios.length; i++) {
        contenedor.innerHTML += MapearPlantillaADMIN(array[i]);
    }
}

function MapearPlantillaADMIN(usuariosadm){
    return `
    <tr>  <td>${usuariosadm.userId}</td>  
          <td>${usuariosadm.nombre}</td>
          <td>${usuariosadm.correo}</td>
          <td>${usuariosadm.contrasena}</td>
          <td>
          <div class="botones">
              <div class="boton-modal">
                  <label onclick="MostrarDatosCampos(${usuariosadm.userId})" for="btn-modal-edit"><i class="material-icons-edit" data-toggle="tooltip" title="Edit">&#xE254;</i></label>
              </div>
              <div class="boton-modal">
                  <label onclick="EliminarUsuarios(${usuariosadm.userId})" for="btn-modal-delete"><i class="material-icons-delete" data-toggle="tooltip" title="Delete">&#xE872;</i></label>
              </div>
          </div>
          </td>
          </tr>`

            
}

function EliminarUsuarios(uid){
    fetch(Url +'/usuario/' +uid, { method:"Delete" }).then(res=>{
    console.log(res);
    ObtenerUsuarios();
    });

}

function EditarUsuario(){
    let data = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contrasena:document.getElementById("contrasena").value,
        userId: document.getElementById("userId").value
    };
    if(data.nombre=="" || data.correo=="" || data.contrasena==""){
        alert("Todos los campos son obligatorios");
    }else{
    fetch(Url+"/usuario", {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-type":'application/json; charset=UTF-8'
        }}).then(res=>{
            ObtenerUsuarios();
        });
} 
}

function MostrarDatosCampos(uid){
    let usuario = usuarios.find(u=>u.userId==uid);

    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("correo").value = usuario.correo;
    document.getElementById("contrasena").value = usuario.contrasena;
    document.getElementById("userId").value = usuario.userId;

}
/*------------------FIN DE USUARIOS-----------------*/