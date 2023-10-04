const mongoose = require('mongoose');

const truckSchema = mongoose.Schema({
    reg_no: { type: String, required: true },
    insurance: { type: { number: String, valid: Boolean }, required: true },
    puc: { type: { number: String, valid: Boolean }, required: true }
});

module.exports = mongoose.model('Truck', truckSchema);