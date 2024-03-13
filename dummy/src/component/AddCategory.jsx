import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    status: "active" 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9091/freelancing/api/Categories/register', categoryData)
      .then(response => {
        console.log(response);
        
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('Error adding category data:', error);
      });
  };

  return (
    <div>
      <h1>Add Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={categoryData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" name="description" value={categoryData.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select className="form-select" name="status" value={categoryData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;
