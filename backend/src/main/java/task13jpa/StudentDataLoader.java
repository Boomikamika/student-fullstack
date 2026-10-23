package task13jpa;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class StudentDataLoader {

    @Bean
    CommandLineRunner run(StudentRepository repo) {
        return args -> {
            repo.save(new Student("thara", "thara@gmail.com", "CSE", 90.0));

            repo.save(new Student("nivi", "nivi@gmail.com", "IT", 85.0));

            repo.save(new Student("suraj", "suraj@gmail.com", "ECE", 78.0));

            repo.save(new Student("sandy", "sandy@gmail.com", "CSE", 95.0));

            repo.save(new Student("mika", "mika@gmail.com", "IT", 72.0));

            repo.save(new Student("hari", "hari@gmail.com", "ECE", 88.0));


            System.out.println("\n--- ALL STUDENTS ---");
            repo.findAll().forEach(System.out::println);

            System.out.println("\n--- CSE STUDENTS ---");
            repo.findByDepartment("CSE")
                    .forEach(System.out::println);

            System.out.println("\n--- MARKS GREATER THAN 80 ---");
            repo.findByMarksGreaterThan(80)
                    .forEach(System.out::println);

            System.out.println("\n--- TOP 3 STUDENTS ---");
            repo.findTop3ByOrderByMarksDesc()
                    .forEach(System.out::println);
        };
    }
}