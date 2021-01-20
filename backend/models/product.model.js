const mongoose = require('mongoose');

const schema = mongoose.Schema;
const model = mongoose.model;

const productSchema = new schema({
    name: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    lastEdited: {
        type: Date,
        required: true,
        default: Date.now
    },
    stock: {
        type: Number,
        required: true
    }
})

const Product = model('Product', productSchema);

module.exports = Product;