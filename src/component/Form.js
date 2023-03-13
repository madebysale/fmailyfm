import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { DatePicker } from "antd";
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
import {  Link, useNavigate ,  } from "react-router-dom";
import Table from "react-bootstrap/esm/Table";

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

  // product_type: Yup.string()
  // .required('Required'),

  start_date: Yup.date(),
  end_date: Yup.date().min(
    Yup.ref("start_date"),
    "end date can't be before start date"
  ),
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

  const [dates, setDates] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [qty, setqty] = useState("");


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
 
  var calrate;
  const ratecaculate = () => {
    calrate = event * rate;
    setcost(calrate);

    return calrate;
  };

  function handleChange(i, event,fieldname) {
    if(fieldname==='datepicker'){
        console.log(startdate,enddate,'fd')
        const values = [...fields];
    values[i]['runDates'] = {'startdate':startdate,'enddate':enddate};
    setFields(values);
    }
    //esle if(fieldname==='hrs'){
    //     console.log(event,'adfsddsa')
    //     const values = [...fields];
    //     values[i]['perWeeks'] = {'event':event,'monday':monday};
    //     setFields(values);
    //     console.log(fields);
    // }

    
    else{
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
  }
    

  
//   const handleCalculate = () => {
//     const newData = calculate(); // assume calculate() function return an array
//     setdata(newData);
//   }

//   function handleDateChange(date, index) {
//     const Values = [...fields];
//     Values[index]['startdate'] = date;
//     Values[index]['enddate'] = date;
//     setFields(Values);
    
//   console.log(Values,'as')
//   }


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
      monday: 0,
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



  // var a = moment(dates[1]);
  // var b = moment(dates[0]);
  //   var c= a.diff(b, 'days')   // =1

  //   console.log(c)

  // var a = moment(enddate);
  // var b = moment(startdate);
  //   var c= a.diff(b, 'days')  // =1
  //   console.log(c,'c')
  //   var d=c/7*event
  //   console.log(d,'d')

  //   var intvalue = Math.floor( "55" )
  // // //   // console.log(dates[0])
  // // //   // console.log(values[0].$d)
  //   console.log( intvalue)
  //   // setqty(c)

  // let start = moment(startdate, "YYYY-MM-DD"); //Pick any format
  // let end = moment(enddate, "YYYY-MM-DD"); //right now (or define an end date yourself)
  // let weekdayMonCounter = 0;
  // let weekdayTueCounter = 0;
  // let weekdayWedCounter = 0;
  // let weekdayThuCounter = 0;
  // let weekdayFriCounter = 0;
  // let weekdaySatCounter = 0;
  // let weekdaySunCounter = 0;

  // while (start <= end) {
  //   if (start.format("ddd") === "Mon") {
  //     weekdayMonCounter++;
  //     start = moment(start, "YYYY-MM-DD").add(1, "days");
  //   } else if (start.format("ddd") === "Tue") {
  //     weekdayTueCounter++;
  //     start = moment(start, "YYYY-MM-DD").add(1, "days");
  //   } else if (start.format("ddd") === "Wed") {
  //     weekdayWedCounter++;
  //     start = moment(start, "YYYY-MM-DD").add(1, "days");
  //   } else if (start.format("ddd") === "Thu") {
  //     weekdayThuCounter++;
  //     start = moment(start, "YYYY-MM-DD").add(1, "days");
  //   } else if (start.format("ddd") === "Fri") {
  //     weekdayFriCounter++;
  //     start = moment(start, "YYYY-MM-DD").add(1, "days");
  //   } else if (start.format("ddd") === "Sat") {
  //     weekdaySatCounter++;
  //     start = moment(start, "YYYY-MM-DD").add(1, "days");
  //   } else if (start.format("ddd") === "Sun") {
  //     weekdaySunCounter++;
  //     start = moment(start, "YYYY-MM-DD").add(1, "days");
  //   }
  // }

  // console.log(weekdayMonCounter)
  // console.log(weekdayTueCounter)
  // console.log(weekdayWedCounter)
  // console.log(weekdayThuCounter)
  // console.log(weekdayFriCounter)
  // console.log(weekdaySatCounter)
  // console.log(weekdaySunCounter)

  // var total_qty =
  //   weekdayMonCounter * monday +
  //   weekdayTueCounter * tuesday +
  //   weekdayWedCounter * wednesday +
  //   weekdayThuCounter * thursday +
  //   weekdayFriCounter * friday +
  //   weekdaySatCounter * saturday +
  //   weekdaySunCounter * sunday;

  // console.log(total_qty);

  var orderid = Math.floor(100000 + Math.random() * 900000);

  console.log(orderid)

  //  weekdayCounter++; //add 1 to your counter if its not a weekend day
  //  }
  //  start = moment(start, 'YYYY-MM-DD').add(1, 'days'); //increment by one day
  // }
  // var val=weekdayCounter*event
  // console.log(weekdayCounter);

  // console.log(val)

  // const rowsInput={
  //   product_type:'',
  //  run_dates:'',
  //  per_week:'',
  //  cost:'',
  //  discount:'',
  //  cost_tax:'',
  //  discounted_cost:'',
  // }
  // setRowsData([...rowsData, rowsInput])

  // // }
  // const deleteTableRows = (index)=>{
  // const rows = [...rowsData];
  // rows.splice(index, 1);
  // setRowsData(rows);
  // }

  // const handleChange = (index, evnt)=>{

  // const { name, value } = evnt.target;
  // const rowsInput = [...rowsData];
  // rowsInput[index][name] = value;
  // setRowsData(rowsInput);

  // }
  // const ButtonPress = () => {
   
  // };

 

  return (
    <div className="form-container">
      {/* <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // submit logic here
        console.log(values);
        alert(values)
        setSubmitting(false);
      }}
    >
      {({ errors,values, touched, isSubmitting ,handleChange}) => ( */}
      <Formik
        initialValues={{
          Contract_date: "",
          sales_rep: "",
          Advertiser: "",
          name: "",
          event: "",
          phone: "",
          email: "",
          // product_type: "",
          start_date: "",
          end_date: "",
          // orderid:orderid,
          
        }}
        
        
 
        
        validationSchema={validationSchema}
        
        //  onclick={(values)=>navigate("/invoice")} 
      onSubmit={(values) => {
        console.log(values, "okkkk");

        
        // props.handlefunction({"asa":values}) 

        
        // props.handlefunction({"values":values})

        // {
        //   for(let i=0;i<fields.length;i++){
        //     fields[i]
        //   }
        //   console.log(fields[i])
        // }
        
 
       

          axios.post("http://localhost:8000/getdata", {
            contract_date: values.Contract_date,
            sales_rep: values.sales_rep,
            advertiser: values.Advertiser,
            name: values.name,
            event: values.event,
            phone: values.phone,
            email: values.email,     
            orderid: orderid,
            // fields:fields,

          
             

           fields: [
          
              
            {
               product_type:fields[0].product_type,
               rate:fields[0].rate,
               discount:fields[0].discount,
               start_date:moment(fields[0].runDates.startdate,'YY-MM-DD'),
               end_date:moment(fields[0].runDates.enddate,'YY-MM-DD'),
               discount:fields[0].discount,
               discounted_cost:fields[0].discounted_cost,
               cost:fields[0].cost,
               cost_tax:fields[0].cost_tax,
               monday: fields[0].monday,
               tuesday: fields[0].tuesday,
               wednesday: fields[0].wednesday,
               thursday: fields[0].thursday,
               friday: fields[0].friday,
               saturday: fields[0].saturday,
               sunday:  fields[0].sunday,
               qty: fields[0].qty,
               total:fields[0].total,
            },
            {
             product_type:fields[1].product_type,
               rate:fields[1].rate,
               discount:fields[1].discount,
               start_date:moment(fields[1].runDates.startdate,'YY-MM-DD'),
               end_date:moment(fields[1].runDates.enddate,'YY-MM-DD'),
               discount:fields[1].discount,
               discounted_cost:fields[1].discounted_cost,
               cost:fields[1].cost,
               cost_tax:fields[1].cost_tax,
             monday: fields[1].monday,
            tuesday: fields[1].tuesday,
            wednesday: fields[1].wednesday,
            thursday: fields[1].thursday,
            friday: fields[1].friday,
            saturday: fields[1].saturday,
            sunday:  fields[1].sunday,
            qty: fields[1].qty,
            total:fields[1].total

            } ,
            // {
            //    product_type:fields[2].product_type,
            //    rate:fields[2].rate,
            //    discount:fields[2].discount,
            //    start_date:moment(fields[2].runDates.startdate,'YY-MM-DD'),
            //    end_date:moment(fields[2].runDates.enddate,'YY-MM-DD'),
            //    discount:fields[2].discount,
            //    discounted_cost:fields[2].discounted_cost,
            //    cost:fields[2].cost,
            //    cost_tax:fields[2].cost_tax,
            //    monday: fields[2].monday,
            //    tuesday: fields[2].tuesday,
            //    wednesday: fields[2].wednesday,
            //    thursday: fields[2].thursday,
            //    friday: fields[2].friday,
            //    saturday: fields[2].saturday,
            //    sunday:  fields[2].sunday,
            //    qty: fields[2].qty,
            //    total:fields[2].total,

            // } ,
            // {
            //  product_type:fields[3].product_type,
            //    rate:fields[3].rate,
            //    discount:fields[3].discount,
            //    start_date:moment(fields[3].runDates.startdate,'YY-MM-DD'),
            //    end_date:moment(fields[3].runDates.enddate,'YY-MM-DD'),
            //    discount:fields[3].discount,
            //    discounted_cost:fields[3].discounted_cost,
            //    cost:fields[3].cost,
            //    cost_tax:fields[3].cost_tax,
            //  monday: fields[3].monday,
            // tuesday: fields[3].tuesday,
            // wednesday: fields[3].wednesday,
            // thursday: fields[3].thursday,
            // friday: fields[3].friday,
            // saturday: fields[3].saturday,
            // sunday:  fields[3].sunday,
            // qty: fields[3].qty,
            // total:fields[3].total,

            // } 
          ]
            
            // per_week: event,
            // rate: rate,
            // discount: discount,
            // cost: cost,
            // cost_tax: cost_tax,
            // discounted_cost: discounted_cost,
            // start_date: dates[1],
            // end_date: dates[1],
            // monday: monday,
            // tuesday: tuesday,
            // wednesday: wednesday,
            // thursday: thursday,
            // friday: friday,
            // saturday: saturday,
            // sunday: sunday,
            // qty: total_qty,
            // orderid: orderid,
          });
        }}
      >
        {({ errors, touched, values, handleSubmit ,isSubmitting }) => (
          <Form className="form-con" onSubmit={handleSubmit}>
           
            {/* {
          apidata.map((data)=>{
            console.log("err",data)
             return( */}

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
                    {/* <Table className="">
                      <thead className="table-head">
                        <tr>
                          <th> product type</th>
                          <th>Run Dates</th>
                          <th>per week</th>
                          <th>Rate</th>
                          <th>Discount</th>
                          <th>Cost</th>
                          <th>Cost(/W tax)</th>
                          <th style={{ width: "10px" }}>discounted cost</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td style={{}}>
                            <div className="form-group">
                              <select
                                name="product_type"
                                id="dropdown-input"
                                // style={{appearance:'unset'}}
                                className="  dropdown "
                                onChange={(e) =>
                                  setproduct_type(e.target.value)
                                }
                              >
                                <option value={product_type}>
                                  Select an option
                                </option>
                                <option value="spots">spots</option>
                                <option value="Mentions">Mentions</option>
                                <option value="Half Hours">Half Hours </option>
                                <option value="outside Broadcast">
                                  outside Broadcast
                                </option>
                              </select>
                            </div>
                          </td>
                          <td style={{}}>
                            <div className="form-group">
                              <div
                                style={{ border: "none" }}
                                className="date-range"
                              >
                                <RangePicker
                                  onChange={(values) => {
                                    setDates(
                                      values.map((item) => {
                                        return item;
                                      })
                                    );

                                    

                                    setstartdate(values[0].$d);
                                    setenddate(values[1].$d);
                                  }}
                                />
                              </div>

                          
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <Popup
                                className="form-control"
                                handlefunction={calculate}
                              />
                            </div>
                          </td>
                          <td style={{}}>
                            <div className="form-group">
                              <input
                                name="Rate"
                                type="number"
                                min={0}
                                className="form-control"
                                value={rate}
                                onChange={(e) => setrate(e.target.value)}
                              />
                            </div>
                          </td>
                          <td style={{}}>
                            <div className="form-group">
                              <input
                                name="Discount"
                                type="number"
                                min={0}
                                className="form-control"
                                value={discount}
                                onChange={(e) => setdiscount(e.target.value)}
                              />
                            </div>{" "}
                          </td>
                          <td style={{}}>
                            <div className="form-group">
                              <input
                                name="Cost"
                                type="text"
                                className="form-control"
                                value={ratecaculate()}
                              />
                            </div>
                          </td>
                          <td style={{}}>
                            <div className="form-group">
                              <input
                                name="cast_tax"
                                type="text"
                                className="form-control"
                                value={taxcost()}
                              />
                            </div>
                          </td>
                          <td style={{}}>
                            <div className="form-group">
                              <input
                                name="Discounted_cost"
                                type="text"
                                className="form-control"
                                value={discountcost()}
                              />
                            </div>
                          </td>
                        </tr>

                        <TableRows
                          rowsData={rowsData}
                          deleteTableRows={deleteTableRows}
                          handleChange={handleChange}
                        />
                      </tbody>
                    </Table> */}
                    {/* <div style={{float:'right',}}><button  className="btn btn-outline-success" onClick={addTableRows}>+</button><span style={{fontWeight:500,padding:7}}>ADD item</span></div> */}
                    {/* <button
                      style={{ float: "right" }}
                      className="btn btn-outline-success"
                      onClick={addTableRows}
                    >
                      + add item
                    </button> */}
                      {/* ////////////////////////////////////////////////////////////////////// chagpt */}

                         
        <div>
      <Table>
        <thead>
          <tr>
            <th>Product Type</th>
            <th>Run Dates</th>
            <th>Per Weeks</th>
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
                  <select
                    name="product_type"
                    id="dropdown-input"
                    // style={{appearance:'unset'}}
                    className="  dropdown"
                    // onChange={(e) => setproduct_type(e.target.value)}
                    onChange={(event) => handleChange(index, event)}
                  >
                    <option value={field.product_type}>Select an option</option>
                    <option value="spots">spots</option>
                    <option value="Mentions">Mentions</option>
                    <option value="Half Hours">Half Hours </option>
                    <option value="outside Broadcast">outside Broadcast</option>
                
                  </select>
                </div>
              </td>

              <td style={{}}>
                <div className="form-group">
                  <div style={{ border: "none" }} className="date-range">
                    <RangePicker
                    name="runDates"
                    // selected={}
                      onCalendarChange={(values,event) =>{
                        handleChange(index,values,'datepicker')
                        setDates(
                          values.map((item) =>{
                            return item;
                          })
                        );

                          // console.log(values);
                         // handleDateChange(setstartdate(values[0].$d),setenddate(values[1].$d))
                        //   onChange={(event) => handleChange(index, event)}                  
                        setstartdate(values[0].$d);
                        setenddate(values[0].$d);
                        // console.log(values)
                      }}
                    />
                  </div>

                  {/* <DateRangePicker  /> */}
                  {/* console.log(value) */}
                </div>
              </td>

              {/* <td><input type="text" name="perWeeks" value={field.perWeeks} onChange={(event) => handleChange(index, event)} /></td> */}
              <td>
                <div className="form-group">

                <Button className="popup-btn" onClick={handleShow}>
                  <Form.Control
                    onClick={handleShow}
                    className="popup-control"
                    type="total"
                    value={field.total}
                    placeholder="total"
                  />
                </Button>

                <Modal className="pop-btn" show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title> select Days</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="popup-container">
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
                    








                  {/* <Popup
                   name="perWeeks"
                    className="form-control"
                     handlefunction = {calculate}
                    //  defaultValue="Search..."
                    //  onChange={(event)=>handleChange(index,calculate(event.fin),'hrs')}
                    //  onChange={(Values) =>handleChange(index, calculate(setevent))}
                     
                  /> */}
                  
                </div>
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.rate}
                    onChange={(event) =>handleChange(index, event)}
                    name="rate"
                    type="number"
                    min={0}
                    className="form-control"
                    //   value={rate}
                    //   onChange={(e) => setrate(e.target.value)}
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
                    className="form-control"
                    //   value={discount}
                    //   onChange={(e) => setdiscount(e.target.value)}
                  />
                </div>{" "}
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.cost}
                    onChange={(event) => handleChange(index, event)}
                    name="cost"
                    type="text"
                    className="form-control"
                    //   value={ratecaculate()}
                  />
                </div>
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.cost_tax}
                    onChange={(event) => handleChange(index, event)}
                    name="cost_tax"
                    type="text"
                    className="form-control"
                    //   value={taxcost()}
                  />
                </div>
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.discounted_cost}
                    onChange={(event) => handleChange(index, event)}
                    name="discounted_cost"
                    type="text"
                    className="form-control"
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

            <SignaturePad />

            <div className="chcek-box">
              <input type="checkbox"></input>
              <a href="#">Accept terms & conditions</a>
            </div>


             
         
               {/* <Link to={{
                 pathname: '/invoice',
                 values,

                
                 
              }}>
              <Button type="submit" className="submit-button">Submit</Button>
              </Link>  */}
              
               
               
              <Button type="submit" 
              // onsubmit={("/invoice")}
              onclick={()=>navigate("/invoice")}
               className="submit-button">Submit</Button>

          
          </Form>
        )}
      </Formik>
      <Footer />
    </div>
  );
};

export default Foam;
