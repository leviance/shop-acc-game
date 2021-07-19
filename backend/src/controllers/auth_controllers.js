const {auth_message} = require("../../lang/vi");

function user_register(req, res) {
    try {
        let {name_account, phone_number, password} = req.body;

        let name_account_regex =  /^[a-zA-Z0-9]{6,30}$/;
        let phone_number_regex = /^[0-9]{10}$/;
        let password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,30}$/;

        if(!name_account_regex.test(name_account)) throw new Error(auth_message.name_account_invalid);
        if(!phone_number_regex.test(phone_number)) throw new Error(auth_message.phone_number_invalid);
        if(!password_regex.test(password)) throw new Error(auth_message.password_invalid);

        
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    user_register
}