import React, { useState } from 'react';

const DiscountCalculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [rate, setRate] = useState(0.1);

  const calculateTotal = () => {
    // const total = (parseFloat(value1) + parseFloat(value2) * rate).toFixed(2);
    // const discount = (total * 0.1).toFixed(2);
    // return (total - discount).toFixed(2);

    
  };

  return (
    <div>
      <h1>Discount Calculator</h1>
      <div>
        <label htmlFor="value1">Value 1:</label>
        <input
          type="number"
          id="value1"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="value2">Value 2:</label>
        <input
          type="text"
          id="value2"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rate">Rate:</label>
        <input
          type="text"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="total">Total:</label>
        <input type="text" id="total" value={calculateTotal()} readOnly />
      </div>
    </div>
  );
};

export default DiscountCalculator;
