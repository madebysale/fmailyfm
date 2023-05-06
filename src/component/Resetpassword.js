import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './res.css'
import { Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Resetpassword = () => {
//   const userid = localStorage.getItem("id")

//   const token =  localStorage.getItem("token");
//   console.log(token)
  

  const navigate = useNavigate();
  return (
    <div className="auth-form-container">
      {/* <h2>Sales Representative</h2> */}
      <h2>Reset password </h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            // .min(8, "Must be 8 characters or more")
            .required("Required"),
          otp: Yup.string()
            // .min(8, "Must be 8 characters or more")
            .required("Required"),
        })}
        onSubmit={(values) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
        axios
        .post("http://localhost:8080/api/public/resetpassword", {
         
          email: values.email,
        
          password: values.password,
          otp: values.otp,
          
      
        })
        .then((response) => {
          // setSubmitting(false);

          toast.success(response.data.message)
          console.log(response.data.token)

          if(response.data.code !== 200){
            
            
          } else {
            
          }
        }).catch((error)=>{
            toast.error(error.response.data.message)
        })


     



        }}
      >
        {({ errors,touched }) => (
          <Form className="login-form">
            <Row>
              <Col>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="form-control-log" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="email">enter otp</label>
                <Field type="number" name="otp" className="form-control-log" />
                <ErrorMessage
                  name="otp"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="password">New Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control-log"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </Row>
            <Button type="submit" className="btn-1">
              Reset PASSWORD
            </Button>
           <Link to='/login' > <div className="link-btn" style={{float:"right"}}  >
        Go to login page
      </div></Link>
          </Form>
        )}
      </Formik>
      
      {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button> */}
      
     



    </div>
  );
};

export default Resetpassword;
