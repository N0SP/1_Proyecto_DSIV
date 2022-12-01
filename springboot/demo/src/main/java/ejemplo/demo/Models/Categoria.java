package ejemplo.demo.Models;

public class Categoria {
  


    private int categoriaId;
    private String nombre;


        public Categoria(int categoriaId, String nombre) {
            this.categoriaId = categoriaId;
            this.nombre = nombre;
        }

        public int getCategoriaId() {
            return categoriaId;
        }

        public void setCategoriaId(int categoriaId) {
            this.categoriaId = categoriaId;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        
}