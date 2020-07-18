const size = require("../models/Size")

module.exports = (req, res) => {
		size.find({}, function (error, sizes) {
            console.log(sizes);
            res.render('admin/size/listSize', {
                size: sizes
            });
        })
}