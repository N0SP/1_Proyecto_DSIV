package ejemplo.demo.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import ejemplo.demo.Models.Noticia;
import ejemplo.demo.Services.Productosdb;



@RestController
public class NoticiasController {
    @GetMapping("noticia/{noticiaId}")
    public Noticia Get(@PathVariable("noticiaId") int noticiaId){
        return new Productosdb().ObtenerNoticia(noticiaId);
    }


    @GetMapping("noticias/all")
    public List<Noticia> ObtenerTodosNoticias() {
        return new Productosdb().ObtenerNoticias();
    }

    @DeleteMapping("/noticia/{noticiaId}")
    public int Delete(@PathVariable("noticiaId") int noticiaId){
        return new Productosdb().EliminarNoticias(noticiaId);
    }

    @PostMapping("/noticia")
    public int InsertarEvento(@RequestBody Noticia noticia){
        return new Productosdb().GuardarNoticia(noticia);
    }

    @PutMapping("/noticia")
    public int ActualizarNoticia(@RequestBody Noticia noticia){
        return new Productosdb().ActualizarNoticias(noticia);
    }
  
}
