var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var tagSchema = new Schema({
  name:  String,
},{collection : 'tag'});

const tag = mongoose.model('tag', tagSchema)
module.exports = tag