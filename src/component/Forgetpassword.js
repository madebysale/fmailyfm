import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./res.css";
import { Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Forgetpassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <div className="auth-form-container">
      {/* <h2>Sales Representative</h2> */}
      <h2>Forget password </h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values) => {
            setLoading(true)
          axios
            .post("http://localhost:8080/api/public/forgetpassword", {
              email: values.email,
            })
            .then((response) => {
              // setSubmitting(false);
                
              toast.success(response.data.message);

              if (response.data.code !== 200) {
                setTimeout(() => setLoading(false), 1000)
                navigate("/resetpassword", { replace: true })
              } else {
              }
            })
            .catch((error) => {
              toast.error(error.response.data.message);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form className="login-form">
            <Row>
              <Col>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="form-control-log" placeholder="Enter your email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </Col>
            </Row>

            <Button type="submit" className="btn-1">
            {loading ? "Loading..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>

      <Link to="/login">
        <button className="link-btn">Go to login page</button>
      </Link>
    </div>
  );
};

export default Forgetpassword;
