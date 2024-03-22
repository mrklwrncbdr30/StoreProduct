import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, TextField, Box } from '@mui/material';
import axios from "axios";
//http://localhost:8080/api/v1/users api for get user data
const Login = ({ history }) => {

 const[GetUser,setGetUser] = useState([])

 useEffect(() =>{
   userData();

 },[]);

 const userData = async() =>{
   const result = await axios.get(
     "http://localhost:8080/api/v1/users"
   );
   setGetUser(result.data)
   console.log(result.data)
 };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for now just log the form data
    console.log(formData);
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="contained" color="secondary" onClick={handleSignUpClick}>
          Sign Up
        </Button>
        <Button variant="contained" color="primary" onClick={handleSignUpClick}>
          Forgot Password
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
