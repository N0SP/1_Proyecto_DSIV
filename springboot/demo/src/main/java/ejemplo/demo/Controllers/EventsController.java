package ejemplo.demo.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ejemplo.demo.Models.Productos;
import ejemplo.demo.Models.Evento;
import ejemplo.demo.Models.Noticia;
import ejemplo.demo.Models.Categoria;
import ejemplo.demo.Services.Productosdb;



@RestController 
    public class EventsController {
        @DeleteMapping("/evento/{eventoId}")
        public int Delete(@PathVariable("eventoId") int eventoId){
            return new Productosdb().EliminarEventos(eventoId);
        }

        @GetMapping("eventos/all")
        public List<Evento> ObtenerTodosEventos() {
            return new Productosdb().ObtenerEventos();
        }

        @PostMapping("/evento")
        public int InsertarEvento(@RequestBody Evento evento){
            return new Productosdb().GuardarEvento(evento);
        }

        @PutMapping("/evento")
        public int ActualizarEvento(@RequestBody Evento evento) {
            return new Productosdb().ActualizarEvento(evento);
        }
    }
