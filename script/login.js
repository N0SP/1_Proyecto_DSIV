let usuarios = [];
let Url = "http://localhost:8080";



function findUser(){

    fetch('http://localhost:8080/usuarios/all').
    then(resultado=> {
        resultado.json().then(json=>{
            usuarios= json;
            checkUser(usuarios);
        })

    });

}

function checkUser(array) {

     var correo= document.getElementById('correo').value
    var password= document.getElementById('contrasena').value

if (correo !="" && password !="") {
    
        var usuario= array.filter(usuario=>usuario.correo == correo)
        if (usuario.length == 1) {
        console.log(usuario);
            if (usuario[0].contrasena == password){
                showPerfil(usuario[0]);

            } else  {
                let contenedor=document.getElementById('errorlogin');
                contenedor.innerHTML=`Correo o contraseña equivocada`;

            }

        } else {
            let contenedor=document.getElementById('errorlogin');
            contenedor.innerHTML=`Correo o contraseña equivocada`;
        }
    
    } else {
      alert('Debe llenar todos los campos');
    }



}

function showPerfil(usuario) {

    window.location.href="perfil.html";
    localStorage.setItem('usuario',usuario.userId)
  


}

function getUser(){


    fetch('http://localhost:8080/usuarios/all').
    then(resultado=> {
        resultado.json().then(json=>{
            usuarios= json;
         myData(usuarios)
        })
    
    });

}


function myData(array) {
    let idSaved= localStorage.getItem('usuario');
    var usuario= array.filter(usuario=>usuario.userId == idSaved || usuario.correo==idSaved);
    localStorage.setItem('usuario', usuario[0].userId);
    let contenedor=document.getElementById('nombre');
    contenedor.innerHTML=`¡Hola ${usuario[0].nombre}!`;



    let contenedorName=document.getElementById('nombreUs');
    contenedorName.innerHTML=` 
     <div>
        <label for="userName">Nombre de usuario</label>
        <input type="text" id="nombre2" placeholder="${usuario[0].nombre}" name="userName">
    </div>

     <button onclick="cambiarNombre(${usuario[0].userId},'${usuario[0].correo}','${usuario[0].contrasena}')">Cambiar</button>`



     let contenedorCorreo=document.getElementById('correo');
     contenedorCorreo.innerHTML=`
            <div>
            <label for="mail">Correo</label>
            <input type="text" id="correoField" placeholder="${usuario[0].correo}" name="mail">
            </div>
            
        
            <button onclick="cambiarCorreo(${usuario[0].userId},'${usuario[0].nombre}','${usuario[0].contrasena}')">Cambiar</button>`


   let contenedorPass=document.getElementById('contrasen');
    contenedorPass.innerHTML=`

        <div>
        <label for="password">Contraseña</label>
        <input type="password" id="pass"name="password">
        </div>

        <button onclick="cambiarContrasena(${usuario[0].userId},'${usuario[0].nombre}','${usuario[0].correo}')">Cambiar</button>`

}


    function cambiarNombre(id1,correo,contrasena) {

       let nombreNew= document.getElementById('nombre2').value;
 
      
        let data = {
            userId: id1,
            nombre: nombreNew,
            correo: correo,
            contrasena: contrasena,
        };

  
     
        fetch(Url+"/usuario", {
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                "Content-type":'application/json; charset=UTF-8'
            }}).then(res=>{
                alert('Nombre cambiado')
               getUser();
            });

    }

    function cambiarCorreo(id1,nombre,contrasena) {
        let correoNew = document.getElementById('correoField').value;
        console.log(correoNew);

        let data = {
            userId: id1,
            nombre: nombre,
            correo: correoNew,
            contrasena: contrasena,
        };

  
     
        fetch(Url+"/usuario", {
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                "Content-type":'application/json; charset=UTF-8'
            }}).then(res=>{
                alert('Correo cambiado')
               getUser();
            });
    }

    function cambiarContrasena(id1,nombre,correo) {
        let passNew = document.getElementById('pass').value;
        console.log(passNew);

        let data = {
            userId: id1,
            nombre: nombre,
            correo: correo,
            contrasena: passNew,
        };


     
       fetch(Url+"/usuario", {
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                "Content-type":'application/json; charset=UTF-8'
            }}).then(res=>{
                alert('Contraseña cambiado')
               getUser();
            });
    }






