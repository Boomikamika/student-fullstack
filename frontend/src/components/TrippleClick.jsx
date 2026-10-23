import { useState } from "react";
function TrippleClick(){
    const[a,setA]=useState(0)
     const[b,setB]=useState(0)
     const wrong = ()=>{
        setA(a+1);
        setA(a+1);
        setA(a+1);

     };
     const right=()=>{
        setB((c)=>c+1);
        setB((c)=>c+1);
        setB((c)=>c+1);
     }
     return (
    <div>
      <p>Wrong way: {a}</p>
      <button onClick={wrong}>setA(a + 1) x 3</button>

      <p>Function form: {b}</p>
      <button onClick={right}>setB(c =&gt; c + 1) x 3</button>
    </div>
  );
}
export default TrippleClick;