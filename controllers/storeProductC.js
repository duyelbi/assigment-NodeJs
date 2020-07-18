const product = require('../models/Product.js')
const path = require('path');
const mongoose = require('mongoose');

module.exports = (req, res) => {
    let image = Object.values(req.files);


    if (typeof(image[0][0]) =="object") {
        image = Object.values(image[0]);
    }

    console.log(image[0])
    var arrayImage = [];
    image.forEach((E, index) => {
        E.name = req.body.name + index;

        arrayImage.push(E.name + '.jpg');
        E.mv(__dirname + '/../public/upload/' + E.name + '.jpg', function(err) {
            if (err) {
                console.log(err);
            }
        })
    })

        var Product = new product({
            _id: new mongoose.Types.ObjectId(),
            ...req.body,
            image: arrayImage
        });

        Product.save(function (err) {
            if (err) throw err;

            console.log('success save product')
            res.redirect('/admin/product/list')
        })
}