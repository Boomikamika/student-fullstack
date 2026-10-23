package PartB;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

class Product {
    private int id = 1;
    private String name = "Pen";

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}

@RestController
class ProductController {

    @GetMapping("/product")
    public Product get() {
        return new Product();
    }
}

@SpringBootApplication
public class Q13 {

    public static void main(String[] args) {
        SpringApplication.run(Q13.class, args);
    }
}
