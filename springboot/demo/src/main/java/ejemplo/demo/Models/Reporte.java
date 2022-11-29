package ejemplo.demo.Models;

import java.util.Date;

public class Reporte {



    private String accion;
    private String date;
    private String titulo;
    private int categoriaId;
    private String categoriaNombre;

  
    public Reporte( String accion, String date, String titulo, int categoriaId, String categoriaNombre) {
 
        this.accion = accion;
        this.date = date;
        this.titulo = titulo;
        this.categoriaId=categoriaId;
        this.categoriaNombre = categoriaNombre;
    }
  
    

    public String getAccion() {
        return accion;
    }
    public void setAccion(String accion) {
        this.accion = accion;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getCategoriaNombre() {
        return categoriaNombre;
    }
    public void setCategoriaNombre(String categoriaNombre) {
        this.categoriaNombre = categoriaNombre;
    }



    public int getCategoriaId() {
        return categoriaId;
    }



    public void setCategoriaId(int categoriaId) {
        this.categoriaId = categoriaId;
    }
    
}
