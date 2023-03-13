import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';

function MyTable() {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([{ item: '', quantity: '' }]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleAddRow = () => {
    setTableData([...tableData, { item: '', quantity: '' }]);
  };

  const handleDeleteRow = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  const handleChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tableData);
    handleClose();
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <Form.Control
                  type="text"
                  placeholder="Enter Item Name"
                  value={row.item}
                  onChange={(event) => handleChange(index, 'item', event.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  placeholder="Enter Quantity"
                  value={row.quantity}
                  onChange={(event) => handleChange(index, 'quantity', event.target.value)}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteRow(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <Button variant="success" onClick={handleAddRow}>
                Add Row
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Item Name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter Quantity" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Button variant="primary" onClick={handleShow}>
        Add Row
      </Button>
    </>
  );
}

export default MyTable;
