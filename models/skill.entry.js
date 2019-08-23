/**
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SkillEntrySchema = new Schema({
  friendlyName: { type: String, required: true },
  percentage: { type: Number, required: true, min: 0, max: 100 },
}, {
  toJSON: {
    transform: (doc, ret) => { delete ret._id; }
  }
});

module.exports = SkillEntrySchema;