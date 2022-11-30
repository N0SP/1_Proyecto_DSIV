let usuarios = [];



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

    console.log(array);
    var usuario= array.filter(usuario=>usuario.correo == correo)
    if (usuario.length == 1) {
       console.log(usuario);
        if (usuario[0].contrasena == password){
            console.log('succes');
            showPerfil(usuario[0]);

        } else  {
            let contenedor=document.getElementById('errorlogin');
            contenedor.innerHTML=`Correo o contraseña equivocada`;

        }

    } else {
        let contenedor=document.getElementById('errorlogin');
        contenedor.innerHTML=`Correo o contraseña equivocada`;
    }
    
}

function showPerfil(usuario) {

    window.location.href="perfil.html";
    localStorage.setItem('usuario',usuario.correo)
  


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
    let correoSaved= localStorage.getItem('usuario');
    var usuario= array.filter(usuario=>usuario.correo == correoSaved)
    let contenedor=document.getElementById('nombre');
    contenedor.innerHTML=`Hola ${usuario[0].nombre} !`;

}