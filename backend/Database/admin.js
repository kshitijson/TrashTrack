const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const adminSchema = mongoose.Schema({
    name: { type: String, required: true },
    region: { type: String, required: true },
    regionCode: { type: String, required: true, unique: true },
    emailId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);