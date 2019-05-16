const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    reason: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    days: { type: Number, required: true },
    status: { type: String, required: true },
    regNo: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Leave', schema);
