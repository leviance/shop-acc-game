const { check } = require('express-validator');
const {auth_message} = require("../../lang/vi");

let register = [
  check("name_account")
    .isLength({min: 5}).withMessage(auth_message.na_acc_too_short)
    .isLength({max: 50}).withMessage(auth_message.na_acc_too_long)
    .matches(/^[a-zA-Z0-9]+$/i).withMessage(auth_message.na_acc_type),

  check("phone_number")
    .isLength({min: 10, max: 10}).withMessage(auth_message.phone_number_invalid)
    .matches(/((09|03|07|08|05)+([0-9]{8})\b)/i).withMessage(auth_message.phone_number_invalid),
  
  check("password")
    .isLength({min: 5, max: 50}).withMessage(auth_message.password_length)
    .matches(/^[a-zA-Z0-9]+$/i).withMessage(auth_message.password_type)
]

let login = [
  check("name_account")
    .isLength({min: 5}).withMessage(auth_message.na_acc_too_short)
    .isLength({max: 50}).withMessage(auth_message.na_acc_too_long)
    .matches(/^[a-zA-Z0-9]+$/i).withMessage(auth_message.na_acc_type),
  check("password")
    .isLength({min: 5, max: 50}).withMessage(auth_message.password_length)
    .matches(/^[a-zA-Z0-9]+$/i).withMessage(auth_message.password_type)
]

module.exports = {
  register,
  login
}