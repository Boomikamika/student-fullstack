package PartB;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Entity
class Student {

    @Id
    @GeneratedValue
    Long id;

    String name;
    int marks;

    public Student() {
    }

    public Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }
}

interface StudentRepo extends JpaRepository<Student, Long> {
    List<Student> findByMarks(int marks);
}

@SpringBootApplication
public class Q15 {

    public static void main(String[] args) {
        SpringApplication.run(Q15.class, args);
    }

    @Bean
    CommandLineRunner run(StudentRepo repo) {
        return args -> {
            repo.save(new Student("Ravi", 80));
            repo.save(new Student("Mala", 90));
            repo.save(new Student("Kavi", 80));

            List<Student> students = repo.findByMarks(80);

            students.forEach(student ->
                    System.out.println(student.name + " " + student.marks)
            );
        };
    }
}