import React from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Welcome to Our Product Web Store
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Explore our wide range of products and find what you need.
      </Typography>
      <form>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          InputProps={{
            endAdornment: (
              <Button variant="contained" color="primary" size="small">
                Search
              </Button>
            ),
          }}
        />
      </form>
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" fullWidth component={Link} to="/signup">
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" fullWidth component={Link} to="/login">
            Login
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body2" paragraph align="center" style={{ marginTop: '20px' }}>
        Can't find what you're looking for? Feel free to contact us.
      </Typography>
      <Button variant="contained" color="primary" fullWidth>
        Contact Us
      </Button>
    </Container>
  );
};

export default Landing;
