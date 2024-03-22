import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Box } from '@mui/material';

const SignUp = ({ history }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
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

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
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
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="secondary" onClick={handleLoginClick} fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default SignUp;
