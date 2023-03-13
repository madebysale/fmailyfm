import moment from "moment";
import React, { useState } from "react";
import Table from "react-bootstrap/esm/Table";

// import DateRangePicker from "./DateRangePicker";
import Popup from "./Popup";
import { DatePicker } from 'antd';
import 'antd/dist/reset.css'
import './Form.css';
const { RangePicker } = DatePicker;

function Chatgpt() {
    const [dates, setDates] = useState("");
    const [startdate, setstartdate] = useState("");
    const [event, setevent] = useState("");
    const [enddate, setenddate] = useState("");
    const[data,setdata]=useState([])

  const [fields, setFields] = useState([
    {
      productType: "",
      runDates: "",
      perWeeks: "",
      rate: "",
      discount: "",
      cost: "",
      costWithTax: "",
      discountedCost: "",
    },
  ]);

  
  const calculate = (event) => {
    setevent(event.fin);
    // handleChange(event,values,'hrs')
    // handleChange(event)
    setmonday(event.week.val1);
    // settuesday(event.week.val2);
    // setwednesday(event.week.val3);
    // setthursday(event.week.val4);
    // setfriday(event.week.val5);
    // setsaturday(event.week.val6);
    // setsunday(event.week.val7);

    console.log(event)
  };

 
  const [rate, setrate] = useState("");
//   const [discount, setdiscount] = useState("");
//   const [cost, setcost] = useState("");
//   const [cost_tax, setcost_tax] = useState("");
  const [monday, setmonday] = useState("");
//   const [tuesday, settuesday] = useState("");
//   const [wednesday, setwednesday] = useState("");
//   const [thursday, setthursday] = useState("");
//   const [friday, setfriday] = useState("");
//   const [saturday, setsaturday] = useState("");
//   const [sunday, setsunday] = useState("");
//   const[discounted_cost,setdiscounted_cost]=useState('')

  function handleChange(i, event,fieldname) {
    if(fieldname==='datepicker'){
        console.log(startdate,enddate,'fd')
        const values = [...fields];
    values[i]['runDates'] = {'startdate':startdate,'enddate':enddate};
    setFields(values);
    }
    // else if(fieldname==='hrs'){
    //     console.log(event,'ada')
    //     const values = [...fields];
    //     values[i]['perWeeks'] = {'event':event.fin,'monday':monday};
    //     setFields(values);
    //     console.log(fields);
    // }

    
    else{
    const values = [...fields];
    values[i][event.target.name] = event.target.value;
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
      productType: "",
      runDates: "",
      perWeeks: "",
      rate: "",
      discount:"",
      cost: "",
      costWithTax: "",
      discountedCost: "",
    };
    setFields([...fields,newrow]);
  }

  const handleDelete=(index1)=> {
    const values = fields.filter((data,i)=>i !== index1);
    // values.splice(i, 1);
    setFields(values);
  }

  return (
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
                    name="productType"
                    id="dropdown-input"
                    // style={{appearance:'unset'}}
                    className="  dropdown"
                    // onChange={(e) => setproduct_type(e.target.value)}
                    onChange={(event) => handleChange(index, event)}
                  >
                    <option value={field.productType}>Select an option</option>
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
                      onChange={(values,event) =>{
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
                        setenddate(values[1].$d);
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
                  <Popup
                    className="form-control"
                     handlefunction = {calculate}
                    //  onChange={(event)=>handleChange(index,calculate(event.fin),'hrs')}
                    //  onChange={(Values) =>handleChange(index, calculate(setevent))}
                     
                  />
                  
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
                    value={field.costWithTax}
                    onChange={(event) => handleChange(index, event)}
                    name="costWithTax"
                    type="text"
                    className="form-control"
                    //   value={taxcost()}
                  />
                </div>
              </td>

              <td style={{}}>
                <div className="form-group">
                  <input
                    value={field.discountedCost}
                    onChange={(event) => handleChange(index, event)}
                    name="discountedCost"
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
  );
}

export default Chatgpt;
