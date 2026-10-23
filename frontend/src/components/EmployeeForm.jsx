// import { useState } from "react";
// const c={name:"",department:"",salary:""};
// function EmployeeForm({ onAdd }) {
//   const [form, setForm] = useState(c);
//   const [errors,setErrors]= useState({});
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const e=await({...form,salary:Number(form.salary)});
//     if(e){
//       setErrors(e);
//       setErrors({});
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//       <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
//       <input name="salary" type="number" placeholder="salary" value={form.salary} onChange={handleChange} required />
//       <button type="submit">Add Employee</button>
//       {
//         Object.entries(errors).map(([field,message])=>(
//         <p key={field} style={{color:"red"}}>{message}</p>
//         ))
//     }
    
//     </form>
//   );
// }
// export default EmployeeForm;


import { useState } from "react";

const c = {
  name: "",
  department: "",
  salary: ""
};

function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState(c);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const f = await onAdd({
      ...form,
      salary: Number(form.salary)
    });

    if (f) {
      setErrors(f);
    } else {
      setErrors({});
      setForm(c);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />

      <input
        name="salary"
        type="number"
        placeholder="salary"
        value={form.salary}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Employee</button>

      {Object.entries(errors).map(([field, message]) => (
        <p key={field} style={{ color: "red" }}>
          {typeof message === "string"
            ? message
            : JSON.stringify(message)}
        </p>
      ))}
    </form>
  );
}

export default EmployeeForm;