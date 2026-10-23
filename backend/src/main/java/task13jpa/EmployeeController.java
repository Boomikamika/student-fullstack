//package task13jpa;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import java.util.List;
//import java.util.Map;
//@CrossOrigin(origins = "http://localhost:5173")
//@RestController
//@RequestMapping("/api/employees")
//public class EmployeeController {
//
//    private final EmployeeService service;
//
//    public EmployeeController(EmployeeService service) {
//        this.service = service;
//    }
//
//    // POST: Create employee
//    @PostMapping
//    public ResponseEntity<Employee> create(
//            @RequestBody Employee employee) {
//        return ResponseEntity.status(HttpStatus.CREATED)
//                .body(service.create(employee));
//    }
//
//    // GET: All employees
//    @GetMapping
//    public ResponseEntity<List<Employee>> getAll() {
//        return ResponseEntity.ok(service.getAll());
//    }
//
//    // GET: Employee by ID
//    @GetMapping("/{id}")
//    public ResponseEntity<?> getById(@PathVariable int id) {
//        return service.getById(id)
//                .<ResponseEntity<?>>map(ResponseEntity::ok)
//                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
//                        .body(Map.of("message",
//                                "Employee not found with id: " + id)));
//    }
//
//    // PUT: Update existing employee only
//    @PutMapping("/{id}")
//    public ResponseEntity<?> update(
//            @PathVariable int id,
//            @RequestBody Employee employee) {
//
//        return service.update(id, employee)
//                .<ResponseEntity<?>>map(ResponseEntity::ok)
//                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
//                        .body(Map.of("message",
//                                "Employee not found with id: " + id)));
//    }
//
//    // DELETE: Delete employee
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> delete(@PathVariable int id) {
//        if (!service.delete(id)) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                    .body(Map.of("message",
//                            "Employee not found with id: " + id));
//        }
//
//        return ResponseEntity.noContent().build();
//    }
//
//    // GET: Employees by department
//    @GetMapping("/department/{dept}")
//    public ResponseEntity<List<Employee>> getByDepartment(
//            @PathVariable String dept) {
//        return ResponseEntity.ok(service.getByDepartment(dept));
//    }
//
//    // GET: Employees with salary >= min
//    @GetMapping("/salary")
//    public ResponseEntity<List<Employee>> getBySalary(
//            @RequestParam double min) {
//        return ResponseEntity.ok(service.getByMinimumSalary(min));
//    }
//}