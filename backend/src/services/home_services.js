const user_model = require('../models/user_models');

const get_user_data = (user_id) => {
    return new Promise( async (resolve, reject) => {
        let user_data = await user_model.find_user_by_id(user_id);

        if(!user_data) return reject();

        return resolve(user_data);
    });
}

module.exports = {
    get_user_data
}