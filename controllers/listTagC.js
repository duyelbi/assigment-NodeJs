const tag = require("../models/Tag")

module.exports = (req, res) => {
		tag.find({}, function (error, tags) {
            console.log(tags);
            res.render('admin/tag/listTag', {
                tag: tags
            });
        })
}