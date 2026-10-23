// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


// function App() {
// return <h1>Hello React</h1>;
// }
// export default App;



// Rule 1: Return only one root element.
// // Wrong: two siblings
// return (
// <h1>Title</h1>
// <p>Text</p>
// );
// // Correct: wrap in a div or a Fragment
// return (
// <>
// <h1>Title</h1>   (fragment)
// <p>Text</p>
// </>
// );

//rule 5
// /function App() {
// const name = "Arun";
// const marks = 85;
// return (
// <div>
// <h1>Hello, {name}</h1>
// <p>Marks: {marks}</p>
// <p>Double marks: {marks * 2}</p>
// <p>Result: {marks >= 40 ? "Pass" : "Fail"}</p>
// </div>
// );

// rule 6
// <h1 style={{ color: "blue", fontSize: "24px" }}>Styled</h1>


// HTML                          JSX
// class="box"               className="box"
// for="name"                 htmlFor="name"
// onclick="fn()"               onClick={fn}
// style="color:red"          style={{ color: "red" }}
// <img src="a.png">         <img src="a.png" />
// <!-- comment -->          {/* comment */}



// import Welcome from "./components/Welcome";
// fuction app(){
//   return (
//     <div>
//       <Welcome />
//       <Welcome />
//       <Welcome />
//     </div>
//   );
// }
// export default app;


// import StudentCard from "./components/StudentCard";
// function App() {
// return (
// <div>
// <StudentCard name="Arun" department="CSE" marks={85} />
// <StudentCard name="Bala" department="ECE" marks={72} />
// </div>
// );
// }
// export default App;


// import Card from "./components/Card";

// function App() {
//   return (
//     <div>
//       <Card title="Notice">
//         <p>Exam on Monday</p>
//       </Card>

//       <Card>
//         <p>This card has no title, so the default is used</p>
//       </Card>
//     </div>
//   );
// }

// export default App;



// import StudentCard from "./components/StudentCard";
// function App() {
//   const loading = false;
//   const students = [
//     { id: 1, name: "Arun", department: "CSE", marks: 85 },
//     { id: 2, name: "Bala", department: "ECE", marks: 72 },
//     { id: 3, name: "Chitra", department: "CSE", marks: 91 },
//   ];
//   if (loading) return <p>Loading...</p>;
//   return (
//     <div>
//       <h1>Students</h1>
//       {/* 2. && operator */}
//       {students.length === 0 && <p>No students found</p>}
//       {/* map() with key */}
//       {students.map((s) => (
//         <StudentCard
//           key={s.id}
//           name={s.name}
//           department={s.department}
//           marks={s.marks}
//         />
//       ))}
//     </div>
//   );
// }
// export default App;

// //setCount
// //setCount(c=>c+1)


// import BrokenCounter from "./components/BrokenCounter";
// import Counter from "./components/Counter";
// import TrippleClick from "./components/TrippleClick";
// import StudentList from "./components/StudentList";

// function App() {
//   return (
//     <div>
//       <h2>1. Normal variable (broken)</h2>
//       <BrokenCounter />
//       <h2>2. useState Counter</h2>
//       <Counter />
//       <h2>3. Trick question</h2>
//       <TrippleClick />
//       <h2>4. Students with state</h2>
//       <StudentList />
//     </div>
//   );
// }export default App;


// import { useState } from "react";
// import NameForm from "./components/NameForm";
// import MultiFieldForm from "./components/MultiFieldForm";
// import StudentForm from "./components/StudentForm";
// import StudentList from "./components/StudentList";

// function App() {
//   // State lives here (lifted up)
//   const [students, setStudents] = useState([
//     { id: 1, name: "Arun", department: "CSE", marks: 85 },
//     { id: 2, name: "Bala", department: "ECE", marks: 72 },
//     { id: 3, name: "Chitra", department: "CSE", marks: 91 },
//   ]);

//   const addStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   const deleteStudent = (id) => {
//     setStudents(students.filter((s) => s.id !== id));
//   };

