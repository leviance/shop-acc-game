const { auth_services } = require('../services/index');

const { validationResult } = require('express-validator');

const user_register = async (req, res) => {
    let result_valid = validationResult(req).errors;

    if(result_valid.length > 0) return res.status(500).send(result_valid);

    try {
        let name_account = req.body.name_account;
        let phone_number = req.body.phone_number;
        let password = req.body.password;

        let result = await auth_services.user_register({name_account, phone_number, password});

        return res.status(200).send(result);
    } catch (errors) {
        return res.status(500).send(errors);
    }
}

const user_login = async (req, res) => {
    let result_valid = validationResult(req).errors;

    if(result_valid.length > 0) return res.status(500).send(result_valid);

    try {
        let name_account = req.body.name_account;
        let password = req.body.password;

        let user_data = await auth_services.user_login(name_account, password);

        req.session.user_id = user_data._id;

        return res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    user_register,
    user_login
}