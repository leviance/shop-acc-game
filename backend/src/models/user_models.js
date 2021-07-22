const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user_schema = new Schema({
  username: {type: String, default: "Người dùng"},
  name_account: {type: String},
  id_account: {type: Number, default: 0},
  phone_number: {type: String},
  password: String,

  facebook: {
    id: String,
    token: String,
    email: {type: String, trim: true}
  },

  removed_time: {type: Number, default: null},
  update_time: {type: Number, default: null},
  created_time: {type: Number, default: Date.now()},
});


user_schema.statics = {
  find_by_name_account(name_account) {
    return this.findOne({"name_account": name_account}).exec();
  },

  create_new(user_data) {
    return this.create({
      "name_account": user_data.name_account,
      "phone_number": user_data.phone_number,
      "password": user_data.password,
    });
  },

  find_by_phone_number(phone_number) {
    return this.findOne({"phone_number": phone_number }).exec();
  }
}

user_schema.pre("save", function(next) {
  if(this.isNew) {
    user_model.countDocuments().then(res => {
      this.id_account = res + 1000; // Increment count
      next();
    });
  } else {
    next();
  }
})


let user_model = mongoose.model('users', user_schema)

module.exports = user_model;