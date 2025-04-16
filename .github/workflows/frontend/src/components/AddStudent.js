import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddStudent() {
 const [form, setForm] = useState({ name: '', email: '', rollNumber: '', department: '' });
 const navigate = useNavigate();
 const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
 const handleSubmit = (e) => {
 e.preventDefault();
 axios.post('/students', form).then(() => navigate('/'));
 };
 return (
 <form onSubmit={handleSubmit}>
 <input name="name" placeholder="Name" onChange={handleChange} />
 <input name="email" placeholder="Email" onChange={handleChange} />
 <input name="rollNumber" placeholder="Roll Number" onChange={handleChange} />
 <input name="department" placeholder="Department" onChange={handleChange} />
 <button type="submit">Add Student</button>
 </form>
 );
}
export default AddStudent;
