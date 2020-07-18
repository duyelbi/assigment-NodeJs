const admin = require('../models/Admin')
const path = require('path');

module.exports = (req, res) => {

    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/upload', image.name), function (error) {
        // model creates a new doc with browser data
        console.log(req.body)

        admin.findById(req.params.id, function(err, data){
            if (err) {
                console.log(err)

                return redirect('/admin/:id/edit')
            }
            data.username 			= req.body.username;
            data.password = req.body.password;
            data.image = '/upload/' + image.name
            data.save();
            req.flash('success_msg', 'Success !!!');
            res.redirect('/admin/list');
        });
    })
}