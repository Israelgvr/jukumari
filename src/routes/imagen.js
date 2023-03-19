const express = require("express");
const imagenSchema = require("../models/imagen");

const router = express.Router();
// create user
router.post("/imagen", (req, res) => {
    const user = imagenSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  module.exports = router;