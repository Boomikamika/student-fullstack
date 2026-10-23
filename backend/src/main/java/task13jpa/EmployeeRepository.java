//package task13jpa;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import java.util.List;
//
//public interface EmployeeRepository
//        extends JpaRepository<Employee, Integer> {
//
//    List<Employee> findByDepartmentIgnoreCase(String department);
//
//    List<Employee> findBySalaryGreaterThanEqual(double min);
//}