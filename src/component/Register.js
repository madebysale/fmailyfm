import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { useEffect, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import SignaturePad from "./SignaturePad";
import  "yup-phone-lite";


import "./res.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),

  // mobile: Yup.string().required("Mobile number is required"),

  mobile: Yup.string()
  .phone("US", "Please enter a valid phone number")
  .required("A phone number is required"),


  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")

});


const Register = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [mysign, setmysign] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
    console.log(event.target.value);

    const value = event.target.value;
   
    if (value === "file2") {
      document.getElementById("canvas-signature").style.visibility = "hidden";
    } else {
      document.getElementById("canvas-signature").style.visibility = "visible";
    }
    if (value === "file1") {
      document.getElementById("signature").style.visibility = "hidden";
    } else {
      document.getElementById("signature").style.visibility = "visible";
    }

  };

  const signRef = useRef();
  const handleClear = () => console.log(signRef.current.clear());

  const options = {
    penColor: "red",
    onEnd: () => signRef.current.toDataURL(),
  };

  console.log(mysign);
  const handle = () => {
    setmysign(signRef.current.toDataURL());
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
          password: "",
          confirmPassword: "",
          signature: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          //   setTimeout(() => {
          const fileInput = document.querySelector('input[type="file"]');
          const formData = new FormData();

          formData.append("name", values.name);
          formData.append("email", values.email);
          formData.append("mobile", values.mobile);
          formData.append("password", values.password);
          formData.append("signature", fileInput.files[0]);
          formData.append("canvassignature", mysign);

          console.log(values, "resgister");
          axios
            .post(
              "http://localhost:8080/api/public/user",
                formData,

              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((response) => {
              // setSubmitting(false);
              // localStorage.getItem(response.data.data.id)
              toast.success(response.data.message);
              
             
              console.log(response.data.data,'role res')

            })
            .catch((error) => {
              toast.warn(error.response.data.message);
            });

       
        }}
      >
        {({ errors, touched }) => (
          <Form className="register-form">
            <div className="container-grid">
              <div>
                <label htmlFor="name">Full name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-control-log"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback-er"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  className="form-control-log"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback-er"
                />
              </div>
              <div>
                <label htmlFor="mobile">Mobile No</label>
                <Field
                  type="number"
                  name="mobile"
                  placeholder="123-456-7890"
                  className="form-control-log"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="invalid-feedback-er"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="********"
                  className="form-control-log"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback-er"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="********"
                  className="form-control-log"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback-er"
                />
              </div>
            </div>

            <div className=" row">
              <div className="col" style={{ height: "172px" }}>
                <label>
                  <input
                  
                    type="radio"
                    name="fileAttachment"
                    value="file1"
                    checked={selectedFile === "file1"}
                    onChange={handleFileChange}
                  />

                  <label htmlFor="signature">Attach Signature</label>
                  <Field
                      id="canvas-signature"
                    type="file"
                    name="signature"
                    className="form-control-log"
                  />
                  <ErrorMessage
                    name="signature"
                    component="div"
                    className="invalid-feedback-er"
                  />
                </label>
              </div>

              <div className="col">
                <input
                  type="radio"
                  name="fileAttachment"
                  value="file2"
                  checked={selectedFile === "file2"}
                  onChange={handleFileChange}
                />
                <label htmlFor="signature">Signature</label>
                {/* <Field type="" name="signature-1" className="form-control-log" /> */}

                <div className="signature-pad-res"  id="signature">
                  <SignatureCanvas ref={signRef} options={options} />
                  <div className="sign-res-btn-res">
                    <Button className="sign-button-res" onClick={handleClear}>
                      Clear
                    </Button>
                    <Button className="sign-button-1-res" onClick={handle}>
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn-1 btn-primary">
              Signup
            </button>
          </Form>
        )}
      </Formik>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
