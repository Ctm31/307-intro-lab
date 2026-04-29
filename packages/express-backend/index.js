import express from "express";
import cors from "cors";
import userServices from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  userServices.getUsers(name, job)
    .then(result => { res.send(result) })
    .catch(err => { console.error("Error:", err)});
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  userServices.findUserById(id)
    .then(result => { if (result === undefined) {
                        res.status(404).send("Resource not found.");
                    } else {
                        res.send(result);
                    }})
    .catch(err => { console.error("Error:", err)});
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;

  userServices.addUser(userToAdd)
    .then(result => {res.status(201).send(result)})
    .catch(err => { console.error("Error:", err)})
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id; //or req.params.id

  console.log("removing");
  console.log(id);
  
  userServices.removeUser(id)
    .then(result => {if (result === undefined) {
                        res.status(404).send("Resource not found.");
                    } else {
                        res.status(204).send();
                    }})
    .catch(err => {console.error("Error:", err)})
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});