import { gameRoutes } from "./routes/gameRoutes";
import { homeRoutes } from "./routes/homeRoutes";
import { loginRoutes } from "./routes/loginRoutes";
import dotenv from "dotenv";

dotenv.config();

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 6969;

// Pug Setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));
app.use("/public", express.static(path.join(__dirname, "../public")));

// Home Page Route
app.use("/", homeRoutes);
app.use("/login", loginRoutes);
app.use("/game", gameRoutes);

app.listen(port, () => {
  console.clear();
  console.log(`PatroPage Server on port: ${port}`);
});