//   return (
//     <div>
//       <h2>1. Controlled input</h2>
//       <NameForm />

//       <h2>2. One state object, many fields</h2>
//       <MultiFieldForm />

//       <h2>3. Lifting state up</h2>
//       <StudentForm onAdd={addStudent} />
//       <StudentList students={students} onDelete={deleteStudent} />
//     </div>
//   );
// }
// export default App;

// import Hello from "./components";
// function App(){
//   return(
//     <div>
//       <h2>
//         clock it 
//       </h2>
//     <Hello/>
//     </div>
//   );
// }
// export default App;

// import BadEffect from "./components/BadEffect";
// import Hello from "./components/Hello";
// function App(){
//   return(
//      <div>
//        <h2>
//          clock it 
//        </h2>
//      <BadEffect/>
//      <h2> ewwww </h2>
//      <Hello/>
//      </div>
//    );
//  }
//  export default App;



// import Hello from "./components/Hello";

// function App() {
//   return (
//     <div>
//       <h2>Clock it</h2>
//       <Hello />
//     </div>
//   );
// }

// export default App;



// import StudentList from "./components/StudentList";

// function App() {
//   return (
//     <div>
//       <h2>Hi Welcome</h2>
//       <StudentList />
//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from "react";
// import AddEmployee from "./components/AddEmployee";
// import StudentList from "./components/StudentList";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8080/api/employees")
//       .then((res) => {
//         if (!res.ok) throw new Error("Server error: " + res.status);
//         return res.json();
//       })
//       .then((data) => setEmployees(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleAdded = (newEmployee) => {
//     setEmployees((previous) => [...previous, newEmployee]);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h1>Hi Welcome</h1>

//       <h2>Add employee</h2>
//       <AddEmployee onAdded={handleAdded} />

//       <h2>All employees</h2>
//       <StudentList employees={employees} />
//     </div>
//   );
// }

// export default App;




// import { useEffect, useState } from "react";
// import AddEmployee from "./components/AddEmployee";
// import StudentList from "./components/StudentList";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8080/api/employees")
//       .then((res) => {
//         if (!res.ok) throw new Error("Server error: " + res.status);
//         return res.json();
//       })
//       .then((data) => setEmployees(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   // Add employee
//   const handleAdded = (newEmployee) => {
//     setEmployees((previous) => [...previous, newEmployee]);
//   };

//   // Edit employee
//   const handleEdit = async (employee) => {
//     const name = prompt("Enter employee name:", employee.name);
//     if (name === null) return;

//     const department = prompt(
//       "Enter department:",
//       employee.department
//     );
//     if (department === null) return;

//     const salary = prompt("Enter salary:", employee.salary);
//     if (salary === null) return;

//     if (!name.trim() || !department.trim() || salary.trim() === "") {
//       alert("Please fill in all fields.");
//       return;
//     }

//     if (!Number.isFinite(Number(salary))) {
//       alert("Please enter a valid salary.");
//       return;
//     }

//     try {
//       const res = await fetch(
//         `http://localhost:8080/api/employees/${employee.id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: name.trim(),
//             department: department.trim(),
//             salary: Number(salary),
//           }),
//         }
//       );

//       if (!res.ok) {
//         throw new Error("Update failed: " + res.status);
//       }

//       const updated = await res.json();

//       setEmployees((previous) =>
//         previous.map((e) =>
//           e.id === employee.id ? updated : e
//         )
//       );

//       alert("Employee updated successfully!");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   if (error) {
//     return <p style={{ color: "red" }}>{error}</p>;
//   }

//   return (
//     <div>
//       <h1>Hi Welcome</h1>

//       <h2>Add employee</h2>
//       <AddEmployee onAdded={handleAdded} />

//       <h2>All employees</h2>
//       <StudentList
//         employees={employees}
//         onEdit={handleEdit}
//       />
//     </div>
//   );
// }


// export default App;



