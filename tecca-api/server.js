const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");
const db = knex({
  // connect to your own database here:
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "tavotevas1",
    database: "postgres",
  },
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/getSignedInUserData", (req, res) => {
  const { ip } = req.body;

  return db
    .select("*")
    .from("currentlysignedinusers")
    .where({ ip })
    .then((data) => {
      return res.json(data);
    });
});

app.get("/getUserData", (req, res) => {
  return db
    .select("*")
    .from("users")
    .then((data) => {
      return res.json(data);
    });
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  return db
    .select("*")
    .from("users")
    .where({ email, password })
    .then((data) => {
      return res.json(data);
    });
});

app.post("/register", (req, res) => {
  const { email, displayName, password, ip } = req.body;
  return db("users")
    .returning("*")
    .insert({
      name: displayName,
      email: email,
      createdat: 3,
      purchases: [],
      password: password,
      ip: ip,
    })
    .then((user) => {
      return res.json(user[0]);
    });
});

app.post("/registerCurrentlySignedIn", (req, res) => {
  const { email, name, ip } = req.body;
  return db("currentlysignedinusers")
    .returning("*")
    .insert({
      name: name,
      email: email,
      ip: ip,
    })
    .then((user) => {
      return res.json(user[0]);
    });
});

app.post("/signOutUser", (req, res) => {
  const { ip } = req.body;

  return db
    .select("*")
    .from("currentlysignedinusers")
    .del()
    .where({ ip: ip })
    .then((data) => res.json(data));
});

app.get("/getShirts", (req, res) => {
  return db
    .select("*")
    .from("shirts")
    .then((data) => res.json(data));
});

app.get("/getSweaters", (req, res) => {
  return db
    .select("*")
    .from("sweaters")
    .then((data) => res.json(data));
});

app.post("/postReview", (req, res) => {
  const { name, posttitle, posttext, createdat, itemid } = req.body;
  return db("reviews")
    .returning("*")
    .insert({
      name: name,
      posttitle: posttitle,
      posttext: posttext,
      createdat: createdat,
      itemid: itemid,
    })
    .then((user) => {
      return res.json(user[0]);
    });
});

app.get("/getReviews", (req, res) => {
  return db
    .select("*")
    .from("reviews")
    .then((data) => res.json(data));
});

app.post("/deleteReview", (req, res) => {
  const { createdat } = req.body;

  return db
    .select("*")
    .from("reviews")
    .del()
    .where({ createdat: createdat })
    .then((data) => res.json(data));
});

app.listen(3000, () => {
  console.log("app running");
});
