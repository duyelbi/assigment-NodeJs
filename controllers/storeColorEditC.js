const color = require('../models/Color.js')

module.exports = (req, res) => {
        color.findById(req.params.id, function(err, data){
            data.name 			= req.body.name;
            data.save();
            req.flash('success_msg', 'Success !!!');
            res.redirect('/admin/color/list');
        });
}