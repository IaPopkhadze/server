import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 5000;

app.use(
  cors({
    origin: ["http://192.168.1.5:3000"],
  })
);

app.get("/", (req, res) => {
  res.send("/");
});

const getPersons = (req, res) => {
  fs.readFile("persons.json", (err, data) => {
    if (err) console.log(err);
    if (data) {
      res.send(JSON.parse(data.toString()));
    }
  });
};

app.get("/persons", getPersons);

app.listen(port, console.log("Server is running on port:", port));
