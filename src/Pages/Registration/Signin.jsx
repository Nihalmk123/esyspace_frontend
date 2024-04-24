import React, { useState } from "react";
import "../../Styles/Registration.css";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sigin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toast = useToast();
  // signin handler function

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login/",
        formData
      );
      if (response.status === 200) {
        //get the token from the backend response
        const token = response.data.token;
        console.log(token)
        //  to Store token in local storage
        localStorage.setItem("token", token);
        // Show success toast
        toast({
          title: "Login successful",
          description: "You've successfully logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/dashboard");
      } else {
        // Handle unsuccessful login
        console.error("Login failed");
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please enter correct details.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error occurred while logging in:", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block login-img" />
                  {/* bg-login-image */}
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
                        <a onClick={handleSubmit} className="btn btn-primary btn-user btn-block">
                          Login
                        </a>
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
    </>
  );
};

export default Sigin;
