import { useState } from "react";

const Chatgpt2 = () => {
  const [dynamicData, setDynamicData] = useState([
    {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
    },
  ]);

  const addRow = () => {
    const newRow = {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
    };
    setDynamicData([...dynamicData, newRow]);
  };

  const deleteRow = (index) => {
    const newData = dynamicData.filter((data, i) => i !== index);
    setDynamicData(newData);
  };

  const handleInputChange = (event, rowIndex, fieldName) => {
    const newValue = event.target.value;
    const newData = [...dynamicData];
    newData[rowIndex][fieldName] = newValue;
    setDynamicData(newData);
  };

  return (
    <div>
      {dynamicData.map((rowData, rowIndex) => (
        <div key={rowIndex}>
          <input
            type="text"
            value={rowData.field1}
            onChange={(event) => handleInputChange(event, rowIndex, "field1")}
          />
          <input
            type="text"
            value={rowData.field2}
            onChange={(event) => handleInputChange(event, rowIndex, "field2")}
          />
          <input
            type="text"
            value={rowData.field3}
            onChange={(event) => handleInputChange(event, rowIndex, "field3")}
          />
          <input
            type="text"
            value={rowData.field4}
            onChange={(event) => handleInputChange(event, rowIndex, "field4")}
          />
          <input
            type="text"
            value={rowData.field5}
            onChange={(event) => handleInputChange(event, rowIndex, "field5")}
          />
          <input
            type="text"
            value={rowData.field6}
            onChange={(event) => handleInputChange(event, rowIndex, "field6")}
          />
          <input
            type="text"
            value={rowData.field7}
            onChange={(event) => handleInputChange(event, rowIndex, "field7")}
          />
          <input
            type="text"
            value={rowData.field8}
            onChange={(event) => handleInputChange(event, rowIndex, "field8")}
          />
          {rowIndex !== 0 && (
            <button onClick={() => deleteRow(rowIndex)}>Delete Row</button>
          )}
        </div>
      ))}
      <button onClick={addRow}>Add Row</button>
    </div>
  );
};

export default Chatgpt2;
