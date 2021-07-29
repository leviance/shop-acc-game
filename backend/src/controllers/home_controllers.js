const get_home_page_user_data = async (req, res) => {
    console.log(req.session.user_id);

    return res.status(200).send();
}

module.exports = {
    get_home_page_user_data
}