import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
       });

   
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
