const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {isValidEmail} = require('../validations')
const dotenv = require("dotenv");
dotenv.config();

const loginUser = async (req, res) => {
  try {
    let requestBody = req.body;
    if (!Object.keys(requestBody).length === 0) {
      return res
        .status(400)
        .send({ status: false, msg: `Request body can't be empty` });
    }
    let { email, password } = requestBody;
    if (!email) {
      return res.status(400).send({ status: false, msg: `E-mail is required` });
    }
    if (!password) {
      return res
        .status(400)
        .send({ status: false, msg: `Password is required` });
    }
    if(!isValidEmail(email)){
      return res.status(400).send({ status: false, msg: `Please provide valid e-mail` })
    }
    let data = await userModel.findOne({ email });
    if (!data) {
      return res.status(401).send({ status: false, msg: `Invalid E-mail` });
    }
    let isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) {
      return res.status(401).send({ status: false, msg: `Invalid password` });
    }
    let token = jwt.sign(
      {
        userId: data._id.toString(),
      },
      process.env.SECRET_KEY
    );
    res.status(200).send({ status: true, msg: `Success`, data: token });
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports = {loginUser};
