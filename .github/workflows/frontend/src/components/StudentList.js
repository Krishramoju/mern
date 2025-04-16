import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function StudentList() {
 const [students, setStudents] = useState([]);
 useEffect(() => {
 axios.get('/students').then(res => setStudents(res.data));
 }, []);
 const deleteStudent = (id) => {
 axios.delete('/students/' + id).then(() => {
 setStudents(students.filter(student => student._id !== id));
 });
 };
 return (
 <div>
 <h2>Student List</h2>
 <Link to="/add">Add Student</Link>
 <ul>
 {students.map(student => (
 <li key={student._id}>
 {student.name} ({student.rollNumber}) - {student.department}
 <Link to={`/edit/${student._id}`}> Edit</Link>
 <button onClick={() => deleteStudent(student._id)}>Delete</button>
 </li>
 ))}
 </ul>
 </div>
 );
}
export default StudentList;
