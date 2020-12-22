const express = require("express");
const app = express();
const httpverbs = require("./modules/httpVerbs");

app.use(express.json());

app.listen(3000, () => {
  console.log("Listen in port 3000...");
});

//http verbs
//get
app.get("/users", (req, res) => {
  var person = {
    id: 1,
    nombre: "daniel",
    apellid: "vargas",
  };

  var person2 = {
    id: 2,
    nombre: "david",
    apellid: "lopez",
  };
  var persons = [];
  persons.push(person);
  persons.push(person2);

  res.send(persons);
});

//post
app.post("/user", (req, res) => {
  var objectJSON = req.body;
  console.log(objectJSON);
  var person = [];

  person.push(objectJSON);
  res.send(person);
});

//put
app.put("/user", (req, res) => {
  var objectJSON = req.body;
  console.log(objectJSON);
  var person = [];

  person.push(objectJSON);
  res.send(person);
});

//patch
app.patch("/user", (req, res) => {
  var objectJSON = req.body;
  console.log(objectJSON);
  var person = [];

  person.push(objectJSON);
  res.send(person);
});

//delete
app.delete("/user", (req, res) => {
  var objectJSON = req.body;
  console.log(objectJSON);
  var person = [];

  person.push(objectJSON);
  res.send(person);
});
