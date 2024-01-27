import React, { useState } from "react";

const Calculator = () => {
  const [typedValue, setTypedValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setTypedValue((prevValue) => prevValue + value);
  };

  const handleEqualsClick = () => {
    try {
      const calculatedResult = calculateExpression(typedValue);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClearClick = () => {
    setTypedValue("");
    setResult("");
  };

  const calculateExpression = (expression) => {
    const [operand1, operator, operand2] = expression.split(/([+\-*/])/);

    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0 && num1 !==0) {
          return "Infinity";
        }else if(num1 === 0 && num2 === 0)
            return "NaN"
        return num1 / num2;
      default:
        return "Error"
    }
  };

  return (
    <div className="content-center text-center justify-center flex-col">
      <h1 className="font-bold text-4xl mb-3">React Calculator</h1>
      <br />
      <div className="flex justify-center items-center mb-3">
        <input
          className="w-60 outline text-2xl mr-3"
          type="text"
          value={typedValue}
          readOnly
        />
      </div>
      <p className="text-gray-500 text-3xl p-6">{result}</p>
      <br />
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4 w-70 justify-center">
          {[
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "C",
            "0",
            "=",
            "/",
          ].map((value) => (
            <div key={value}>
              <button
                onClick={() => {
                  if (value === "=") {
                    handleEqualsClick();
                  } else if (value === "C") {
                    handleClearClick();
                  } else {
                    handleButtonClick(value);
                  }
                }}
                className="w-14 h-14 rounded border-black border-2 bg-gray-200 text-2xl font-bold "
              >
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
