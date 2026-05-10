import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    skills: "",
    projects: "",
    photo: ""
  });

  const generateSample = () => {
    setData({
      name: "Raghavendra Rathod",
      email: "raghav@example.com",
      skills: "React, Node.js, SQL, JavaScript",
      projects:
        "Built a resume builder using React with PDF export and payment integration."
    });
  };

  return (
    <div className="app-container">
      
      {/* LEFT: FORM */}
      <div className="glass" style={{ width: "40%" }}>
        <h2>Enter Details</h2>

        <button
          className="button"
          onClick={generateSample}
          style={{ marginBottom: "15px" }}
        >
          ✨ Generate Sample Resume
        </button>

        <Form data={data} setData={setData} />
      </div>

      {/* RIGHT: PREVIEW */}
      <div
        className="glass"
        style={{ width: "60%", overflow: "auto" }}
      >
        <Preview data={data} />
      </div>

    </div>
  );
}

export default App;