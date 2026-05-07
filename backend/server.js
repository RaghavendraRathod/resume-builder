const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay"); // Added for future integration

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_ShS9fpghIQIFNB",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "YOUR_SECRET_HERE",
});

// Health route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Create order route
app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 4900, // amount in the smallest currency unit
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };
    
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});