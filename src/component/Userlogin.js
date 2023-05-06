import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './res.css'
import { Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Userlogin = (props) => {


  const token =  localStorage.getItem("token");
  const isrole =  localStorage.getItem("role");
  console.log(isrole)
  // console.log(i)
  

  const navigate = useNavigate();
  return (
    <div className="auth-form-container">
      {/* <h2>Sales Representative</h2> */}
      <h2>Login </h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            // .min(8, "Must be 8 characters or more")
            .required("Required"),
        })}
        onSubmit={(values) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
        axios
        .post("http://localhost:8080/api/public/userlogin", {
         
          email: values.email,
        
          password: values.password,
          
      
        }
     
        
      )
        
        
        
        
      
        .then((response) => {
          // setSubmitting(false);

          toast.success(response.data.message)
          console.log(response.data.token)

          if(response.data.code !== 200){
            localStorage.setItem("token",response.data.token)
            localStorage.setItem('role',response.data.data.role)
            // localStorage.setItem("id",JSON.stringify(response.data.id))
            navigate("/admin/home", { replace: true });
            console.log(response.data.data.role,"ssssaa")
            
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem('role')
            navigate("/login", { replace:true});
            // toast.error(response.data.message);
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
                <label htmlFor="password">Password</label>
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
              Log In
            </Button>
           <Link to='/forgetpassword' > <div className="link-btn" style={{float:"right"}}  >
        Forget password
      </div></Link>
          </Form>
        )}
      </Formik>
      
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
      
     



    </div>
  );
};

export default Userlogin;
