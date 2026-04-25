const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_ShS9fpghIQIFNB",
  key_secret: "T3Y8b5wlLUPcTguAemXbCs6r",
});

app.post("/create-order", async (req, res) => {
  const options = {
    amount: 4900, // ₹49 in paise
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send("Error creating order");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));