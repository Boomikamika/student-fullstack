package PartB;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
class OrderService {

    private final PaymentService paymentService;

    OrderService(@Lazy PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void placeOrder() {
        System.out.println("Order placed");
        paymentService.processPayment();
    }
}

@Service
class PaymentService {

    private final OrderService orderService;

    PaymentService(OrderService orderService) {
        this.orderService = orderService;
    }

    public void processPayment() {
        System.out.println("Payment processed");
    }
}

@SpringBootApplication
public class Q12 {

    public static void main(String[] args) {
        var context = SpringApplication.run(Q12.class, args);

        OrderService orderService =
                context.getBean(OrderService.class);

        orderService.placeOrder();

        context.close();
    }
}