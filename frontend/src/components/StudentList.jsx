
function StudentList({ students = [] }) {
  if (!Array.isArray(students)) {
    return <p>Unable to load students.</p>;
  }

  if (students.length === 0) {
    return <p>No students found.</p>;
  }

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Marks</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.department}</td>
            <td>{student.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
