const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    category: { type: String, required: true },
    notice: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Notification', schema);
