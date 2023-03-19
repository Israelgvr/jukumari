const express = require("express");
const locationSchema = require("../models/location");

const router = express.Router();
// create locatins
router.post("/locations", (req, res) => {
    const user = locationSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  module.exports = router;