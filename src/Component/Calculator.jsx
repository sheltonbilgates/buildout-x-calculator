import React, { useState } from 'react';

const Calculator = () => {
  const [typedValue, setTypedValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setTypedValue((prevValue) => prevValue + value);
  };

  const handleEqualsClick = () => {
    try {
      setResult(eval(typedValue).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClearClick = () => {
    setTypedValue("");
    setResult("");
  };

  return (
    <div className='content-center text-center justify-center flex-col'>
      <h1 className='font-bold text-4xl mb-3'>React Calculator</h1>
      <br />
      <div className="flex justify-center items-center mb-3">
        <input className="w-60 outline text-2xl mr-3" type="text" value={typedValue} readOnly />
        
      </div>
      <p className='text-gray-500 text-3xl p-6'>{result}</p>
        <br />
        <div className='flex justify-center'>

        
      <div className='grid grid-cols-4 gap-4 w-70 justify-center'>
     
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((value) => (
          <div key={value}>
            <button onClick={() => {
              if (value === '=') {
                handleEqualsClick();
              } else if (value === 'C') {
                handleClearClick();
              } else {
                handleButtonClick(value);
              }
            }} className='w-14 h-14 rounded border-black border-2 bg-gray-200 text-2xl font-bold '>
              {value}
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Calculator;
