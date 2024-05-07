// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../src/Pages/Main/Contact';
import Features from '../src/Pages/Main/Features';
import Home from '../src/Pages/Main/Home';
import Pricing from '../src/Pages/Main/Pricing';
import Signin from './Pages/Accounts/Signin';
import Signup from './Pages/Accounts/Signup';
import ForgotPassword from './Pages/Accounts/ForgotPassword';
import Blog from './Pages/Main/Blog';
import PrivateRoute from '../src/Routes/PrivateRoutes';
import { Navigate } from "react-router-dom";
import BookConfRoom from './Pages/Dashboard/BookConfRoom/BookConfRoom';
import ManageMeetingRooms from './Pages/Dashboard/ManageMeetingRooms/ManageMeetingRooms';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="BookRooms" element={<BookConfRoom />} />
          <Route path="/dashboard/ManageMeetingRooms" element={<ManageMeetingRooms/>} />
        </Route>
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
  );
}

export default App;
