package ejemplo.demo.Models;

public class Productos {
    private int productId;
    private String nombre;
    private int precio;
    private String foto;


public Productos(int productID, String nombre, int precio, String foto) {
    this.setProductId(productID);
    this.nombre=nombre;
    this.precio=precio;
    this.foto=foto;
}
  

    public int getProductId() {
    return productId;
}


public void setProductId(int productId) {
    this.productId = productId;
}


    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPrecio() {
        return precio;
    }
    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public String getFoto() {
        return foto;
    }
    public void setFoto(String foto) {
        this.foto = foto;
    }

}