// import { useEffect, useState } from "react";
// import AddEmployee from "./components/AddEmployee";
// import StudentList from "./components/StudentList";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch all employees
//   useEffect(() => {
//     fetch("http://localhost:8080/api/employees")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Server error: " + res.status);
//         }
//         return res.json();
//       })
//       .then((data) => setEmployees(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   // Add employee
//   const handleAdded = (newEmployee) => {
//     setEmployees((previous) => [...previous, newEmployee]);
//   };

//   // Edit employee
//   const handleEdit = async (employee) => {
//     const name = prompt("Enter employee name:", employee.name);
//     if (name === null) return;

//     const department = prompt(
//       "Enter department:",
//       employee.department
//     );
//     if (department === null) return;

//     const salary = prompt("Enter salary:", employee.salary);
//     if (salary === null) return;

//     if (!name.trim() || !department.trim() || salary.trim() === "") {
//       alert("Please fill in all fields.");
//       return;
//     }

//     if (!Number.isFinite(Number(salary))) {
//       alert("Please enter a valid salary.");
//       return;
//     }

//     try {
//       const res = await fetch(
//         `http://localhost:8080/api/employees/${employee.id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: name.trim(),
//             department: department.trim(),
//             salary: Number(salary),
//           }),
//         }
//       );

//       if (!res.ok) {
//         throw new Error("Update failed: " + res.status);
//       }

//       const updated = await res.json();

//       setEmployees((previous) =>
//         previous.map((e) =>
//           e.id === employee.id ? updated : e
//         )
//       );

//       alert("Employee updated successfully!");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   // Delete employee
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this employee?"
//     );

//     if (!confirmDelete) return;

//     try {
//       const res = await fetch(
//         `http://localhost:8080/api/employees/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!res.ok) {
//         throw new Error("Delete failed: " + res.status);
//       }

//       setEmployees((previous) =>
//         previous.filter((e) => e.id !== id)
//       );

