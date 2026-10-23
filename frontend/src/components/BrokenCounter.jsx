import { useState } from "react";
function BrokenCounter(){
    let Count=0;
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>{Count++;console.log(count);}}>+1</button>
        </div>
    );
}
