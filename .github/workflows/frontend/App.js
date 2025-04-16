import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
function App() {
 return (
 <Router>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/add" element={<AddStudent />} />
 <Route path="/edit/:id" element={<EditStudent />} />
 </Routes>
 </Router>
);
}
export default App;
