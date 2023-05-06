import React, { useState } from "react";

function Radio() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="fileAttachment"
          value="file1"
          checked={selectedFile === "file1"}
          onChange={handleFileChange}
        />
    <input  type='file' />
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="fileAttachment"
          value="file2"
          checked={selectedFile === "file2"}
          onChange={handleFileChange}
        />
        File 2
      </label>
    </div>
  );
}

export default Radio;
