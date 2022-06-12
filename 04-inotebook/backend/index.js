import { connectToMongo } from "./db.js";
import express from "express";
connectToMongo();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! UDIT");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
