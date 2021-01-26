require("dotenv").config();
const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.FUNCTIONS_END_POINT,
});

export default instance;
