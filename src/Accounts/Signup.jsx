import React, { useState } from "react";
import "../../src/Styles/Registration.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/signup/", {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        // Redirect to signin page
        navigate("/signin");
      } else {
        // Handle unsuccessful signup
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle API error
      alert("Error occurred during signup");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block login-img" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Sign up</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="form-control form-control-user"
                          id="Username"
                          placeholder="Username*"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control form-control-user"
                          id="mail"
                          placeholder="Email*"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password*"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Signup
                      </button>
                      <hr />
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forgotPassword">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/signin">
                        Already have an account?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
