const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const Assignment = require('../models/Assignment');
const verifyToken = require('../middleware/auth');

// Get all courses + their calculated average
router.get('/', verifyToken, async (req, res) => {
  const courses = await Course.find({ userId: req.user.id });

  const coursesWithGrades = await Promise.all(
    courses.map(async (course) => {
      const assignments = await Assignment.find({ courseId: course._id });
      const totalWeight = assignments.reduce((acc, a) => acc + a.weight, 0);
      const weightedSum = assignments.reduce((acc, a) => acc + a.grade * a.weight, 0);
      const average = totalWeight > 0 ? weightedSum / totalWeight : 0;

      return { ...course._doc, average, assignments };
    })
  );

  res.json(coursesWithGrades);
});

// Add a new course
router.post('/', verifyToken, async (req, res) => {
  const course = await Course.create({ courseCode: req.body.name, name: req.body.name, userId: req.user.id });
  res.status(201).json(course);
});

// Add an assignment
router.post('/:courseId/assignments', verifyToken, async (req, res) => {
  const { name, grade, weight } = req.body;
  const assignment = await Assignment.create({
    name,
    grade,
    weight,
    courseId: req.params.courseId,
  });
  res.status(201).json(assignment);
});

module.exports = router;


// Delete a course and optionally its assignments
router.delete('/:courseId', verifyToken, async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({
      _id: req.params.courseId,
      userId: req.user.id,
    });

    if (!course) {
      return res.status(404).json({ message: 'Course not found or unauthorized' });
    }

    // Optional: Delete all assignments linked to the course
    await Assignment.deleteMany({ courseId: req.params.courseId });

    res.json({ message: 'Course and its assignments deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during deletion' });
  }
});



// DELETE an assignment by ID
router.delete('/:courseId/assignments/:assignmentId', verifyToken, async (req, res) => {
  const { assignmentId } = req.params;

  try {
    await Assignment.findByIdAndDelete(assignmentId);
    res.json({ message: 'Assignment deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete assignment' });
  }
});


// Update an assignment by ID (needed for editing)
router.put('/:courseId/assignments/:assignmentId', verifyToken, async (req, res) => {
  try {
    const { name, grade, weight } = req.body;
    const updatedAssignment = await Assignment.findOneAndUpdate(
      { _id: req.params.assignmentId, courseId: req.params.courseId },
      { name, grade, weight },
      { new: true }
    );
    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.json(updatedAssignment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update assignment' });
  }
});
