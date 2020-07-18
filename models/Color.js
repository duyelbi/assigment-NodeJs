var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var colorSchema = new Schema({
  name:  String,
},{collection : 'color'});

const color = mongoose.model('color', colorSchema)
module.exports = color