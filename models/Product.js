var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const productSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:  {
    type: String,
    required:[true, 'name is required'],
    unique: [true]
  },
  cate: Array,
  image:  Array,
  price: Number,
  quantity:  Number,
  color: Array,
  size: Array,
  tag: Array,
  des 			: String
},{collection : 'product'});

const product = mongoose.model('product', productSchema);
module.exports = product