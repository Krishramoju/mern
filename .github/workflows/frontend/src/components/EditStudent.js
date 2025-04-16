import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function EditStudent() {
 const { id } = useParams();
 const [form, setForm] = useState({ name: '', email: '', rollNumber: '', department: '' });
 const navigate = useNavigate();
 useEffect(() => {
 axios.get('/students/' + id).then(res => setForm(res.data));
 }, [id]);
 const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
 e.preventDefault();
 axios.put('/students/' + id, form).then(() => navigate('/'));
 };
 return (
 <form onSubmit={handleSubmit}>
 <input name="name" value={form.name} onChange={handleChange} />
 <input name="email" value={form.email} onChange={handleChange} />
 <input name="rollNumber" value={form.rollNumber} onChange={handleChange} />
 <input name="department" value={form.department} onChange={handleChange} />
 <button type="submit">Update Student</button>
 </form>
 );
}
export default EditStudent;
