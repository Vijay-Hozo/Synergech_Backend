const express = require("express");
const router = express.Router();

const { middleware } = require("../Middleware/middleware.js");
const { newUser, loginUser, signOutUser } = require("../Controllers/UserLogin.js");

router.get("/user", middleware, (req, res) => {
  return res.status(200).json({
    message: "User is authorized",
  });
});

router.post("/user/signup", newUser);

router.post("/user/login", loginUser);

router.post("/user/signout", signOutUser);

module.exports = router;
