package ejemplo.demo.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import ejemplo.demo.Models.Usuario;
import ejemplo.demo.Services.Productosdb;


@RestController 
    public class UserController {
       

        @GetMapping("usuarios/all")
        public List<Usuario> ObtenerTodosReportes() {
            return new Productosdb().ObtenerUsuarios();
        }

        @PostMapping("/usuario")
        public int InsertarUsuario(@RequestBody Usuario usuario){
            return new Productosdb().GuardarUsuario(usuario);
        }

        @PutMapping("/usuario")
        public int ActualizarUsuario(@RequestBody Usuario usuario){
            return new Productosdb().ActualizarUsuario(usuario);
        }

        @DeleteMapping("/usuario/{userId}")
        public int Delete(@PathVariable("userId") int userId){
            return new Productosdb().EliminarUsuario(userId);
        }


    }