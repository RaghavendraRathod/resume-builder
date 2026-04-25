import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    skills: "",
    projects: "",
  });
return (
  <div style={{
    minHeight: "100vh",
    background: "#f4f6f8",
    fontFamily: "Arial",
    padding: "20px"
  }}>
    
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
      Resume Builder
    </h2>

    <div style={{
      display: "flex",
      gap: "30px",
      justifyContent: "center",
      alignItems: "flex-start"
    }}>
      
      <div style={{
        width: "40%",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <Form data={data} setData={setData} />
      </div>

      <div style={{
        width: "50%",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <Preview data={data} />
      </div>

    </div>
  </div>
);
}

export default App;