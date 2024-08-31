import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from '../src/profileSection/profileSection'

const App = () => {
  return (
    <Router>
     <Routes>
     <Route exact path="/" element={<Profile/>} />
      
        </Routes>
    </Router>
  );
};

export default App;