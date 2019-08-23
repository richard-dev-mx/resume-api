/**
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let JobEntrySchema = new Schema({
  employer: { type: String, required: true },
  startDate: { type: Date, required: true, default: Date.now },
  endDate: { type: Date },
  jobTitle: { type: String },
  city: { type: String },  
  achievements: [String],
}, {
  toJSON: {
    transform: (doc, ret) => { delete ret._id; }
  }
});

module.exports = JobEntrySchema;