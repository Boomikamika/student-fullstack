package PartB;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Service
class PriceService {
    int price() {
        return 100;
    }
}

@Service
class OrderHelper {
    private final PriceService ps;

    OrderHelper(PriceService ps) {
        this.ps = ps;
    }

    int total() {
        return ps.price() * 2;
    }
}

@RestController
class OrderController {
    private final OrderHelper helper;

    OrderController(OrderHelper helper) {
        this.helper = helper;
    }

    @GetMapping("/order")
    String order() {
        return "Total: " + helper.total();
    }
}

@SpringBootApplication
public class Q16 {
    public static void main(String[] args) {
        SpringApplication.run(Q16.class, args);
    }
}
