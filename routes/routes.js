const express = require("express");
const router = express.Router();

const { home, signUp, logOut, restricted } = require("../controllers/controllers");
const authMiddleware = require("../controllers/authMiddleware");

//const { logIn } = require("../controllers/passport");
const { secureRegister } = require("../controllers/authPassword");

router.route("/").get(home);
router.route("/sign-up").get(signUp);
router.route("/sign-up").post(secureRegister);
//router.route("/log-in").post(logIn);
router.route("/log-out").get(logOut);
router.route("/restricted").get(authMiddleware, restricted);

module.exports = router;
