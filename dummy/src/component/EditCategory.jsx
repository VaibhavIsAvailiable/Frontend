import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    status: ""
  });

  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) return;
    axios.get(`http://localhost:9091/freelancing/api/Categories/getCategoryByID/${categoryId}`)
      .then(response => {
        setCategoryData(response.data);
      })
      .catch(error => {
        console.error('Error fetching category data:', error);
      });
  }, [categoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9091/freelancing/api/Categories/updateCategoryById/${categoryId}`, categoryData)
      .then(response => {
        console.log('Category data updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating category data:', error);
      });
  };

  return (
    <div>
      <h1>Edit Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={categoryData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" name="description" value={categoryData.description} onChange={handleChange} />
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

export default EditCategory;
