package ejemplo.demo.Controllers;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import ejemplo.demo.Models.Reporte;
import ejemplo.demo.Services.Productosdb;


@RestController 
    public class ReportesController {
       

        @GetMapping("reportes/all")
        public List<Reporte> ObtenerTodosReportes() {
            return new Productosdb().ObtenerReportes();
        }


    }