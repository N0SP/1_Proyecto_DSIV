let aboutus = [];
let Url = "http://localhost:8080";


/*------------------ABOUTUS-----------------*/
function ObtenerAboutUs() {
    
        fetch(Url +'/aboutus/all').
        then(resultado=> {
    
            resultado.json().then(json=>{
                aboutus= json;
                MapearAboutUs(aboutus);
                
            })
        });
}

function MapearAboutUs(array) {
    let contenedor=document.getElementById('aboutus');
    contenedor.innerHTML="";
    
    for (let i=0; i< aboutus.length; i++) {
        contenedor.innerHTML += MapearPlantilla(array[i]);
    }
}

function MapearPlantilla(aboutus){
    return `<section class="card">
    <h2>${aboutus.nombre}</h2>
    <section class="card-img">
    <img src="${aboutus.fotoUrl}" alt="">
    </section>
    <p>Edad: ${aboutus.edad}</p>
    <h3>Carrera</h3>
    <p>${aboutus.carrera}</p>
    <h3>Sobre mí</h3>
    <p>${aboutus.descripcion}</p>
</section>`
    
            
}
