const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const orderSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
        //created upon document creation
    },
    manufacturer: {
        type: String,
        enum: ['','ford', 'kia', 'nissan', 'mercedes', 'bmw', 'range rover'], 
        //prevents invalid selection of manufacturer
    },
    model: {
        type: String,
    },
    total_price: {
        type: Number,      
    },
    date: {
        type: Date,
        default: new Date(),
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
