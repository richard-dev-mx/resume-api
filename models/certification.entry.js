/**
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CertificationEntrySchema = new Schema({
  friendlyName: { type: String, required: true },
  issuer: { type: String, required: true },  
  startDate: { type: Date, required: true, default: Date.now },
  identifier: { type: String },
  url: { type: String },
  logoUrl: { type: String },
}, {
  toJSON: {
    transform: (doc, ret) => { delete ret._id; }
  }
});

module.exports = CertificationEntrySchema;