import React from "react";

const Template2 = ({ data }) => {
  return (
    <div style={{
      width: "600px",
      margin: "auto",
      padding: "20px",
      border: "2px solid black",
      fontFamily: "Georgia"
    }}>
      <h1 style={{ textAlign: "center" }}>{data.name}</h1>
      <p style={{ textAlign: "center" }}>{data.email}</p>

      <hr />

      <h3>Skills</h3>
      <p>{data.skills}</p>

      <h3>Projects</h3>
      <p>{data.projects}</p>
    </div>
  );
};

export default Template2;