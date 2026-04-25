const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");

const app = express();

app.use(cors());
app.use(express.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: "rzp_test_ShS9fpghIQIFNB",
  key_secret: "T3Y8b5wlLUPcTguAemXbCs6r",
});

// Route
app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 4900, // ₹49
      currency: "INR",
      receipt: "receipt_order_1",
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating order");
  }
});

// ✅ IMPORTANT FIX
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});