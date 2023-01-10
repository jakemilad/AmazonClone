const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51MIhaoI7LaU9QEMOtlQZa4oitiDRT6QQ6VpKEYybwS6AKghbC1ARAyJZd70dDCZ3ZwZ6p7kGuhp0ceHPWqnaaz5E00GYluVwsx');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  response.setHeader('Access-Control-Allow-Origin', ' *')
  
  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


// http://127.0.0.1:5001/clone-bc18b/us-central1/api

