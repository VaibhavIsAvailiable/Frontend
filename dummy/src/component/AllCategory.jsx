import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AllCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:9091/freelancing/api/Categories/allCategories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:9091/freelancing/api/Categories/deleteById/${categoryId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete category');
      }
      // Navigate to "/Dashboard" after successful deletion
      navigate("/Dashboard");
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Categories</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.categoryId}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>{category.status}</td>
              <td>
                <Link to={`/editcategory/${category.categoryId}`} className="btn btn-primary">Edit</Link>
                <button onClick={() => handleDelete(category.categoryId)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCategory;
