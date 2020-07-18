const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true, // khong de trong
        unique: true  // la duy nhat
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})
// export model
const user = mongoose.model('user', userSchema);
module.exports = user