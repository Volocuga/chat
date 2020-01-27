const express = require("express");
const router = express.Router();

const Chat = require("../models/Chat");

router.get("/", (req, res) => {
  Chat.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

router.post("/", (req, res) => {
  const chat = new Chat({
    userName: req.body.userName,
    message: req.body.message
  });
  chat.save().then(item => res.json(item));
});

router.delete("/:id", (req, res) => {
  Chat.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ status: "success" })))
    .catch(err => res.status(404).json({ status: "error" }));
});

module.exports = router;
