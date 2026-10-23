function Card({ title = "No title", children }) {
  return (
    <div className="card" style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;