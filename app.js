const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const path = require("path");

const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });

const components = require("./routes/components");
const softwares = require("./routes/softwares");
const builds = require("./routes/builds");

connectDB();
var app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/builds", builds);
app.use("/components", components);
app.use("/software", softwares);

const PORT = process.env.PORT || 8080;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgRed.black
      .bold
  )
);
