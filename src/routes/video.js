const express = require("express");
const videoSchema = require("../models/video");

const router = express.Router();
// create user
router.post("/videos", (req, res) => {
    const user = videoSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  module.exports = router;