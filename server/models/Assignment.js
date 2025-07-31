const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  name: { type: String, required: true },
  grade: { type: Number, required: true }, // e.g., 87
  weight: { type: Number, required: true }, // e.g., 20 for 20%
});

module.exports = mongoose.model('Assignment', assignmentSchema);
