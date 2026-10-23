// function StudentCard({ name, department, marks }) {
// return (
// <div style={{ border: "1px solid gray", padding: "10px", margin: "10px"
// }}>
// <h3>{name}</h3>
// <p>Department: {department}</p>
// <p>Marks: {marks}</p>
// </div>
// );
// }
// export default StudentCard;


function StudentCard({ name, department, marks }) {
 return (
 <div style={{ border: "1px solid gray", padding: "10px", margin: "10px"
}}>
    <p>Name:{name}</p>
    <p>Department:{department}</p>
    <p>Marks:{marks}</p>
    {marks>=40?<p>Pass</p>:<p>Fail</p>}
    </div>);}

export default StudentCard;