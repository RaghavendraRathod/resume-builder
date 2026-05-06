import React from "react";

const Template2 = ({ data }) => {
  return (
    <div className="resume-card" style={{
      padding: "30px",
      background: "white",
      color: "#1f2937",
      borderRadius: "12px",
      width: "600px",
      margin: "auto",
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      fontFamily: "Inter"
    }}>

      <div style={{
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "20px"
}}>

  {/* Profile Photo */}
  {data.photo && (
    <img
      src={data.photo}
      alt="profile"
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid #6366f1"
      }}
    />
  )}

  <div>
    <h1 style={{ margin: 0 }}>{data.name}</h1>
    <p style={{ color: "gray", marginTop: "5px" }}>
      📧 {data.email}
    </p>
  </div>

</div>

      <hr style={{ border: "1px solid #e5e7eb" }} />

      {/* Skills */}
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ borderBottom: "2px solid #6366f1", display: "inline-block" }}>
          Skills
        </h3>
        <p>{data.skills}</p>
      </div>

      {/* Projects */}
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ borderBottom: "2px solid #6366f1", display: "inline-block" }}>
          Projects
        </h3>
        <p>{data.projects}</p>
      </div>

    </div>
  );
};

export default Template2;