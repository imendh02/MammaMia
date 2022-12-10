const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const menuRoutes = require("./routes/menu.js");
const resRoutes = require("./routes/reservation.js");
const authRoutes = require("./routes/auth.js");
const stripe = require("./routes/stripe.js");

app.use("/menu", menuRoutes);
app.use("/reservation", resRoutes);
app.use("/SigninSignup", authRoutes);
app.use("/stripe", stripe);

app.listen(8800, () => {
  console.log("Connected to backend on port 8800!");
});
