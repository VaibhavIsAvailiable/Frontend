// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [values, setValues] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();
// const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:9091/freelancing/api/users/login',values)
//     .then(res=>{
//        const { userId, name } = res.data;
//       document.cookie = `userId=${userId};`;
//       document.cookie = `name=${name};`;
//       navigate('/dashboard')
//     }).
//     catch(err=>{
//     navigate('/')
//     });

//   };

//   return (
//     <>
//       <section className="vh-100 gradient-custom">
//         <form onSubmit={handleSubmit}>
//           <div className="container py-5 h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//                 <div className="card bg-dark text-white">
//                   <div className="card-body p-5 text-center">
//                     <div className="mb-md-5 mt-md-4 pb-5">
//                       <h2 className="fw-bold mb-2 text-uppercase">DigitalFlake</h2>
//                       <p className="text-white-50 mb-5">
//                        Welcome to DigitalFlake Login
//                       </p>

//                       <div className="form-outline form-white mb-4">
//                         <input
//                           type="email"
//                           id="typeEmailX"
//                           className="form-control form-control-lg"
//                           onChange={(e) =>
//                             setValues({ ...values, email: e.target.value })
//                           }
//                         />
//                         <label className="form-label" htmlFor="typeEmailX">
//                           Email
//                         </label>
//                       </div>

//                       <div className="form-outline form-white mb-4">
//                         <input
//                           type="password"
//                           id="typePasswordX"
//                           className="form-control form-control-lg"
//                           onChange={(e) =>
//                             setValues({ ...values, password: e.target.value })
//                           }
//                         />
//                         <label
//                           className="form-label"
//                           htmlFor="typePasswordX"
//                         >
//                           Password
//                         </label>
//                       </div>

//                       <p className="small mb-5 pb-lg-2">
//                         <a className="text-white-50" href="#!">
//                           Forgot password?
//                         </a>
//                       </p>

//                       <button
//                         className="btn btn-outline-light btn-lg px-5"
//                         type="submit"
//                         style={{ backgroundColor: "violet" }}
//                       >
//                         Login
//                       </button>

//                       <div className="d-flex justify-content-center text-center mt-4 pt-1">
//                         <a href="#!" className="text-white">
//                           <i className="fab fa-facebook-f fa-lg"></i>
//                         </a>
//                         <a href="#!" className="text-white">
//                           <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
//                         </a>
//                         <a href="#!" className="text-white">
//                           <i className="fab fa-google fa-lg"></i>
//                         </a>
//                       </div>
//                     </div>

//                     <div>
//                       <p className="mb-0">
//                         Don't have an account?{" "}
//                         <a href="#!" className="text-white-50 fw-bold">
//                           Sign Up
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import welcomeText from "../assets/Welcome to Digitalflake Admin.svg";
import homeImage from "../assets/image 289.svg";
import backgroundImage from "../assets/LoginImage.svg";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9091/freelancing/api/users/login",
        values
      );

      const { userId, name } = response.data;
      document.cookie = `userId=${userId};`;
      document.cookie = `name=${name};`;

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      // Handle login error (show error message, etc.)
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        padding: "10px",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "500px",
          height: "600px",
          marginLeft: "86px",
          marginTop: "70px",
          backgroundColor: "white",
          boxShadow: "2px 1px 5px rgba(0, 0, 0, 0.4)",
          borderRadius: "10px",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={homeImage} alt="First Image" style={{ width: "300px" }} />
          <img
            src={welcomeText}
            alt="Second Image"
            style={{ width: "400px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography variant="body2" style={{ marginTop: "8px" }}>
            <Link href="#" color="textSecondary">
              Forgot Password
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
