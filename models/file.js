const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    fileName: { type: String, require: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String, required: false },
    receiver: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('File', FileSchema);