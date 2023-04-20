require("passport");
const User = require("../model/model");
const session = require("express-session");

const home = async (req, res) => {
  let messages = [];
  if (req.session.messages) {
    messages = req.session.messages;
    req.session.messages = [];
  }
  res.render("views/index", { messages });
};

const signUp = async (req, res) => res.render("views/sign-up-form");

const restricted = async (req, res) => {
  if (!req.session.pageCount) {
    req.session.pageCount = 1;
  } else {
    req.session.pageCount++;
  }
  res.render("views/restricted", { pageCount: req.session.pageCount });
};

/*const register = async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};*/

const logOut = async (req, res, next) => {
  req.session.destroy(function (err) {
    res.redirect("/");
  });
};

module.exports = { home, signUp, logOut, restricted };
