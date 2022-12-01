let usuarios=[];
let Url = "http://localhost:8080";

function ObtenerUsuarios() {
    fetch(Url+"/usuarios/all").
    then(resultado=> {
        resultado.json().then(json=>{
            usuarios= json;
            GuardarUsuario(usuarios);
        })

    });

}

function GuardarUsuario(array){
    let data = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contrasena:document.getElementById("contrasena").value,
        contrasena2: document.getElementById("contrasena2").value
    };



    if (data.nombre != "" && data.correo != "" && data.contrasena != "" && data.contrasena != "") {
        if (data.contrasena2 == data.contrasena) {
            let doubleUser=array.filter(usuario=>usuario.correo == data.correo)
          console.log(array);
          console.log(doubleUser);
            if (doubleUser.length == 0) {
                fetch(Url+"/usuario", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers:{
                        "Content-type":'application/json; charset=UTF-8'
                    }}).then(res=>{
                       goProfile(data.correo);
                    
                    }); 
            } else {
                alert("Usuario con ese correo ya existe")
            }
         } else {
           
            alert("Las contraseñas no coinciden")

         } 
    } else {
        alert("Todos los campos son obligatorios");
    }

}


function goProfile(correo) {
window.location.href="perfil.html";
localStorage.setItem('usuario', correo)

}