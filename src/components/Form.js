import React from "react";

const Form = ({ data, setData }) => {
  return (
    <div style={{
         width: "100%",
          padding: "10px", 
          marginBottom: "12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          outline: "none"
          }}>
      <h2>Enter Details</h2>

      <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setData({ ...data, photo: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  }}
/>
      <br /><br />

      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <br /><br />

      <textarea
        placeholder="Skills"
        value={data.skills}
        onChange={(e) => setData({ ...data, skills: e.target.value })}
      />

      <br /><br />

      <textarea
        placeholder="Projects"
        value={data.projects}
        onChange={(e) => setData({ ...data, projects: e.target.value })}
      />
    </div>
  );
};

export default Form;