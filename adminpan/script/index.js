let reportes = [];


function ObtenerReportes() {
    fetch('http://localhost:8080/reportes/all').
    then(resultado=> {
        resultado.json().then(json=>{
            reportes= json;
            console.log(reportes);
            MapearReportes(reportes);
        })

    });

}

function MapearReportes(array) {
    let contenedor=document.getElementById('reportes');
    contenedor.innerHTML= `    <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Acción</th>
                                        <th>Titulo</th>
                                        <th>Categoria</th>
                                    </tr>
                                </thead>
                            <tbody>`
    for (let i=0; i< array.length; i++) {
        contenedor.innerHTML += MapearPlantilla(array[i]);
    }
    contenedor.innterHTML=" </tbody>"
}

function MapearPlantilla(reporte){
    return `    <tr>
                    <td class="reporte">${reporte.date}</td>
                    <td class="reporte">${reporte.accion}</td>
                    <td class="reporte">${reporte.titulo}</td>
                    <td class="reporte">${reporte.categoriaNombre}</td>
                </tr>`
          

            
}

