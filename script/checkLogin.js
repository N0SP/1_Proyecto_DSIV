function setNavbarEventos() {
    let contenedor= document.getElementById('navbar')
    console.log(localStorage.getItem('usuario'));
    if (localStorage.getItem('usuario') !=null) {
        contenedor.innerHTML= `
        <li>
        <img class="logo"src="img/logo.png" alt="">
        </li>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="about.html">Sobre nosotros</a></li>
            <li><a href="eventos.html"class="main">Eventos</a></li>
            <li><a href="noticias.html">Noticias</a></li>
            <li class="itemseperate"><a href="perfil.html">Mi perfil</a></li>
            <li><a onclick="cerrarCecionEventos()">Cerrar Sesión</a></li>
    <li>
        <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
    </li>`

    } else {
 contenedor.innerHTML= `
    <li>
    <img class="logo"src="img/logo.png" alt="">
    </li>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="about.html">Sobre nosotros</a></li>
        <li><a href="eventos.html"class="main">Eventos</a></li>
        <li><a href="noticias.html">Noticias</a></li>

        <li class="itemseperate"><a href="login.html">Iniciar sesión</a></li>
        <li><a href="registro.html">Registrarse</a></li>
<li>
    <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
</li>`
    }



}

function setNavbarNoticias() {
    let contenedor= document.getElementById('navbar')
    console.log(localStorage.getItem('usuario'));
    if (localStorage.getItem('usuario') !=null) {
        contenedor.innerHTML= `
        <li>
        <img class="logo"src="img/logo.png" alt="">
        </li>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="about.html">Sobre nosotros</a></li>
            <li><a href="eventos.html">Eventos</a></li>
            <li><a href="noticias.html" class="main">Noticias</a></li>
            <li class="itemseperate"><a href="perfil.html">Mi perfil</a></li>
            <li><a onclick="cerrarCecionNoticias()">Cerrar Sesión</a></li>
    <li>
        <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
    </li>`

    } else {
 contenedor.innerHTML= `
    <li>
    <img class="logo"src="img/logo.png" alt="">
    </li>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="about.html">Sobre nosotros</a></li>
        <li><a href="eventos.html">Eventos</a></li>
        <li><a href="noticias.html" class="main">Noticias</a></li>
        <li class="itemseperate"><a href="login.html">Iniciar sesión</a></li>
        <li><a href="registro.html">Registrarse</a></li>
<li>
    <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
</li>`
    }



}

function setNavbarBusqueda() {
    let contenedor= document.getElementById('navbar')
    console.log(localStorage.getItem('usuario'));
    if (localStorage.getItem('usuario') !=null) {
        contenedor.innerHTML= `
        <li>
        <img class="logo"src="img/logo.png" alt="">
        </li>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="about.html">Sobre nosotros</a></li>
            <li><a href="eventos.html">Eventos</a></li>
            <li><a href="noticias.html" >Noticias</a></li>
            <li class="itemseperate"><a href="perfil.html">Mi perfil</a></li>
            <li><a onclick="cerrarCecionBusqueda()">Cerrar Sesión</a></li>
    <li>
        <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
    </li>`

    } else {
 contenedor.innerHTML= `
    <li>
    <img class="logo"src="img/logo.png" alt="">
    </li>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="about.html">Sobre nosotros</a></li>
        <li><a href="eventos.html">Eventos</a></li>
        <li><a href="noticias.html" >Noticias</a></li>
        <li class="itemseperate"><a href="login.html">Iniciar sesión</a></li>
        <li><a href="registro.html">Registrarse</a></li>
<li>
    <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
</li>`
    }



}

function setNavbarInicio() {
    let contenedor= document.getElementById('navbar')
    console.log(localStorage.getItem('usuario'));
    if (localStorage.getItem('usuario') !=null) {
        contenedor.innerHTML= `
        <li>
        <img class="logo"src="img/logo.png" alt="">
        </li>
            <li><a href="index.html" class="main">Inicio</a></li>
            <li><a href="about.html">Sobre nosotros</a></li>
            <li><a href="eventos.html">Eventos</a></li>
            <li><a href="noticias.html" >Noticias</a></li>
            <li class="itemseperate"><a href="perfil.html">Mi perfil</a></li>
            <li><a onclick="cerrarCecionInicio()">Cerrar Sesión</a></li>
    <li>
        <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
    </li>`

    } else {
 contenedor.innerHTML= `
    <li>
    <img class="logo"src="img/logo.png" alt="">
    </li>
        <li><a href="index.html" class="main">Inicio</a></li>
        <li><a href="about.html">Sobre nosotros</a></li>
        <li><a href="eventos.html">Eventos</a></li>
        <li><a href="noticias.html" >Noticias</a></li>
        <li class="itemseperate"><a href="login.html">Iniciar sesión</a></li>
        <li><a href="registro.html">Registrarse</a></li>
<li>
    <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
</li>`
    }



}

function setNavbarAbout() {
    let contenedor= document.getElementById('navbar')
    console.log(localStorage.getItem('usuario'));
    if (localStorage.getItem('usuario') !=null) {
        contenedor.innerHTML= `
        <li>
        <img class="logo"src="img/logo.png" alt="">
        </li>
            <li><a href="index.html" >Inicio</a></li>
            <li><a href="about.html" class="main">Sobre nosotros</a></li>
            <li><a href="eventos.html">Eventos</a></li>
            <li><a href="noticias.html" >Noticias</a></li>
            <li class="itemseperate"><a href="perfil.html">Mi perfil</a></li>
            <li><a onclick="cerrarCecionAbout()">Cerrar Sesión</a></li>
    <li>
        <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
    </li>`

    } else {
 contenedor.innerHTML= `
    <li>
    <img class="logo"src="img/logo.png" alt="">
    </li>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="about.html" class="main">Sobre nosotros</a></li>
        <li><a href="eventos.html">Eventos</a></li>
        <li><a href="noticias.html" >Noticias</a></li>
        <li class="itemseperate"><a href="login.html">Iniciar sesión</a></li>
        <li><a href="registro.html">Registrarse</a></li>
<li>
    <a href="busqueda.html"><img src="img/search.png" class="search" alt=""></a> 
</li>`
    }



}

function cerrarCecionEventos(){
    localStorage.removeItem('usuario');
    setNavbarEventos();

}


    function cerrarCecionNoticias(){
        localStorage.removeItem('usuario');
        setNavbarNoticias();
    
    }

    function cerrarCecionBusqueda(){
        localStorage.removeItem('usuario');
        setNavbarBusqueda();
    
    }

    function cerrarCecionInicio(){
        localStorage.removeItem('usuario');
        setNavbarInicio();
    
    }

    function cerrarCecionAbout(){
        localStorage.removeItem('usuario');
        setNavbarAbout();
    
    }

    