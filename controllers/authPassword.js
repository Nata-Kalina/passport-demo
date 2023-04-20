const User = require("../model/model");
const bcrypt = require("bcryptjs");

const secureRegister = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!password || !username) {
      return res.status(400).json({ msg: `Please provide credentials` });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const tempUser = { username, password: hashedPassword };
    const user = await User.create({ ...tempUser });
    res.status(201).redirect("/");
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  secureRegister,
};
