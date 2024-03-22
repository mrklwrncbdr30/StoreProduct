// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
  );
};

export default App;
