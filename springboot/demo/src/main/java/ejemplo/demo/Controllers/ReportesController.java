package ejemplo.demo.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ejemplo.demo.Models.Reporte;
import ejemplo.demo.Services.Productosdb;



@RestController 
    public class ReportesController {
       

        @GetMapping("reportes/all")
        public List<Reporte> ObtenerTodosReportes() {
            return new Productosdb().ObtenerReportes();
        }


    }