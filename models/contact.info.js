/**
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ContactInfoSchema = new Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true},
  github: { type: String },
}, {
  toJSON: {
    transform: (doc, ret) => { delete ret._id; }
  }
});

module.exports = ContactInfoSchema;