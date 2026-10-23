package task13jpa;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StudentRepository
        extends JpaRepository<Student, Integer> {

    List<Student> findByDepartment(String department);

    List<Student> findByMarksGreaterThan(int marks);

    List<Student> findTop3ByOrderByMarksDesc();
}
