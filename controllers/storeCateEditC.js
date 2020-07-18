const cate = require('../models/Cate.js')

module.exports = (req, res) => {
        cate.findById(req.params.id, function(err, data){
            data.name 			= req.body.name;
            data.save();
            req.flash('success_msg', 'Success !!!');
            res.redirect('/admin/cate/list');
        });
}