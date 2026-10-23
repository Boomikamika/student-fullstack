import { useEffect,useState } from "react";
function BadEffect(){
    const[calls,setCalls]=useState(0);
    useEffect(()=>{
        if(calls>=20)
            return;
        console.log("fake api calls",calls+1);
        setCalls(calls+1);

    },[]);
return <p>hahaha:{calls}</p>;
}
export default BadEffect;