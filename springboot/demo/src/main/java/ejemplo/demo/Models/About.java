package ejemplo.demo.Models;

public class About {

    private int ID;
    private String Nombre;
    private int Edad;
    private String Carrera;
    private String Descripcion;
    private String fotoUrl;
        


    public About(int iD, String nombre, int edad, String carrera, String descripcion, String fotoUrl) {
        ID = iD;
        Nombre = nombre;
        Edad = edad;
        Carrera = carrera;
        Descripcion = descripcion;
        this.fotoUrl = fotoUrl;
    }
    
    public int getID() {
        return ID;
    }
    public void setID(int iD) {
        ID = iD;
    }
    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public int getEdad() {
        return Edad;
    }

    public void setEdad(int edad) {
        Edad = edad;
    }

    public String getCarrera() {
        return Carrera;
    }

    public void setCarrera(String carrera) {
        Carrera = carrera;
    }

    public String getDescripcion() {
        return Descripcion;
    }
    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }
    public String getFotoUrl() {
        return fotoUrl;
    }
    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }
    
}
