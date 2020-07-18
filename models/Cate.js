var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var cateSchema = new Schema({
  name:  String,
},{collection : 'cate'});

const cate = mongoose.model('cate', cateSchema)
module.exports = cate