import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


import mylogo from "../component/fm_logo.png";
import { redirect, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Logres from "./Logres";



const LoginForm = () => {
  
  return (
        <div className="container">
          <div className="row">
            <div className=" login-img col-md-4">
              <img
                className="logo-login-1"
                src={mylogo}
                alt="React Logo"
                style={{ width: "350px" }}
              />
            </div>
            <div className="col-md-8">
              <Logres />
            </div>
          </div>
          </div>
    

  );
};

export default LoginForm;
