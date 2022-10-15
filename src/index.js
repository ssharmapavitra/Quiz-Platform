import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

// Pages
import Landing from "./Pages/Landing.jsx";
import Admin from "./Layout/Admin.jsx";
import User from "./Layout/User.jsx";

// Stylesheet
import "./assets/stylesheet/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Landing/> }></Route>

            <Route path="/admin" element={<Admin/> }></Route>
            <Route path="/admin/:path" element={<Admin/> }></Route>

            <Route path="/user" element={<User/> }></Route>
            <Route path="/user/:path" element={<User/> }></Route>
        </Routes>
    </Router>
  </React.StrictMode>
);
