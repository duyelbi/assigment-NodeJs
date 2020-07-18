var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var sizeSchema = new Schema({
  name:  String,
},{collection : 'size'});

const size = mongoose.model('size', sizeSchema)
module.exports = size