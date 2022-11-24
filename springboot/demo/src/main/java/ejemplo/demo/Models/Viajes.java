package ejemplo.demo.Models;

public class Viajes {
    public Viajes(int viajeId, String titulo, String descripcion, String urlimage) {
        this.viajeId = viajeId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlimage = urlimage;
    }
    private int viajeId;
    private String titulo;
    private String descripcion;
    private String urlimage;



    public int getViajeId() {
        return viajeId;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public void setViajeId(int viajeId) {
        this.viajeId = viajeId;
    }

    public String geturlimage() {
        return urlimage;
    }
    public void seturlimage(String urlimage) {
      this.urlimage=urlimage;
    }

}


