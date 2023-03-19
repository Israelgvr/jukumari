const express = require("express");
const userSchema = require("../models/UserDivice");

const router = express.Router();
// create user
router.post("/userDivice", (req, res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  module.exports = router;