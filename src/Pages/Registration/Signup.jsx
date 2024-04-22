import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../../Styles/Registration.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block login-img"  />
                  {/* bg-login-image */}
                  <div className="col-lg-6">
                  
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Sign up</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="name" className="form-control form-control-user" id="Firstname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                          <input type="name" className="form-control form-control-user" id="Last Name" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="mail" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <input type="phone" className="form-control form-control-user" id="Phone no" placeholder="Phone no" />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                          Login
                        </a>
                        <hr />
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="/forgotPassword">Forgot Password?</Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/signin">Already have an account?</Link>
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

export default Signup;
