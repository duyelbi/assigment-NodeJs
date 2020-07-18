const color = require("../models/Color")

module.exports = (req, res) => {
		color.find({}, function (error, colors) {
            console.log(colors);
            res.render('admin/color/listColor', {
                color: colors
            });
        })
}