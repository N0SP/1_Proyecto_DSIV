package ejemplo.demo.Models;

public class Usuario {


    private int userId;
    private String nombre;
    private String correo;
    private String contrasena;

    public Usuario(int userId, String nombre, String correo, String contrasena) {
        this.userId = userId;
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }

      
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

}
