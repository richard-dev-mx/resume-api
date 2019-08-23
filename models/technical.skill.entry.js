/**
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TechnicalSkillEntrySchema = new Schema({
  friendlyName: { type: String, required: true },
  icon: { type: String },
}, {
  toJSON: {
    transform: (doc, ret) => { delete ret._id; }
  }
});

module.exports = TechnicalSkillEntrySchema;