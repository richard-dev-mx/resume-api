/**
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const mongoose = require('mongoose');
const ContactInfoSchema = require('./contact.info');
const Schema = mongoose.Schema;

let OwnerSchema = new Schema({
  fullName: { type: String, required: true },
  title: { type: String, required: true },
  avatarUrl: { type: String, required: true},
  contact: ContactInfoSchema,
}, {
  toJSON: {
    transform: (doc, ret) => { delete ret._id; }
  }
});

module.exports = OwnerSchema;