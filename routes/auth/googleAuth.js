const express = require("express");
const router = express.Router();

const { passport } = require("./modules/pass");

router.use(passport.initialize()); // init passport on every route call
router.use(passport.session()); //allow passport to use "express-session"

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

module.exports = router;
