// Import Routes
import { gameRoutes } from "./routes/gameRoutes";
import { gamesRoutes } from "./routes/gamesRoutes";
import { homeRoutes } from "./routes/homeRoutes";
import { loginRoutes } from "./routes/loginRoutes";
import { playerRoutes } from "./routes/playerRoutes";
import { playersRoutes } from "./routes/playersRoutes";

// Import dotenv
import dotenv from "dotenv";
import { registerRoutes } from "./routes/registerRoutes";
import { arcadeLoginRoutes } from "./routes/arcadeLoginRoutes";
import { setSecurityHeaders } from "./middlewares/securityHeaders";
dotenv.config();

// Express
const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 6969;

// Pug Setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

// Middlewares
app.use(setSecurityHeaders);

// Setup Routes
app.use("/", homeRoutes);
app.use("/login", loginRoutes);
app.use("/arcadeLogin", arcadeLoginRoutes);
app.use("/game", gameRoutes);
app.use("/games", gamesRoutes);
app.use("/player", playerRoutes);
app.use("/players", playersRoutes);
app.use("/register", registerRoutes);

app.listen(port, () => {
  console.clear();
  console.log(`PatroPage Server on port: ${port}`);
});
