//package task13jpa;
//
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//@Configuration
//public class EmployeeDataLoader {
//
//    @Bean
//    CommandLineRunner loadEmployees(EmployeeService service) {
//        return args -> {
//            if (service.getAll().isEmpty()) {
//                service.create(new Employee("Arun", "IT", 45000));
//                service.create(new Employee("Priya", "HR", 35000));
//                service.create(new Employee("Kavin", "IT", 55000));
//                service.create(new Employee("Meena", "Finance", 40000));
//            }
//        };
//    }
//}
