import React, { useState } from "react";
import "../../Styles/Registration.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/signup/", {
        username,
        email,
        password,
      });
      console.log(response.data.token)
      if (response.status === 200) {
        // toast({
        //   title: "Signup successful",
        //   description: "You've successfully signed up.",
        //   status: "success",
        //   duration: 5000,
        //   isClosable: true,
        // });
        alert("signup successfull")
        localStorage.setItem("token", JSON.stringify(response.data.token))
        navigate("/signin");
      } else {
        // toast({
        //   title: "Signup failed",
        //   description: "Please try again later.",
        //   status: "error",
        //   duration: 5000,
        //   isClosable: true,
        // });
        alert("signup failed")
      }
    } catch (error) {
      console.error("Error:", error);
      // toast({
      //   title: "An error occurred",
      //   description: "Please try again later.",
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      // });
      alert("error occured in api")
    }
  };

  return (
    <div className="container">
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
