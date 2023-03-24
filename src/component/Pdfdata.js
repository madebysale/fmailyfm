import React, { useState } from 'react';
import jsPDF from 'jspdf';
import image from './example.jpg';

const Pdfdata = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [tableData, setTableData] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' }
  ]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add table to PDF
    const headers = [['ID', 'Name', 'Email']];
    const rows = tableData.map(row => [row.id, row.name, row.email]);
    doc.autoTable({
      head: headers,
      body: rows
    });

    // Add image to PDF
    const imgWidth = 100;
    const imgHeight = 100;
    doc.addImage(image, 'JPEG', 10, 100, imgWidth, imgHeight);

    // Add form data to PDF
    doc.text(`Name: ${formData.name}`, 10, 220);
    doc.text(`Email: ${formData.email}`, 10, 230);
    doc.text(`Message: ${formData.message}`, 10, 240);

    doc.save('pdf.pdf');
  };

  return (
    <div>
      <h2>Table Data:</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Image:</h2>
      <img src={image} alt="example" />

      <h2>Form Data:</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
      </form>

      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default Pdfdata;