//       alert("Employee deleted successfully!");
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   if (error) {
//     return <p style={{ color: "red" }}>{error}</p>;
//   }

//   return (
//     <div>
//       <h1>Hi Welcome</h1>

//       <h2>Add employee</h2>
//       <AddEmployee onAdded={handleAdded} />

//       <h2>All employees</h2>
//       <StudentList
//         employees={employees}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default App;

// import { useEffect } from "react";
// import axios from "axios";
// function App(){
//   useEffect(()=>{
//     const getData = async()=>{
//     const a = await axios.get("http://localhost:8080/api/employees");
// console.log(a.data);

//   };
//   getData();
// },[]);
// return <h1>welcome to axios</h1>;}
// export default App;

// import { useEffect } from "react";
// import axios from "axios";
// function App(){
//   useEffect(()=>{
//     const postData = async()=>{
//     const b = await axios.post("http://localhost:8080/api/employees",{
//       name:"mick",department:"IT",salary:67000
//     });
// console.log(b.data);

//   };
//   postData();
// },[]);
// return <h1>welcome to axios</h1>;}
// export default App;


// import { useEffect } from "react";
// import axios from "axios";
// function App(){
//   useEffect(()=>{
//     const putData = async()=>{
//       const v={name:"radh",department:"IT",salary:67000};
//     const c = await axios.get("http://localhost:8080/api/employees/2",v);
// console.log(c.data);

//   };
//   putData();
// },[]);
// return <h1>welcome to axios</h1>;}
// export default App;



// import { useEffect } from "react";
// import axios from "axios";
// function App(){
//   useEffect(()=>{
//     const deleteData = async()=>{
//       const v={name:"radh",department:"IT",salary:67000};
//     const c = await axios.delete("http://localhost:8080/api/employees/2");
// console.log(c.data);

//   };
//   deleteData();
// },[]);
// return <h1>welcome to axios</h1>;}
// export default App;

// import EmployeeList from "./components/EmployeeList";
// function App(){
//     return(
//       <div>
//         <h1>AXIOS Exception</h1>
//         <EmployeeList/>
//       </div>
//     )
// }
// export default App;


// import { useEffect, useState } from "react";
// import api from "./api";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeList from "./components/EmployeeList";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     loadEmployees();
//   }, []);
//   const loadEmployees = async () => {
//     try {
//       const res = await api.get("/employees");
//       setEmployees(res.data);
//       setError("");
//     } catch (err) {
//       setError("Cannot load employees. Is the backend running?");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const addEmployee = async (employee) => {
//     try {
//       const res = await api.post("/employees", employee);
//       setEmployees([...employees, res.data]);
//       return null;
//     } catch (err) {
//       return err.response?.data || { error: "Could not add employee" };
//     }
//   };
//   const deleteEmployee = async (id) => {
//     try {
//       await api.delete(`/employees/${id}`);
//       setEmployees(employees.filter((e) => e.id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };
//  return (
//     <div style={{ padding: "20px" }}>
//       <h1>Employee Management</h1>
//       <EmployeeForm onAdd={addEmployee} />
//       <h2>Employees</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && !error && (
//         <EmployeeList employees={employees} onDelete={deleteEmployee} />
//       )}
//     </div>
//   );
// }
// export default App;


// import { useEffect, useState } from "react";
// import api from "./api";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeList from "./components/EmployeeList";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   const loadEmployees = async () => {
//     try {
//       const res = await api.get("/employees");
//       setEmployees(res.data);
//       setError("");
//     } catch (err) {
//       setError("Cannot load employees. Is the backend running?");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addEmployee = async (employee) => {
//     try {
//       const res = await api.post("/employees", employee);
//       setEmployees([...employees, res.data]);
//       return null;
//     } catch (err) {
//       return err.response?.data || {
//         error: "Could not add employee"
//       };
//     }
//   };

//   const deleteEmployee = async (id) => {
//     try {
//       await api.delete(`/employees/${id}`);
//       setEmployees(employees.filter((e) => e.id !== id));
//     } catch (err) {
//       alert("Delete failed");
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Employee Management</h1>

//       <EmployeeForm onAdd={addEmployee} />

//       <h2>Employees</h2>

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {!loading && !error && (
//         <EmployeeList
//           employees={employees}
//           onDelete={deleteEmployee}
//         />
//       )}
//     </div>
//   );
// }

// export default App;


/*
git init
git add .
git commit -m "Initial commit: employee app"

git status         
git log --oneline  
git branch feature-delete
git checkout feature-delete
git merge feature-delete

HR Campus
17:05

git branch -M main
git remote add origin https://github.com/<your-username>/employee-app-frontend.git
git push -u origin main

backend:[springboot]
./mvnw clean package
java -jar target/employee-app-0.0.1-SNAPSHOT.jar

frontend[react]:
npm run build

deployment checklist:
no secret in github
vita API url backend (not localhost)
cars allows live(frontend url)
test add/view/delete/ on the live site 



*/

/*
import { useState } from "react";
import {getStudents,deleteStudent,} from "./api";
import { getStudent } from "./fetchApi";

function App() {
  const [result, setResult] = useState("");

  async function testDelete() {
    const data = await deleteStudent(99);
    setResult(
      typeof data === "string"? data
        : JSON.stringify(data, null, 2)
    );
  }

  async function testGetStudents() {
    const data = await getStudents();
    setResult(
      typeof data === "string"
        ? data
        : JSON.stringify(data, null, 2)
    );
  }

//Q16
async function testFetchStudent() {
  try {
    const data = await getStudent(99);
    setResult(JSON.stringify(data, null, 2));
  } catch (e) {
    setResult(e.message);
  }
}

  return (
    <div style={{ padding: "20px" }}>
      <h1>Q15 - Axios Service Module</h1>

      <button onClick={testDelete}>
        Test Delete Student 99
      </button>

      <button
        onClick={testGetStudents}
        style={{ marginLeft: "10px" }}
      >
        Test Get Students
      </button>

      <button onClick={testFetchStudent}>
        Q16: Test Fetch Student 99
      </button>

      <h3>Output</h3>
      <pre>{result}</pre>
    </div>
  );
}

export default App;
*/

import StudentPage from "./components/StudentPage";

function App() {
  return <StudentPage />;
}

export default App;