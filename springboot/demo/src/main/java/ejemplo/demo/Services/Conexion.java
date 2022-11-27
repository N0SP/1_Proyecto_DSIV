package ejemplo.demo.Services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDb() {
        try {
        Class.forName("org.mariadb.jdbc.Driver");
         return DriverManager.getConnection("jdbc:mariadb://localhost:3306/deportes", "ellu_user", "password");
        } catch(SQLException e) {
            int x=1;
        } catch(ClassNotFoundException cnfx) {
            int x=1;
        }
    
    return null;
    }
    
}
