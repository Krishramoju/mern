const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
 name: String,
 email: String,
 rollNumber: String,
 department: String
});
module.exports = mongoose.model('Student', studentSchema);
