import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { DatePicker} from "antd";
import "antd/dist/reset.css";
import { Formik, Field } from "formik";
// import DateRangePicker from './DateRangePicker';
import axios from "axios";
import SignaturePad from "./SignaturePad";
import moment from "moment";
import * as Yup from "yup";

import "./Form.css";
import mylogo from "../component/fm_logo.png";

import Popup from "./Popup";
// import Button from "react-bootstrap/esm/Button";

import { useEffect } from "react";

import Addrow from "./Addrow";
import Footer from "./Footer";
import DateRangePicker from "./DateRangePicker";
import TableRows from "./TableRows";
import {  Link, useNavigate  } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";
import { Termcondition } from "./Termcondition";
import  Card from "react-bootstrap/Card";

// import Form from 'react-bootstrap/Form';
const { RangePicker } = DatePicker;

const validationSchema = Yup.object({
  Contract_date: Yup.date().required("Required"),
  sales_rep: Yup.string().required("Required"),

  Advertiser: Yup.string().required("Required"),

  name: Yup.string().required("Required"),

  event: Yup.string().required("Required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Required"),

  email: Yup.string().email("Invalid email address").required("Required"),
//   product_type:
// Yup.string().required("Please select an option"),
//   rate:
// Yup.string().required("Required"),

  // RangePicker: Yup.date().required("Required"),

  // product_type: Yup.string()
  // .required('Required'),

  start_date: Yup.date(),
  end_date: Yup.date().min(
    Yup.ref("start_date"),
    "end date can't be before start date"
  ),

  termsAndConditions: Yup.bool()
  .oneOf([true], 'accept the t&C'),
});

// const initialValues = {
//   Contract_date:'',
//   sales_rep:'',
//   Advertiser:'',
//   name: '',
//   event: '',
//   phone: '',
//   email: '',
//   product_type:'',
//   start_date:'',
//   end_date:''

// };

