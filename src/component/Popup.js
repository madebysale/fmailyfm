import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Form.css";

function Popup(props) {
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // useEffect(() => {
  //   var finaltotal =(parseFloat(value1)+ parseFloat(value2)+ parseFloat(value3)+parseFloat(value4)+parseFloat(value5)+parseFloat(value6)+parseFloat(value7))
  //  props.handlefunction(finaltotal)
  //   settotal()

  // },[] )
  useEffect(() => {
    var finaltotal =
     parseFloat(value1) + parseFloat(value2) +parseFloat(value3) +parseFloat(value4) +parseFloat(value5) +parseFloat(value6) +parseFloat(value7)
    
 var day= {
      "val1":value1,
      "val2":value2,
      "val3":value3,
      "val4":value4,
      "val5":value5,
      "val6":value6,
      "val7":value7,
     
    }


  
    props.handlefunction({'fin':finaltotal,'week':day});
    settotal(finaltotal);
    
    
}, [value1, value2, value3, value4, value5, value6, value7]);




  return (
    <>
      <Button  className="popup-btn" onClick={handleShow} >
        
      <Form.Control   onClick={handleShow} className="popup-control" type="total" value={total} placeholder="total" />
              </Button>

      <Modal  className="pop-btn" show={show} onHide={handleClose}>
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
              <div  className="label-con1">1</div>
              <Form.Label className="label-con1">Monday</Form.Label>
              <Form.Control
              className="popup-control"
                type="number"
                min={0}
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="monday"
                autoFocus
              />
            </Form.Group>
            <Form.Group
            className="popup-grp mb-3 px-3"
              id="tues"
              controlId="exampleForm.ControlInput1"
            >
               <div  className="label-con1">2</div>
              <Form.Label className="label-con1">Tuesday</Form.Label>
              <Form.Control
               className="popup-control"
                type="number"
                min={0}
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="tuesday"
              />
            </Form.Group>
            <Form.Group
             className="popup-grp mb-3 px-3"
              id="wed"
              controlId="exampleForm.ControlInput1"
            >
               <div  className="label-con1">3</div>
              <Form.Label className="label-con1">Wednesday</Form.Label>
              <Form.Control
               className="popup-control"
                type="number"
                min={0}
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                placeholder="monday"
              />
            </Form.Group>
            <Form.Group
             className="popup-grp mb-3 px-3"
              id="thurs"
              controlId="exampleForm.ControlInput1"
            >
               <div  className="label-con1">4</div>
              <Form.Label className="label-con1">Thursday</Form.Label>
              <Form.Control
                type="number"
                min={0}
                className="popup-control"
                value={value4}
                onChange={(e) => setValue4(e.target.value)}
                placeholder="thursday"
              />
            </Form.Group>
            <Form.Group
             className="popup-grp mb-3 px-3 "
              id="fri"
              controlId="exampleForm.ControlInput1"
            >
               <div  className="label-con1">5</div>
              <Form.Label className="label-con1">Friday</Form.Label>
              <Form.Control
                 className="popup-control"
                type="number"
                min={0}
                value={value5}
                onChange={(e) => setValue5(e.target.value)}
                placeholder="friday"
              />
            </Form.Group>
            <Form.Group
             className="popup-grp mb-3 px-3"
              id="sat"
              controlId="exampleForm.ControlInput1"
            >
               <div  className="label-con1">6</div>
              <Form.Label className="label-con1">Saturday</Form.Label>
              <Form.Control
                 className="popup-control"
                type="number"
                min={0}
                value={value6}
                onChange={(e) => setValue6(e.target.value)}
                placeholder="saturday"
              />
            </Form.Group>
            <Form.Group
             className="popup-grp mb-3 px-3"
              controlId="exampleForm.ControlInput1"
            >
               <div  className="label-con1">7</div>
              <Form.Label className="label-con1">Sunday</Form.Label>
              <Form.Control
                 className="popup-control"
                type="number"
                min={0}
                value={value7}
                onChange={(e) => setValue7(e.target.value)}
                placeholder="sunday"
              />
            </Form.Group>
            <Form.Group
              className="popup-grp mb-3 px-3"
              controlId="exampleForm.ControlInput1"
            >
               <div  className="label-con1">8</div>
              <Form.Label className="label-con1">Total</Form.Label>
              <Form.Control    className="popup-control" type="total" value={total} placeholder="total" />
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
    </>
  );
}

export default Popup;
