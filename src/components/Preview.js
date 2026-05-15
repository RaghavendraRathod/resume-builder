import React, { useRef, useState } from "react";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Preview = ({ data }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("t1");
  const [isPro, setIsPro] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const resumeRef = useRef();

  const downloadPDF = () => {
    html2canvas(resumeRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  const handlePayment = async () => {
    const res = await fetch(
      "https://resume-builder-production-a2e1.up.railway.app/create-order",
      {
        method: "POST",
      }
    );

    const order = await res.json();

    const options = {
      key: "rzp_test_ShS9fpghIQIFNB",
      amount: order.amount,
      currency: order.currency,
      name: "Resume Builder",
      description: "Upgrade to Pro",
      order_id: order.id,
      handler: function () {
        setIsPro(true);
        setShowPopup(false);
        alert("Payment successful!");
      },
      prefill: {
        name: data.name,
        email: data.email,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="glass">
      <h2>Preview</h2>

      {/* Template Buttons */}
      <button
        className="button"
        onClick={() => setSelectedTemplate("t1")}
        style={{ marginRight: "10px" }}
      >
        Template 1
      </button>

      <button
        className="button"
        onClick={() => {
          if (!isPro) {
            setShowPopup(true);
          } else {
            setSelectedTemplate("t2");
          }
        }}
      >
        Template 2 {!isPro ? "🔒" : "⭐ PRO"}
      </button>

      <br />
      <br />

      {/* Status */}
      <p style={{ color: isPro ? "green" : "gray" }}>
        Status: {isPro ? "Pro User 🚀" : "Free User"}
      </p>

      {/* Resume Preview */}
      <div ref={resumeRef}>
        {selectedTemplate === "t1" && <Template1 data={data} />}
        {selectedTemplate === "t2" && isPro && <Template2 data={data} />}
      </div>

      <br />

      {/* Download Button */}
      <button
        className="button"
        onClick={downloadPDF}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          background: "black",
          color: "white",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeIn 0.3s ease",
            zIndex:9999,
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1e293b, #0f172a)",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              width: "300px",
              color: "white",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              animation: "scaleIn 0.3s ease",
              pointerEvents: "auto",
            }}
          >
            <h3>✨ Unlock Premium</h3>
            <p>Modern templates + recruiter-ready design</p>
<button
  onClick={handlePayment}
  style={{
    background: "#007bff",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    zIndex: 10000,
    position: "relative",
    pointerEvents: "auto",
  }}
>
  Upgrade ₹49
</button>

            <br />
            <br />

            <button onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;