import React from "react";

const Template1 = ({ data }) => {
  return (
    <div style={{
      padding: "30px",
      fontFamily: "Arial",
      color: "#222"
    }}>
      
      <h1 style={{ marginBottom: "5px" }}>
        {data.name || "Your Name"}
      </h1>

      <p style={{ color: "gray" }}>
        {data.email || "your@email.com"}
      </p>

      <hr />

      <h3>Skills</h3>
      <p>{data.skills || "No skills added"}</p>

      <h3>Projects</h3>
      <p style={{ whiteSpace: "pre-line" }}>
        {data.projects || "No projects added"}
      </p>

    </div>
  );
};

export default Template1;