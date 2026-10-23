
import { useState } from "react";

function AddEmployee({ onAdded }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        department: department,
        salary: Number(salary),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add employee");
        return res.json();
      })
      .then((data) => {
        onAdded(data);
        setName("");
        setDepartment("");
        setSalary("");
        alert("Employee added successfully!");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default AddEmployee;
