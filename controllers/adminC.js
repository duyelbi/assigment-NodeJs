const admin = require("../models/Admin")
const product = require("../models/Product")
const user = require("../models/user")


module.exports = (req, res) => {
  admin.findById(req.params.id, function(err, admin) {
    product.find({}, function(err, products) {
      user.find({}, function(err, user) {
        console.log(req.session)
        res.render('admin/main/index', {
          product: products,
          admin: admin,
          user: user
      });
      })
    })
  })
}