// const [rowsData, setRowsData] = useState([]);
const Foam = () => {
  // console.log(props,'props')
  const navigate = useNavigate();
  
  // const[sales_rep,setsales_rep]= useState()
  // const[advertiser,setadvertiser]= useState()
  // const[name,setname]= useState()
  // const[eventname,seteventname]= useState()
  // const[phone,setphone]= useState()
  // const[email,setemail]= useState()
  const [product_type, setproduct_type] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [event, setevent] = useState("");
  const [rate, setrate] = useState("");
  const [discount, setdiscount] = useState("");
  const [cost, setcost] = useState("");
  const [cost_tax, setcost_tax] = useState("");
  // const [monday, setmonday] = useState("");
  // const [tuesday, settuesday] = useState("");
  // const [wednesday, setwednesday] = useState("");
  // const [thursday, setthursday] = useState("");
  // const [friday, setfriday] = useState("");
  // const [saturday, setsaturday] = useState("");
  // const [sunday, setsunday] = useState("");
  const [discounted_cost, setdiscounted_cost] = useState("");
  // const[Orderid,setorderid] =useState('')

  const [rowsData, setRowsData] = useState([]);

  // const[apidata,setapidata] =useState([]);

  const [dates, setDates] = useState([]);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [qty, setqty] = useState("");
  const[mysign,setmysign]=useState("")


  const [fields, setFields] = useState([
    {
      product_type: "",
      runDates: "",
      perWeeks: "",
      rate: "",
      discount: "",
      cost: "",
      cost_tax: "",
      discounted_cost: "",
      total: "",
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
      qty: "",

      
    },
  ]);





  // console.log(apidata)

  // const addTableRows = () => {
  //   const rowsInput = {
  //     product_type: "",
  //     run_dates: "",
  //     per_week: "",
  //     Rate:"",
  //     cost: "",
  //     discount: "",
  //     cost_tax: "",
  //     discounted_cost: "",
  //   };
  //   setRowsData([...rowsData, rowsInput]);
  // };

  // const deleteTableRows = (index) => {
  //   const rows = [...rowsData];
  //   rows.splice(index, 1);
  //   setRowsData(rows);
  //   // console.log(rowsInput)
  // };

  // const handleChange = (index, evnt) => {
  //   // console.log(event,'dfyyys')
  //   const { name, value } = evnt.target;
  //   const rowsInput = [...rowsData];
  //   rowsInput[index][name] = value;
  //   setRowsData(rowsInput);
  // };

  const taxcost = () => {
    var tax = (calrate * 15) / 100 - discount + "";
    var totaltax = tax + calrate;
    setcost_tax(totaltax);
    return totaltax;
  };

  var costing;
  const discountcost = () => {
    costing = calrate - discount;
    setdiscounted_cost(costing);
    return costing;
  };

  const calculate = (index,event) => {
   
    // handleChange(index,event,'hrs')
    // setmonday(event.week.val1);
    setevent(event );
    // settuesday(event.week.val2);
    // setwednesday(event.week.val3);
    // setthursday(event.week.val4);
    // setfriday(event.week.val5);
    // setsaturday(event.week.val6);
    // setsunday(event.week.val7);

    // console.log(event.week.val1);
  };


    const handle=(eve)=>{
       setmysign(eve)
      //  console.log(eve,"dcdcvbgvcx")
    }
console.log(mysign,'dd')

 
  var calrate;
  const ratecaculate = () => {
    calrate = event * rate;
    setcost(calrate);

    return calrate;
  };

  function handleChange(i, event,fieldname) {

    const values = [...fields];
    values[i][event.target.name] = event.target.value;

    let start = moment(startdate, "YYYY-MM-DD"); //Pick any format
    let end = moment(enddate, "YYYY-MM-DD"); //right now (or define an end date yourself)
    let weekdayMonCounter = 0;
    let weekdayTueCounter = 0;
    let weekdayWedCounter = 0;
    let weekdayThuCounter = 0;
    let weekdayFriCounter = 0;
    let weekdaySatCounter = 0;
    let weekdaySunCounter = 0;

    while (start <= end) {
      if (start.format("ddd") === "Mon") {
        weekdayMonCounter++;
        start = moment(start, "YYYY-MM-DD").add(1, "days");
      } else if (start.format("ddd") === "Tue") {
        weekdayTueCounter++;
        start = moment(start, "YYYY-MM-DD").add(1, "days");
      } else if (start.format("ddd") === "Wed") {
        weekdayWedCounter++;
        start = moment(start, "YYYY-MM-DD").add(1, "days");
      } else if (start.format("ddd") === "Thu") {
        weekdayThuCounter++;
        start = moment(start, "YYYY-MM-DD").add(1, "days");
      } else if (start.format("ddd") === "Fri") {
        weekdayFriCounter++;
        start = moment(start, "YYYY-MM-DD").add(1, "days");
      } else if (start.format("ddd") === "Sat") {
        weekdaySatCounter++;
        start = moment(start, "YYYY-MM-DD").add(1, "days");
      } else if (start.format("ddd") === "Sun") {
        weekdaySunCounter++;
        start = moment(start, "YYYY-MM-DD").add(1, "days");
      }
    }

    console.log(weekdayMonCounter);
    console.log(weekdayTueCounter);
    console.log(weekdayWedCounter);
    console.log(weekdayThuCounter);
    console.log(weekdayFriCounter);
    console.log(weekdaySatCounter);
    console.log(weekdaySunCounter);

    values[i]["total"] =
    Number(values[i]["monday"]) +
    Number(values[i]["tuesday"]) +
    Number(values[i]["wednesday"]) +
    Number(values[i]["thursday"]) +
    Number(values[i]["friday"]) +
    Number(values[i]["saturday"]) +
    Number(values[i]["sunday"]);


   values[i]["qty"]  =
      Number(values[i]["monday"]) * weekdayMonCounter +
      Number(values[i]["tuesday"]) * weekdayTueCounter +
      Number(values[i]["wednesday"]) * weekdayWedCounter +
      Number(values[i]["thursday"]) * weekdayThuCounter +
      Number(values[i]["friday"]) * weekdayFriCounter +
      Number(values[i]["saturday"]) * weekdaySatCounter +
      Number(values[i]["sunday"]) * weekdaySunCounter;

     console.log(fields.qty,'iki')











     values[i]['total']=  Number(values[i]['monday']) + Number(values[i]['tuesday'])+ Number(values[i]['wednesday'])+ Number(values[i]['thursday'])+ Number(values[i]['friday'])+ Number(values[i]['saturday'])+ Number(values[i]['sunday'])
  




    setFields(values);
    console.log(fields);

       



    }
  // }
    



console.log(startdate,enddate,'startdate-ds')

  function handleAdd() {
    // const values = [...fields];
    // values.push({
        const newrow={
      product_type: "",
      runDates: "",
      perWeeks: "",
      rate: "",
      discount:"",
      cost: "",
      cost_tax: "",
      discounted_cost: "",
      total: "",
      monday: "",
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
      qty: "",
    };
    setFields([...fields,newrow]);
  }

  const handleDelete=(index1)=> {
    const values = fields.filter((data,i)=>i !== index1);
    // values.splice(i, 1);
    setFields(values);
  }




  var orderid = Math.floor(100000 + Math.random() * 900000);

  console.log(orderid)



 

  return (
 
    <Card className="form-container">
    
      <Formik
        initialValues={{
          Contract_date: "",
          sales_rep: "",
          Advertiser: "",
          name: "",
          event: "",
          phone: "",
          email: "",
        //  perWeeks:"",
          start_date: "",
          end_date: "",
          product_type:"",
          termsAndConditions:false,
          
          // rate:"",

        
         
          
        }}
        
        
 
        
        validationSchema={validationSchema}
        
        //  onclick={(values)=>navigate("/invoice")} 
      onSubmit={(values) => {
        console.log(values, "okkkk");

  
        
 
       

          axios.post("http://localhost:8000/getdata", {
            contract_date: values.Contract_date,
            sales_rep: values.sales_rep,
            advertiser: values.Advertiser,
            name: values.name,
            event: values.event,
            phone: values.phone,
            email: values.email,     
            orderid: orderid,
            sign:mysign,
            // fields:fields,
            fields:[
                fields.map((item,index)=>(
                 
                    { 
                         product_type:fields[index].product_type,
                         rate:fields[index].rate,
                         discount:fields[index].discount,
                         start_date:moment(fields[index].runDates.startdate,'YY-MM-DD'),
                         end_date:moment(fields[index].runDates.enddate,'YY-MM-DD'),
                         discount:fields[index].discount,
                         discounted_cost:fields[index].discounted_cost,
                         cost:fields[index].cost,
                         cost_tax:fields[index].cost_tax,
                         monday: fields[index].monday,
                         tuesday: fields[index].tuesday,
                         wednesday: fields[index].wednesday,
                         thursday: fields[index].thursday,
                         friday: fields[index].friday,
                         saturday: fields[index].saturday,
                         sunday:  fields[index].sunday,
                         qty: fields[index].qty,
                         total:fields[index].total,
                    }
                
                ))
              
              
            ]
         
             

          

        
     
          }).then((resp)=>{
              if (resp.data.code!==200){
                navigate('/invoice')
              }
          })
        }}
      >
        {({ errors, touched, values, handleSubmit ,isSubmitting }) => (
          <Form className="form-con" onSubmit={handleSubmit}>
           
          

            <div className="form">
              <div className="contact-detail">
                <div className="form-group">
                  <label htmlFor="Contract_Date" className="label-con">
                    Contract Date
                  </label>
                  <div className="input-er-con">
                    <Field
                      name="Contract_date"
                      type="Date"
                      className="form-control"
                      placeholder="Contract_date"
                      value={values.Contract_date}
                    />
                    {errors.Contract_date && touched.Contract_date ? (
                      <div className="error-message">
                        {errors.Contract_date}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="sales_rep" className="label-con">
                    Sales Rep
                  </label>
                  <div className="input-er-con">
                    <Field
                      name="sales_rep"
                      type="text"
                      className="form-control"
                      placeholder="Sales Rep"
                      value={values.sales_rep}
                    />
                    {errors.sales_rep && touched.sales_rep ? (
                      <div className="error-message">{errors.sales_rep}</div>
                    ) : null}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="Advertiser" className="label-con">
                    Advertiser
                  </label>
                  <div className="input-er-con">
                    <Field
                      name="Advertiser"
                      type="text"
                      className="form-control"
                      placeholder="Advertiser"
                      value={values.Advertiser}
                    />
                    {errors.Advertiser && touched.Advertiser ? (
                      <div className="error-message">{errors.Advertiser}</div>
                    ) : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="label-con">
                    Name
                  </label>
                  <div className="input-er-con">
                    <Field
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={values.name}
                    />
                    {errors.name && touched.name ? (
                      <div className="error-message">{errors.name}</div>
                    ) : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="event" className="label-con">
                    Event
                  </label>
                  <div className="input-er-con">
                    <Field
                      name="event"
                      type="text"
                      className="form-control"
                      placeholder="Event"
                      value={values.event}
                    />
                    {errors.event && touched.event ? (
                      <div className="error-message">{errors.event}</div>
                    ) : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="label-con">
                    Phone
                  </label>
                  <div className="input-er-con">
                    <Field
                      name="phone"
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      // value={values.phone}
                    />
                    {errors.phone && touched.phone ? (
                      <div className="error-message">{errors.phone}</div>
                    ) : null}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="label-con">
                    Email
                  </label>
                  <div className="input-er-con">
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </div>
                </div>

              </div>

              <div className="logo-container">
                <img src={mylogo} alt="React Logo" className="img-1" />
              </div>
            </div>

            {/* /////////////////////////////////////////////////////////////////////// */}

            <>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  marginLeft: "60px",
                }}
              >
                Item :-
              </div>

              <div className="container">
                <div className="row">
                  <div className="">
                 
                         
        <div>
      <Table>
        <thead >
          <tr className="th-s">
            <th>Product Type</th>
            <th>Run Dates</th>
            <th className="th-perwk">Per Weeks</th>
            <th>Rate</th>
            <th>Discount</th>
            <th>Cost</th>
            <th>Cost (w/ Tax)</th>
            <th>Discounted Cost</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
        
            <tr key={index}>
              <td>
                <div className="form-group">
                  <Field
                  value={field.product_type}
                    
                     as="select"
                    name="product_type"
                    id="dropdown-input"
                    // style={{appearance:'unset'}}
                    className="  dropdown"
                    // onChange={(e) => setproduct_type(e.target.value)}
                    onChange={(event) => handleChange(index, event)}
                  >
                    {/* <option   value="" >Select an option</option> */}
                    <option selected value="spots">spots</option>
                    <option value="Mentions">Mentions</option>
                    <option value="Half Hours">Half Hours </option>
                    <option value="outside Broadcast">outside Broadcast</option>
                    {/* {errors.product_type && touched.product_type ? (
                      <div className="error-message">
                      <p>sdsdsd</p>
                      </div>
                    ) : null} */}
                  </Field>
                 {touched.product_type ? (
                      <div className="error-message">Please select an option</div>
                    ) : null} 
               
                </div>
              </td>

              <td style={{}}>
                <div style={{width:"116px"}} className="form-group  " >
                  <div style={{ border: "none" }} className="date-range">
                    <RangePicker

                     

                    name="runDates"
                    
               
                      onChange={(values,event) =>{
                          if(event.length==0){
                              console.log('requires')
                            }
                            else{
                              console.log('not')
                            }
                            console.log(values.length)
                            console.log(event.length,'event')
                       
                        setDates(
                        
                          values.map((item) =>{
                          
                          
                            return item;
                            
                          })
                        );
                        setstartdate(event[0].$d)
                        setenddate(event[1].$d)


                        
                        // }
                          
                          const valuess = [...fields];
                      valuess[index]['runDates'] = {'startdate':values[0].$d,'enddate':values[1].$d};
                      setFields(valuess);
                                      
                        setstartdate(values[0].$d);
                        setenddate(values[1].$d);
                        // console.log(values)
                        console.log(values)


                      
                      }}
                      
                      
                    />
                    
                    
                  </div>
                  {dates && dates.length<2 ? (
                      <span style={{textAlign:"center"}} className="error-message">please select date range</span>
                    ) : null}

                  {/* <DateRangePicker  /> */}
                  {/* console.log(value) */}
                </div>
              </td>

           
              <td>
                <div 
                className="form-group"
                style={{width:"110px"}}
                >

             
                  <Form.Control
                  
                    onClick={handleShow}
                    className="popup-btn"
                    type="total"
                    value={field.total}
                    placeholder="Select Days"
                  />
                {/* </button> */}

                <Modal className="pop-btn" show={show} onHide={handleClose}>
                  
                  <Modal.Header closeButton>
                    <Modal.Title>select Days</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="popup-container" validated={false} >
                      <Form.Group
                        className="popup-grp mb-3 px-3"
                        id="mon"
                        controlId="exampleForm.ControlInput1"
                      >
                        <div className="label-con1">1</div>
                        <Form.Label name="monday" className="label-con1">
                          Monday
                        </Form.Label>
                        <Form.Control 

                          className="popup-control"
                          type="number"
                          min={0}
                          value={field.monday}
                          onChange={(event) => handleChange(index, event)}
                          name="monday"
                          placeholder="monday"
                          autoFocus
                          
                        />
                      </Form.Group>
                      <Form.Group
                        className="popup-grp mb-3 px-3"
                        id="tues"
                        controlId="exampleForm.ControlInput1"
                      >
                        <div className="label-con1">2</div>
                        <Form.Label className="label-con1">Tuesday</Form.Label>
                        <Form.Control
                          className="popup-control"
                          type="number"
                          min={0}
                          value={field.tuesday}
                          onChange={(event) => handleChange(index, event)}
                          name="tuesday"
                          placeholder="tuesday"
                        />
                      </Form.Group>
                      <Form.Group
                        className="popup-grp mb-3 px-3"
                        id="wed"
                        controlId="exampleForm.ControlInput1"
                      >
                        <div className="label-con1">3</div>
                        <Form.Label className="label-con1">
                          Wednesday
                        </Form.Label>
                        <Form.Control
                          className="popup-control"
                          type="number"
                          min={0}
                          value={field.wednesday}
                          onChange={(event) => handleChange(index, event)}
                          name="wednesday"
                          placeholder="Wednesday"
                        />
                      </Form.Group>
                      <Form.Group
                        className="popup-grp mb-3 px-3"
                        id="thurs"
                        controlId="exampleForm.ControlInput1"
                      >
                        <div className="label-con1">4</div>
                        <Form.Label className="label-con1">Thursday</Form.Label>
                        <Form.Control
                          type="number"
                          min={0}
                          className="popup-control"
                          value={field.thursday}
                          onChange={(event) => handleChange(index, event)}
                          name="thursday"
                          placeholder="thursday"
                        />
                      </Form.Group>
                      <Form.Group
                        className="popup-grp mb-3 px-3 "
                        id="fri"
                        controlId="exampleForm.ControlInput1"
                      >
                        <div className="label-con1">5</div>
                        <Form.Label className="label-con1">Friday</Form.Label>
                        <Form.Control
                          className="popup-control"
                          type="number"
                          min={0}
                          value={field.friday}
                          onChange={(event) => handleChange(index, event)}
                          name="friday"
                          placeholder="friday"
                        />
                      </Form.Group>
                      <Form.Group
                        className="popup-grp mb-3 px-3"
                        id="sat"
                        controlId="exampleForm.ControlInput1"
                      >
                        <div className="label-con1">6</div>
                        <Form.Label className="label-con1">Saturday</Form.Label>
                        <Form.Control
                          className="popup-control"
                          type="number"
                          min={0}
                          value={field.saturday}
                          onChange={(event) => handleChange(index, event)}
                          name="saturday"
                          placeholder="saturday"
                        />
                      </Form.Group>
                      <Form.Group
                        className="popup-grp mb-3 px-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <div className="label-con1">7</div>
                        <Form.Label className="label-con1">Sunday</Form.Label>
                        <Form.Control
                          className="popup-control"
                          type="number"
                          min={0}
                          value={field.sunday}
                          onChange={(event) => handleChange(index, event)}
                          name="sunday"
                          placeholder="sunday"
                        />
                      </Form.Group>
                      <Form.Group
                        className="popup-grp mb-3 px-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <div className="label-con1">8</div>
                        <Form.Label className="label-con1">Total</Form.Label>
                        <Form.Control
                          className="popup-control"
                          type="total"
                           name='total'
                           min={1}
                          value={field.total}
                          onChange={(event) => handleChange(index, event)}
                          placeholder="total"
                        />
                     
                        
                        
                      </Form.Group>
                    </Form>
                 
                    
                   
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      ok
                    </Button>
                    
                  </Modal.Footer>
                </Modal>
                    







                  
                </div>
             
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.rate}
                    onChange={(event) =>handleChange(index, event)}
                    name="rate"
                    type="number"
                    min={1}
                    className="form-control as"
                    // required
                    
                  />
               
                </div>
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.discount}
                    onChange={(event) => handleChange(index, event)}
                    name="discount"
                    type="number"
                    min={0}
                    className="form-control as"
                   
                  />
                </div>{""}
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.cost}
                    onChange={(event) => handleChange(index, event)}
                    name="cost"
                    min={0}
                    type="number"
                    className="form-control as"
                
                  />
                </div>
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.cost_tax}
                    onChange={(event) => handleChange(index, event)}
                    name="cost_tax"
                    min={0}
                    type="number"
                    className="form-control as"
                  
                  />
                </div>
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.discounted_cost}
                    onChange={(event) => handleChange(index, event)}
                    name="discounted_cost"
                    min={0}
                    type="number"
                    className="form-control as"
                    
                    //   value={discountcost()}
                  />
                </div>
              </td>
              <td>
                {index !==0 &&(
                     <button type="button"
                     className="btn btn-outline-danger"
                     
                     
                     onClick={() => handleDelete(index)}>
                        X
                     </button>

                )}
               
              </td>
            
            </tr>
         
            
          ))}
        </tbody>
      </Table>
      <button type="button"
       style={{ float: "right" }}
       className="btn btn-outline-success"
      onClick={() => handleAdd()}>
        Add Item  +
      </button>
    </div>






{/* lllllllllllllllllll//////////////////llllllllllllllllllllllll//////llllllllllllllllllllll////////////////////llllllllllllllllllllllchatgort */}




                  </div>
                  <div className="col-sm-4"></div>
                </div>
              </div>
            </>
            
               {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* <Addrow /> */}

            <SignaturePad  setsign={handle} />



            <div className="chcek-box">
              <div className="term-check">
              <Field type="checkbox" name="termsAndConditions" /> 
            <span className="term"> <Termcondition/></span> 
              </div>
          
             
                  
            
            <div>
            {errors.termsAndConditions && touched.termsAndConditions ? (
                      <div className="error-message">{errors.termsAndConditions}</div>
                    ) : null}
                  </div>
          </div>


             
              
               
              <Button type="submit" 
             
               className="submit-button">Submit</Button>
          
          </Form>
        )}
      </Formik>
      <Footer />
    </Card>
   
  );
};

export default Foam;
