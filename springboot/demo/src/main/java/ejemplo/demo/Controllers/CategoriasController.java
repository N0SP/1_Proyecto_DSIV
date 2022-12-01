package ejemplo.demo.Controllers;



import java.util.List;


import org.springframework.web.bind.annotation.*;
import ejemplo.demo.Models.Categoria;
import ejemplo.demo.Services.Productosdb;


@RestController 
public class CategoriasController {
    @GetMapping("categorias/all")
    public List<Categoria> obtenerTodosCategorias() {
        return new Productosdb().ObtenerCategorias();
    }

    @PostMapping("/categoria")
    public int GuardarCategoria(@RequestBody Categoria categoria){
        return new Productosdb().GuardarCategoria(categoria);
    }

    @PutMapping("/categoria")
    public int ActualizarCategoria(@RequestBody Categoria categoria) {
        return new Productosdb().ActualizarCategoria(categoria);
    }

}
