const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const AdminSchema = new Schema({
 fullName 		: String,
 image 			: String,
 username: {
     type: String,
     required: true,
     unique: true
 },
 password: {
     type: String,
     required: true
 }

},{collection : 'admin'});

AdminSchema.pre('save', function (next) {
    const admin = this
    bcrypt.hash(admin.password, 10, (error, hash) => {
        admin.password = hash
        next()
    })
})

const Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin