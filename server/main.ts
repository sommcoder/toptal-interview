import express from "npm:express@4.18.2";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});

app.get("/product", (req, res) => {
  res.send("You've accessed our product route/page!");
});

app.listen(8000);
