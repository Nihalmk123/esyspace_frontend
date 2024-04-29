import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "../src/Pages/Main/Contact";
import Features from "../src/Pages/Main/Features";
import Home from "../src/Pages/Main/Home";
import Pricing from "../src/Pages/Main/Pricing";
import Signin from "./Pages/Accounts/Signin";
import Signup from "./Pages/Accounts/Signup";
import Dasboard from "../src/Pages/Dashboard/Dasboard";
import ForgotPassword from "./Pages/Accounts/ForgotPassword";
import Blog from "./Pages/Main/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard/*" element={<Dasboard/>}>
          <Route path="BookRooms" element={<h1>Book Rooms</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
