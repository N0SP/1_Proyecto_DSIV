package ejemplo.demo.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import ejemplo.demo.Models.Productos;
import ejemplo.demo.Models.Viajes;
import ejemplo.demo.Models.Noticia;
import ejemplo.demo.Models.Evento;
import ejemplo.demo.Models.Categoria;


public class Productosdb {
    Connection _cn;

    public Productosdb() {
        _cn = new Conexion().openDb();
    }

    public List<Productos> ObtenerProductos() {
        try {
           Statement stmt = _cn.createStatement();
            String query = "SELECT * FROM productos";

            List<Productos> productos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Productos producto = new Productos(
                    result.getInt("ProductID"),
                    result.getString("Nombre"),
                    result.getInt("Precio"),
                    result.getString("Foto")
        );
                productos.add(producto);
             }
             result.close();
             stmt.close();
             return productos;


        } catch (Exception e) {
            int x= 1;
        }
        return null;
    }

    public int GuardarProductos(Productos producto){
        int resultado=0;

        try {
            Statement stm = _cn.createStatement();
            String query ="Call InsertTheProduct('"
            +producto.getNombre()+"','"+producto.getPrecio()+"','"+producto.getFoto()+"')";

            resultado=stm.executeUpdate(query);
        } catch(Exception e) {
            int x=1;

        }
        return resultado;

    }

    public int EliminarProductos(int productID) {
        int resultado = 0;

        try {
            Statement stmt = _cn.createStatement();
            String query = "Call DeleteProduct("+productID+")";
            return stmt.executeUpdate(query);
        } catch(Exception e) {
            int x=1;

        }
        return resultado;

    }

    public int ActualizarProductos(Productos producto){
        int resultado=0;

        try {
            Statement stm = _cn.createStatement();
            String query ="Call UpdateProduct(" +producto.getProductId()+",'" +producto.getNombre()+"','"+producto.getPrecio()+"','"+producto.getFoto()+"')";

            resultado=stm.executeUpdate(query);

        } catch(Exception e) {
            int x=1;

        }
        return resultado;

    }


    public List<Viajes> ObtenerViajes() {
        try {
           Statement stmt = _cn.createStatement();
            String query = "SELECT * FROM viaje";

            List<Viajes> viajes = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Viajes viaje = new Viajes(
                    result.getInt("viajeID"),
                    result.getString("titulo"),
                    result.getString("descripcion"),
                    result.getString("urlimage")
        );
                viajes.add(viaje);
             }
             result.close();
             stmt.close();
             return viajes;


        } catch (Exception e) {
            int x= 1;
        }
        return null;
    }

    public List<Noticia> ObtenerNoticias() {
        try {
           Statement stmt = _cn.createStatement();
            String query = "SELECT noticiaID,titulo, descripcion,categoria.categoriaID,nombre,contenido,fotoUrl FROM categoria JOIN noticia on categoria.categoriaID=noticia.categoriaID";
            List<Noticia> noticias = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Noticia noticia = new Noticia(
                    result.getInt("noticiaID"), 
                    result.getString("titulo"),
                   result.getString("descripcion"),
                   result.getInt("categoriaID"),
                   result.getString("nombre"),
                   result.getString("contenido"),
                   result.getString("fotoUrl")
                    );
                noticias.add(noticia);
             }

             result.close();
             stmt.close();
             return noticias;


        } catch (Exception e) {
            int x= 1;
        }
        return null;
    }


    public List<Evento> ObtenerEventos() {
        try {
           Statement stmt = _cn.createStatement();
            String query = "SELECT eventoID,titulo, descripcion,categoria.categoriaID,nombre, fotoUrl FROM categoria JOIN evento on categoria.categoriaID=evento.categoriaID";
            List<Evento> eventos = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Evento evento = new Evento(
                    result.getInt("eventoID"), 
                    result.getString("titulo"),
                   result.getString("descripcion"),
                   result.getInt("categoriaID"),
                   result.getString("nombre"),
                   result.getString("fotoUrl")
                    );
                eventos.add(evento);
             }

             result.close();
             stmt.close();
             return eventos;


        } catch (Exception e) {
            int x= 1;
        }
        return null;
    }

    public List<Categoria> ObtenerCategorias() {
        try {
           Statement stmt = _cn.createStatement();
            String query = "SELECT * FROM categoria";
            List<Categoria> categorias = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Categoria categoria = new Categoria(
                    result.getInt("categoriaID"), 
                    result.getString("nombre")
                    );
                categorias.add(categoria);
             }

             result.close();
             stmt.close();
             return categorias;


        } catch (Exception e) {
            int x= 1;
        }
        return null;
    }

    public Noticia ObtenerNoticia(int noticiaId) {

        try {
            Statement stmt = _cn.createStatement();
            String query = "Call GetNoticia("+noticiaId+")";
            ResultSet result = stmt.executeQuery(query);
            if(result.next()) {
            Noticia noticia = new Noticia(
                    result.getInt("noticiaID"), 
                    result.getString("titulo"),
                   result.getString("descripcion"),
                   result.getInt("categoriaID"),
                   result.getString("nombre"),
                   result.getString("contenido"),
                   result.getString("fotoUrl")
                );
            
                result.close();
                stmt.close();
                return noticia;
        }
        } catch(Exception e) {
            int x=1;

        }
        return null;

    }

    public int EliminarEventos(int eventoId) {
        int resultado = 0;

        try {
            Statement stmt = _cn.createStatement();
            String query = "Call DeleteEvento("+eventoId+")";
            return stmt.executeUpdate(query);
        } catch(Exception e) {
            int x=1;

        }
        return resultado;

    }

    public int EliminarNoticias(int noticiaId) {
        int resultado = 0;

        try {
            Statement stmt = _cn.createStatement();
            String query = "Call DeleteNoticia("+noticiaId+")";
            return stmt.executeUpdate(query);
        } catch(Exception e) {
            int x=1;

        }
        return resultado;

    }

    public int GuardarEvento(Evento evento){
        int resultado=0;

        try {
            Statement stm = _cn.createStatement();
            String query ="Call InsertarEvento('"
            +evento.getTitulo()+"','"+evento.getDescripcion()+"',"+evento.getCategoriaId()+" ,'"+evento.getFotoUrl()+"')";

            resultado=stm.executeUpdate(query);
        } catch(Exception e) {
            int x=1;

        }
        return resultado;

    }

    public int GuardarNoticia(Noticia noticia){
        int resultado=0;

        try {
            Statement stm = _cn.createStatement();
            String query ="Call InsertarNoticia('"
            +noticia.getTitulo()+"','"+noticia.getDescripcion()+"',"+noticia.getCategoriaId()+" ,'"+noticia.getFotoUrl()+"','"+noticia.getContenido()+"')";

            resultado=stm.executeUpdate(query);
        } catch(Exception e) {
            int x=1;

        }
        return resultado;

    }

    public int ActualizarEvento(Evento evento){
        int resultado=0;

        try {
            Statement stm = _cn.createStatement();
            String query ="Call UpdateEvento(" +evento.getEventoId()+",'"
            +evento.getTitulo()+"','"+evento.getDescripcion()+"',"+evento.getCategoriaId()+" ,'"+evento.getFotoUrl()+"')";;

            resultado=stm.executeUpdate(query);

        } catch(Exception e) {
            int x=1;

        }
        return resultado;

    }



    

    
} 
