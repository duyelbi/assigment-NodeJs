const customer = require("../models/user")

module.exports = (req, res) => {
		customer.find({}, function (error, customers) {
            console.log(customers);
            res.render('admin/customer/listCustomer', {
                customer: customers
            });
        })
}