import { useState } from "react";
function MultiFieldForm() {
  const [form, setForm] = useState({ name: "", email: "", marks: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="marks" placeholder="Marks" value={form.marks} onChange={handleChange} />

      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
      <p>Marks: {form.marks}</p>
    </div>
  );
}
export default MultiFieldForm;