package ejemplo.demo.Services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDb() {
        try {
        Class.forName("org.mariadb.jdbc.Driver");
         return DriverManager.getConnection("jdbc:mariadb://localhost:3306/deportes", "root", "contraseña");
        } catch(SQLException e) {
            System.out.println("Error de conexion");
            int x=1;
        } catch(ClassNotFoundException cnfx) {
            System.out.println("ERROR EN LA CLASE DE CONEXION");
            int x=1;
        }
    
    return null;
    }
    
}
