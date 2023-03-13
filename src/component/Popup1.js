import React, { useEffect, useState } from "react";
import "./Form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import DateRangePicker from "./DateRangePicker";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

function Popup1() {
  // console.log(props);
  const [show, setShow] = useState(false);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [total, settotal] = useState([]);
  const [calculate, setcalculate] = useState([]);
  const[qty,setqty] = useState('')

  const [dates, setDates] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fields, setFields] = useState([
    {
      runDates: "",
      total: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thusday: "",
      friday: "",
      saturday: "",
      sunday: "",
      qty: "",
    },
  ]);
  function handleChange(i, event, fieldname) {
    if (fieldname === "datepicker") {
      console.log(startdate, enddate, "fd");
      const values = [...fields];
        //  if(values.length===2){
          values[i]["runDates"] = {startdate: values[i].startdate, enddate: values[i].enddate};
          // values[i]["runDates"] = {
          //   startdate: values[i]["runDates"].startdate,
          //   enddate: values[i]["runDates"].enddate,
          // };
          setFields(values);
          console.log(fields.startdate)

        //  }
     } 
    
    
    else {
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
      Number(values[i]["thusday"]) +
      Number(values[i]["friday"]) +
      Number(values[i]["saturday"]) +
      Number(values[i]["sunday"]);


     values[i]["qty"]  =
        Number(values[i]["monday"]) * weekdayMonCounter +
        Number(values[i]["tuesday"]) * weekdayTueCounter +
        Number(values[i]["wednesday"]) * weekdayWedCounter +
        Number(values[i]["thusday"]) * weekdayThuCounter +
        Number(values[i]["friday"]) * weekdayFriCounter +
        Number(values[i]["saturday"]) * weekdaySatCounter +
        Number(values[i]["sunday"]) * weekdaySunCounter;

       console.log(fields.qty,'iki')











       values[i]['total']=  Number(values[i]['monday']) + Number(values[i]['tuesday'])+ Number(values[i]['wednesday'])+ Number(values[i]['thusday'])+ Number(values[i]['friday'])+ Number(values[i]['saturday'])+ Number(values[i]['sunday'])
      setFields(values);
      console.log(fields);
      // console.log(cal)
    }
  }

  function handleAdd() {
    // const values = [...fields];
    // values.push({
    const newrow = {
      runDates: "",
      total: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thusday: "",
      friday: "",
      saturday: "",
      sunday: "",
      qty: "",
    };
    setFields([...fields, newrow]);
  }

  const handleDelete = (index1) => {
    const values = fields.filter((data, i) => i !== index1);
    // values.splice(i, 1);
    setFields(values);
  };

    // function qunt(index, event){
    //   var setqty=event.target.value
    // }



  // function calculateSum() {
  //   let sum = 0;
  //   fields.forEach((field) => {
  //     sum += (field);
  //     console.log(sum)
  //   });
  //   return sum;

  // }

  // useEffect(() => {
  //     var finaltotal =
  //      parseFloat(value1) + parseFloat(value2) +parseFloat(value3) +parseFloat(value4) +parseFloat(value5) +parseFloat(value6) +parseFloat(value7)
  //      settotal(finaltotal)
  //  return finaltotal

  // console.log(finaltotal)

  // settotal(finaltotal)

  // },[value1,value2,value3,value4,value5,value6,value7] )
  // console.log(total ,'total')
  //   console.log(value1,'monday')
  //   console.log(value2,'tuesday')
  //   console.log(value3,'wednesday')
  //   console.log(value4,'thusday')
  //   console.log(value5,'friday')
  //   console.log(value6,'satday')
  //   console.log(value7,'sunday')
  // props.handlefunction({'fin':finaltotal,'week':day});
  // settotal(finaltotal);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>dates</th>
            <th>weeks</th>
          </tr>
        </thead>

        <tbody>
          {fields.map((field, index) => (
            <tr>
              <td style={{}}>
                <div className="form-group">
                  <div style={{ border: "none" }} className="date-range">
                    <RangePicker
                     multiple
                      name="runDates"
                      // selected={}
                      onCalendarChange={(values, event) => {
                        handleChange(index, values, "datepicker");
                        setDates(
                          values.map((item) => {
                            return item;
                          
                          }
                      
                          )
                        
                        );

                        // console.log(values);
                        // handleDateChange(setstartdate(values[0].$d),setenddate(values[1].$d))
                        //   onChange={(event) => handleChange(index, event)}
                        setstartdate(values[0].$d);
                        setenddate(values[0].$d);
                        console.log(values,'mkkmk')
                      }}
                    />
                  </div>

                  {/* <DateRangePicker  /> */}
                  {/* console.log(value) */}
                </div>
              </td>

              <td>
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
                          value={field.thusday}
                          onChange={(event) => handleChange(index, event)}
                          name="thusday"
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

                <Button variant="success" onClick={handleAdd}>
                  Add Row
                </Button>

                {index !== 0 && (
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Popup1;
