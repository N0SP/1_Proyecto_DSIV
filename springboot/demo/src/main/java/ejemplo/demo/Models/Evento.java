package ejemplo.demo.Models;

public class Evento {
 
 
    private int eventoId;
    private String titulo;
    private String descripcion;
    private int categoriaId;
    private String categoriaNombre;


public Evento(int eventoId, String titulo, String descripcion, int categoriaId, String categoriaNombre) {
    this.eventoId = eventoId;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.categoriaId = categoriaId;
    this.categoriaNombre=categoriaNombre;
}

public int getEventoId() {
    return eventoId;
}

public void setEventoId(int eventoId) {
    this.eventoId = eventoId;
}

public String getTitulo() {
    return titulo;
}

public void setTitulo(String titulo) {
    this.titulo = titulo;
}

public String getDescripcion() {
    return descripcion;
}

public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
}

public int getCategoriaId() {
    return categoriaId;
}

public void setCategoriaId(int categoriaId) {
    this.categoriaId = categoriaId;
}

public String getCategoriaNombre() {
    return categoriaNombre;
}

public void setCategoriaNombre(String categoriaNombre) {
    this.categoriaNombre = categoriaNombre;
}

}