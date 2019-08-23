/**
 * Created by Ricardo Jiménez Hernández
 * 12/08/19.
 */

const mongoose = require('mongoose');
const JobEntrySchema = require('./job.entry');
const TechnicalSkillEntrySchema = require('./technical.skill.entry');
const CertificationEntrySchema = require('./certification.entry');
const SkillEntrySchema = require('./skill.entry');
const OwnerSchema = require('./owner');

const Schema = mongoose.Schema;
const ResumeSchema = new Schema({
  summary: { type: String, required: true },
  owner: OwnerSchema,
  jobs : [JobEntrySchema],
  technical: [TechnicalSkillEntrySchema],
  skills: [SkillEntrySchema],
  languages: [SkillEntrySchema],
  certifications: [CertificationEntrySchema],
}, {
  toJSON: {
    transform: (doc, ret) => { 
      delete ret._id;
      delete ret.__v; }
  }
});

module.exports = mongoose.model('Resume', ResumeSchema);