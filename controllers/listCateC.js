const cate = require("../models/Cate")
const redirectIfAuthenticatedMiddleware = require("../middleware/redirectIfAuthenticatedMiddleware")

module.exports = (req, res) => {
    cate.find({}, function (error, cates) {
        console.log(req.session)
        console.log(cates);
        res.render('admin/cate/listCate', {
            cate: cates
        });
    })
}
