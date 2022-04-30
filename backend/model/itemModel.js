const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require:true
    },
    amount: {
        type: Number,
        required:true
    }
})


//naming this model the item model and it's taking in the item schema created above
const Item = mongoose.model('Items', itemSchema);

module.exports = Item;