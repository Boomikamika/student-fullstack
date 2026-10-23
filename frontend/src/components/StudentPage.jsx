
import { useEffect, useState } from "react";

// const API_URL = "http://localhost:8080/api/students";
const API_URL = "/api/students";

function StudentPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    marks: "",
  });

  // Fetch students from Spring Boot
  async function fetchStudents() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch students: ${response.status}`);
      }

      const data = await response.json();
      setStudents(data);
    } catch (err) {
      setError(err.message || "Server is not reachable");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  // Update form fields
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // Add a student
  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.department.trim() ||
      form.marks === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const marks = Number(form.marks);

    if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
      setError("Marks must be between 0 and 100.");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          department: form.department.trim(),
          marks: marks,
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(
          details || `Failed to add student: ${response.status}`
        );
      }

      setForm({
        name: "",
        email: "",
        department: "",
        marks: "",
      });

      setMessage("Student added successfully!");

      // Refresh the table after adding
      await fetchStudents();
    } catch (err) {
      setError(err.message || "Unable to add student.");
    }
  }

  // Delete a student
  async function handleDelete(id) {
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete student: ${response.status}`);
      }

      setMessage("Student deleted successfully!");
      await fetchStudents();
    } catch (err) {
      setError(err.message || "Unable to delete student.");
    }
  }

  const filteredStudents = students.filter((student) =>
    (student.name || "")
      .trim()
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <h1>Q17 - Student Management</h1>

      <input
        type="text"
        placeholder="Search by student name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="department"
          value={form.department}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="marks"
          placeholder="marks"
          min="0"
          max="100"
          value={form.marks}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Student</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Students</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.marks}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="6">No students found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentPage;
