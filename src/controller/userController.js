const userModel = require("../models/userModel");
const bcrypt = require('bcrypt')
const {
  isValidObjectId,
  isValidRequestBody,
  isValid,
  isValidEmail,
  isValidPassword,
} = require("../validations");

const createUser = async (req, res) => {
  try {
    let requestBody = req.body;
    if (!isValidRequestBody(requestBody)) {
      return res
        .status(400)
        .send({ status: false, msg: `request body can't be empty` });
    }
    const { name, email, password, location } = requestBody;
    if (!name) {
      return res.status(400).send({ status: false, msg: `Name is required` });
    }
    if (!email) {
      return res.status(400).send({ status: false, msg: `E-mail is required` });
    }
    if (!location) {
      return res.status(400).send({ status: false, msg: `Location is required` });
    }
    if (!password) {
      return res
        .status(400)
        .send({ status: false, msg: `Password is required` });
    }
    if (!isValidEmail(email)) {
      return res
        .status(400)
        .send({ status: false, msg: `Please provide valid email` });
    }
    if (!isValidPassword(password)) {
      return res
        .status(400)
        .send({ status: false, msg: `Please provide valid password` });
    }
    let emailIsAlreadyExist = await userModel.findOne({ email: req.body.email });
    if (emailIsAlreadyExist) {
      return res
        .status(400)
        .send({ status: false, msg: `This email is already registered` });
    }
    let salt = await bcrypt.genSalt(10);
    let passwordHash = await bcrypt.hash(password, salt);

    let createData = await userModel.create({ name, email, password: passwordHash, location });
    return res
      .status(201)
      .send({
        status: true,
        message: `Success`,
        Data: createData,
      });
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};



const getAll = async(req,res)=>{
  let data = await userModel.find()
  res.status(200).send({status:true,msg:"data",data:data})
}

module.exports ={createUser,getAll}
