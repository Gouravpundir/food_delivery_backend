const mongoose = require("mongoose")

function isValidRequestBody(requestBody) {
    return Object.keys(requestBody).length > 0;
  }

  function isValidEmail($email) {
    var emailReg = /^(\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3}))$/;
    if (!emailReg.test($email)) {
      return false;
    } else {
      return true;
    }
  }

  function isValidObjectId(ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId);
  }
  
  
  function isValid(value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
  }

  const isValidPassword = function (password) {
    password = password.trim();
    if (password.length < 8 || password.length > 15) {
      return false;
    }
    return true;
  };
  module.exports={isValidRequestBody, isValidEmail, isValid, isValidObjectId, isValidPassword }