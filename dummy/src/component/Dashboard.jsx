import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Toolbar, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Category, Home, ProductionQuantityLimits } from '@mui/icons-material';

import Header from "./Header";

const Dashboard = () => {
  const getCookie = (name) => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(name))
      ?.split('=')[1];
    return cookieValue || '';
  };

  const name = getCookie('name');
  const userId = getCookie('userId');

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <Header/>
      <div style={{ display: 'flex', marginTop: '64px' }}> {/* Adjust the marginTop value based on your Header height */}
        <Drawer variant="permanent">
          <Toolbar />
          <div className="sidebar">
            <List>
              <ListItemButton
                component={Link}
                to="/AllCategory"
                selected={activeItem === 'home'}
                onClick={() => handleItemClick('home')}
              >
                <ListItemIcon>
                  <Home color={activeItem === 'home' ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/my-profile"
                selected={activeItem === 'category'}
                onClick={() => handleItemClick('category')}
              >
                <ListItemIcon>
                  <Category color={activeItem === 'category' ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Category" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/AllCategory"
                selected={activeItem === 'products'}
                onClick={() => handleItemClick('products')}
              >
                <ListItemIcon>
                  <ProductionQuantityLimits color={activeItem === 'products' ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>
            </List>
            <Divider />
          </div>
        </Drawer>
        <div style={{ flexGrow: 1, padding: '20px' }}>
          {/* Dashboard content */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">Hello Admin {name}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
