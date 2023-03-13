// import { Field } from 'formik';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Field() {
  const [rows, setRows] = useState([{ productType: '', runDates: '', perWeeks: '', rate: '', discount: '', cost: '', costWithTax: '', discountedCost: '' }]);

  function handleChange(event, index) {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  }

  function handleAddRow() {
    const newRows = [...rows, { productType: '', runDates: '', perWeeks: '', rate: '', discount: '', cost: '', costWithTax: '', discountedCost: '' }];
    setRows(newRows);
  }

  function handleRemoveRow(index) {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  }

  function formatRunDates(startDate, endDate) {
    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth() + 1;
    const startYear = startDate.getFullYear();
    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth() + 1;
    const endYear = endDate.getFullYear();
    return `${startDay}/${startMonth}/${startYear} - ${endDay}/${endMonth}/${endYear}`;
  }

  function handleStartDateChange(date, index) {
    const newRows = [...rows];
    const endDate = newRows[index].endDate;
    newRows[index]['runDates'] = formatRunDates(date, endDate);
    newRows[index]['startDate'] = date;
    setRows(newRows);
  }

  function handleEndDateChange(date, index) {
    const newRows = [...rows];
    const startDate = newRows[index].startDate;
    newRows[index]['runDates'] = formatRunDates(startDate, date);
    newRows[index]['endDate'] = date;
    setRows(newRows);
  }

  return (
    <div>
      <table>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td><input type="text" name="productType" value={row.productType} onChange={(event) => handleChange(event, index)} /></td>
              <td>
                <div className="date-input-container">
                  <DatePicker selected={row.startDate} onChange={(date) => handleStartDateChange(date, index)} />
                  <span>-</span>
                  <DatePicker selected={row.endDate} onChange={(date) => handleEndDateChange(date, index)} />
                </div>
              </td>
              <td><input type="text" name="perWeeks" value={row.perWeeks} onChange={(event) => handleChange(event, index)} /></td>
              <td><input type="text" name="rate" value={row.rate} onChange={(event) => handleChange(event, index)} /></td>
              <td><input type="text" name="discount" value={row.discount} onChange={(event) => handleChange(event, index)} /></td>
<td><input type="text" name="cost" value={row.cost} onChange={(event) => handleChange(event, index)} /></td>
<td><input type="text" name="costWithTax" value={row.costWithTax} onChange={(event) => handleChange(event, index)} /></td>
<td><input type="text" name="discountedCost" value={row.discountedCost} onChange={(event) => handleChange(event, index)} /></td>
<td>
<button onClick={() => handleRemoveRow(index)}>Remove</button>
</td>
</tr>
))}
</tbody>
</table>
<button onClick={() => handleAddRow()}>Add Row</button>
</div>
);
}

export default Field;

// vbnet
// Copy code

// In this updated code, we have used two DatePicker components from the "react-datepicker" library to select the start and end dates respectively. The `formatRunDates` function takes the start and end dates and returns a string in the format "DD/MM/YYYY - DD/MM/YYYY", which is then set as the value of the "Run Dates" field.




