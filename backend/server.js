const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay"); // Added for future integration

const app = express();

app.use(cors());
app.use(express.json());

// Health route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Create order route
app.post("/create-order", async (req, res) => {
  // Returning dummy JSON as requested
  res.json({
    id: "order_dummy_12345",
    amount: 4900,
    currency: "INR"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});