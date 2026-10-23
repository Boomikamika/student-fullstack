//control input

import { useState } from "react";
function NameForm(){
    const [name,setName]=useState("");
    const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Hello " + name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>You typed: {name}</p>
    </form>
  );
}
export default NameForm;