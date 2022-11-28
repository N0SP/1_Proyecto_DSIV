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
import ejemplo.demo.Models.Noticia;
import ejemplo.demo.Models.Categoria;
import ejemplo.demo.Services.Productosdb;

@RestController
public class ProductosController {
    @GetMapping("productos/all")
    public List<Productos> ObtenerTodosProductos() {
        return new Productosdb().ObtenerProductos();
    }
    @PostMapping("/producto")
    public int InsertTheProduct(@RequestBody Productos producto){
        return new Productosdb().GuardarProductos(producto);
    }

    @DeleteMapping("/producto/{ProductID}")
        public int Delete(@PathVariable("ProductID") int productID){
            return new Productosdb().EliminarProductos(productID);
        }

    @PutMapping("/producto")
    public int ActualizarProductos(@RequestBody Productos producto) {
        return new Productosdb().ActualizarProductos(producto);
    }

    @GetMapping("categorias/all")
    public List<Categoria> ObtenerTodosCategorias() {
        return new Productosdb().ObtenerCategorias();
    }

    

    
}


