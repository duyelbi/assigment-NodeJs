const admin = require("../models/Admin")

module.exports = (req, res) => {
		admin.find({}, function (error, admins) {
            console.log(admins);
            res.render('admin/admin/listAdmin', {
                admin: admins
            });
        })
}