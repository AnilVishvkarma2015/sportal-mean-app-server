const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, default: Date.now },
    email: { type: String, unique: true, required: true },
    regNo: { type: String, unique: true, required: true },
    password: { type: String},
    isAdmin: {type: Boolean, required: true, default: false},
    class: { type: String },
    section: { type: String },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    resetToken: { type: String },
    isActive: {type: Boolean, required: true, default: true},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
