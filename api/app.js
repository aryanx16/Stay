const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const userRouter = require("./routes/user.routes.js");
const placeRouter = require("./routes/place.routes.js");
const fileRouter = require("./routes/file.routes.js");
const bookingRouter = require("./routes/booking.routes.js");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //we encode the url in a way that we can get information from it like in yt search " " = "+"

let origin = "";
if (process.env.state == "local") {
  origin = "http://localhost:5173";
} else {
  origin = "https://prathamalu.xyz";
}

const corsOptions = {
  origin,
  // origin: "http://localhost:5173",
  credentials: true, // This allows cookies to be sent and received
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
};

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use("/api/v1/user", userRouter);


module.exports = app;
