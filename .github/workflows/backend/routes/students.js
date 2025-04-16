const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
router.post('/', async (req, res) => {
 try {
 const student = new Student(req.body);
 await student.save();
 res.json(student);
 } catch (err) {
 res.status(500).send(err);
 }
});
router.get('/', async (req, res) => {
 try {
 const students = await Student.find();
 res.json(students);
 } catch (err) {
 res.status(500).send(err);
 }
});
router.get('/:id', async (req, res) => {
 try {
 const student = await Student.findById(req.params.id);
 res.json(student);
 } catch (err) {
 res.status(500).send(err);
 }
});
router.put('/:id', async (req, res) => {
 try {
 const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true
});
 res.json(updatedStudent);
 } catch (err) {
 res.status(500).send(err);
 }
});
router.delete('/:id', async (req, res) => {
 try {
 await Student.findByIdAndDelete(req.params.id);
 res.json({ message: 'Student deleted' });
 } catch (err) {
 res.status(500).send(err);
 }
});
module.exports = router;
