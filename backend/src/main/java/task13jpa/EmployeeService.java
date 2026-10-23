//package task13jpa;
//import org.springframework.stereotype.Service;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class EmployeeService {
//
//    private final EmployeeRepository repository;
//
//    public EmployeeService(EmployeeRepository repository) {
//        this.repository = repository;
//    }
//
//    public Employee create(Employee employee) {
//        employee.setId(null);
//        return repository.save(employee);
//    }
//
//    public List<Employee> getAll() {
//        return repository.findAll();
//    }
//
//    public Optional<Employee> getById(int id) {
//        return repository.findById(id);
//    }
//
//    public Optional<Employee> update(int id, Employee input) {
//        return repository.findById(id).map(existing -> {
//            existing.setName(input.getName());
//            existing.setDepartment(input.getDepartment());
//            existing.setSalary(input.getSalary());
//            return repository.save(existing);
//        });
//    }
//
//    public boolean delete(int id) {
//        Optional<Employee> employee = repository.findById(id);
//
//        if (employee.isEmpty()) {
//            return false;
//        }
//
//        repository.delete(employee.get());
//        return true;
//    }
//
//    public List<Employee> getByDepartment(String department) {
//        return repository.findByDepartmentIgnoreCase(department);
//    }
//
//    public List<Employee> getByMinimumSalary(double min) {
//
//        return repository.findBySalaryGreaterThanEqual(min);
//    }
//}