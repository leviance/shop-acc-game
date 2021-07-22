const user_models = require('../models/user_models');
const {auth_message} = require("../../lang/vi");
const {message_to_client} = require("../helper/message_helper");

const bcrypt = require('bcrypt');

const saltRounds = 4;


const user_register = (user_data) => {
  return new Promise( async (resolve, reject) => {
    const check_name_account = await user_models.find_by_name_account(user_data.name_account);
    const check_phone_number = await user_models.find_by_phone_number(user_data.phone_number);

    const [name_account, phone_number] = await Promise.all([check_name_account, check_phone_number]);
    
    if(name_account) return reject(message_to_client("body", auth_message.name_account_existed, "name_account"));
    if(phone_number) return reject(message_to_client("body", auth_message.phone_number_existed, "phone_number"));

    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(user_data.password, salt, function(err, hash) {
        user_data.password = hash;
        
        user_models.create_new(user_data);
      });
    });

    return resolve(auth_message.create_success);
  })
}

const user_login = (name_account, password) => {
  return new Promise( async (resolve, reject) => {
    let user_data = await user_models.find_by_name_account(name_account);
    if(!user_data) return reject(auth_message.login_invalid);

    const match = await bcrypt.compare(password, user_data.password);

    if(!match) return reject(auth_message.login_invalid);

    return resolve(user_data);
  })
}

module.exports = {
  user_register,
  user_login
}