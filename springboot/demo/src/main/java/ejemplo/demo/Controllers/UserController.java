package ejemplo.demo.Controllers;


import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
        public int ActualizarUsuario(@RequestBody Usuario usuario) {
            return new Productosdb().ActualizarUsuario(usuario);
        }


    }