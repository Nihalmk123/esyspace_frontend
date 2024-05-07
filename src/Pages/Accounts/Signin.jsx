import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../../context/auth";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const [, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        username: username,
        password: password,
      });
  
      if (response.status === 200) {
        const { token, user_id } = response.data;
        // Store token and user ID to local storage
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user_id);
        // Set user authentication including the user ID
        setAuth({ user: username, token: token, user_id: user_id });
        navigate('/dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      // Display error toast
      toast({
        title: 'Login failed',
        description: 'Please enter correct details.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.error('Error occurred while logging in:', error);
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
                      <h1 className="h4 text-gray-900 mb-4">Sign in</h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control form-control-user" id="mail" placeholder="Username" />
                      </div>
                      <div className="form-group">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                      </div>
                      <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                      <hr />
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forgotPassword">Forgot Password?</Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/signup">Create New Account?</Link>
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

export default SignIn;
