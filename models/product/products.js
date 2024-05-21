const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:  { type: String},
    url:  { type: String},
    metaTitle:String,
    description:String,
    active:Boolean,
    range:Array,
    rangeText:String,
    advantageText:String,
    advantages:String,
    imageUrl: {type:String},
    footerUrl: {type:String},
    footer:String
})
module.exports = mongoose.model('product',ProductSchema);