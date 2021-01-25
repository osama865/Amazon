// REQUIRES MODULES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// require(".env");

const stripe = require("stripe")(process.env.CLIENT_SECRET);
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

// process.env.STRIPE_SECRET_KEY ||

// App Confige
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());

// App routes
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Functions

// Export
module.exports.handler = serverless(app);
