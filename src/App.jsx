// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from '../src/Main/Contact';
import Features from '../src/Main/Features';
import Home from '../src/Main/Home';
import Pricing from '../src/Main/Pricing';
import Signin from '../src/Accounts/Signin';
import Signup from '../src/Accounts/Signup';
import ForgotPassword from '../src/Accounts/ForgotPassword';
import Blog from './Main/Blog';
import PrivateRoute from '../src/Routes/PrivateRoutes';
import { Navigate } from "react-router-dom";
import BookConfRoom from './BookConfRoom/BookConfRoom';
import ManageMeetingRooms from './ManageMeetingRooms/ManageMeetingRooms';
import PageNotFound from './Main/PageNotFound';

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
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="BookRooms" element={<BookConfRoom />} />
          <Route path="/dashboard/ManageMeetingRooms" element={<ManageMeetingRooms/>} />
        </Route>
        <Route path="*" element={<Navigate to="/pagenotfound" />} />
      </Routes>
  );
}

export default App;
