import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import AllCategory from './component/AllCategory';
import AddCategory from './component/AddCategory'
import EditCategory from './component/EditCategory';
import Header from './component/Header'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
const checkLoggedIn = () => {
    const userId = getCookie('userId');
    const name = getCookie('name');
    if (userId && name) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        {isLoggedIn && (
          <>
            
            <Route path="/AllCategory" element={<AllCategory />} />
            <Route path="/editcategory/:categoryId" element={<EditCategory/>} />
            <Route path="/AddCategory" element={<AddCategory/>}/>
          </>
        )}
        {!isLoggedIn && <Route path="/" element={<Login />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
