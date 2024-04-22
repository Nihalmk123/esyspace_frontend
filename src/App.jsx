import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Signin from "./Pages/Registration/Signin";
import Signup from "./Pages/Registration/Signup";
import Blog from "./Pages/Blog";
import Dasboard from "./Pages/Dasboard";
import ForgotPassword from "./Pages/ForgotPassword";

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
