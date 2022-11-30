package ejemplo.demo.Controllers;



import java.util.List;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import ejemplo.demo.Models.Categoria;
import ejemplo.demo.Services.Productosdb;


@RestController 
public class CategoriasController {
    @GetMapping("categorias/all")
    public List<Categoria> obtenerTodosCategorias() {
        return new Productosdb().ObtenerCategorias();
    }
}
