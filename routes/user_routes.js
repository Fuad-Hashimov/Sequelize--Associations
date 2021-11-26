const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/adduser", (req, res) => {
  db.User.create({
    username: req.body.username,
  }).then((result) => res.send(result));
});

router.get("/all", (req, res) => {
  db.User.findAll({
    include: [db.Profile, db.Post],
  }).then((allUsers) => res.send(allUsers));
});

router.get("/user/:id", (req, res) => {
  db.User.findOne({
    where: { id: req.params.id },
    include: [db.Post, db.Profile],
  }).then((result) => res.send(result));
});

module.exports = router;
