package ejemplo.demo.Controllers;
import java.util.List;
import org.springframework.web.bind.annotation.*;
import ejemplo.demo.Models.About;
import ejemplo.demo.Services.Productosdb;


@RestController
public class AboutUsController {
    @GetMapping("aboutus/all")
    public List<About> obtenerTodosAbouts() {
        return new Productosdb().ObtenerAboutUs();
    }
    
}
