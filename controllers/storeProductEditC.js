const product = require('../models/Product.js')
const path = require('path');
const mongoose = require('mongoose');

module.exports = (req, res) => {
    let image = Object.values(req.files);

    if (typeof(image[0][0]) =="object") {
        image = Object.values(image[0]);
    }
    var arrayImage = [];
    image.forEach((E, index) => {
        E.name = req.body.name + index;

        arrayImage.push(E.name + '.jpg');
        E.mv(__dirname + '/../public/upload/' + E.name + '.jpg', function(err) {
            if (err) {
                console.log(err);
            }
            product.findById(req.params.id, function(err, data){
                if (err) {
                    console.log(err)
        
                    return redirect('/admin/product/:id/edit')
                }
                console.log(req.body)
                data.name 			= req.body.name;
                data.cate = req.body.cate;
                data.image = arrayImage;
                data.price = req.body.price;
                data.quantity = req.body.quantity;
                data.color = req.body.color;
                data.size = req.body.size;
                data.tag = req.body.tag;
                data.des = req.body.des;
                data.save();
                req.flash('success_msg', 'Success !!!');
                res.redirect('/admin/product/list');
            });
        })
    })
}