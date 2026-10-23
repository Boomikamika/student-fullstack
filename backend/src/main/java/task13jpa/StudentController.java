
package task13jpa;

import java.util.List;
import java.util.Map;


import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(
            StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // GET: Get all students
    @GetMapping
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    // GET: Get student by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getStudentById(
            @PathVariable Integer id) {

        return studentRepository.findById(id)
                .<ResponseEntity<?>>map(
                        student -> ResponseEntity.ok(student))
                .orElseGet(() -> ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(Map.of(
                                "error",
                                "Student not found with id " + id
                        )));
    }

    // GET: Search students by name
    @GetMapping("/search")
    public List<Student> searchStudents(
            @RequestParam String name) {

        return studentRepository.findAll()
                .stream()
                .filter(student ->
                        student.getName() != null &&
                                student.getName()
                                        .toLowerCase()
                                        .contains(name.toLowerCase()))
                .toList();
    }

    // POST: Add a student

    @PostMapping
    public ResponseEntity<?> addStudent(
            @Valid @RequestBody Student student) {

        Student savedStudent = studentRepository.save(student);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedStudent);
    }


    // PUT: Update a student
    @PutMapping("/{id}")
    public ResponseEntity<?> updateStudent(
            @PathVariable Integer id,
            @RequestBody Student updatedStudent) {

        return studentRepository.findById(id)
                .<ResponseEntity<?>>map(existingStudent -> {

                    existingStudent.setName(
                            updatedStudent.getName());

                    existingStudent.setDepartment(
                            updatedStudent.getDepartment());

                    existingStudent.setMarks(
                            updatedStudent.getMarks());

                    Student savedStudent =
                            studentRepository.save(existingStudent);

                    return ResponseEntity.ok(savedStudent);
                })
                .orElseGet(() -> ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(Map.of(
                                "error",
                                "Student not found with id " + id
                        )));
    }

    // DELETE: Delete a student
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStudent(
            @PathVariable Integer id) {

        if (!studentRepository.existsById(id)) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(Map.of(
                            "error",
                            "Student not found with id " + id
                    ));
        }

        studentRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}
