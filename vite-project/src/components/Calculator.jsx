import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left:50px;
  background-color: #f4f4f4; 
`;

const Display = styled.div`
  width: 260px;
  height: 60px;
  background-color: #343a40; 
  color: #fff; 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  font-size: 24px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  width: 60px;
  margin: 5px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

const ButtonRow = styled.div`
  display: flex;
`;

function Calculator() {
    const [currentInput, setCurrentInput] = useState("");
    const [previousInput, setPreviousInput] = useState("");
    const [operation, setOperation] = useState(null);

    const appendValue = (value) => {
        if (value === "." && currentInput.includes(".")) return;
        setCurrentInput(currentInput + value);
    };

    const handleOperation = (op) => {
        if (currentInput === "") return;
        if (previousInput !== "") {
            calculate();
        }
        setOperation(op);
        setPreviousInput(currentInput);
        setCurrentInput("");
    };

    const calculate = () => {
        let result;
        const previous = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        switch (operation) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '*':
                result = previous * current;
                break;
            case '/':
                result = previous / current;
                break;
            default:
                return;
        }
        setCurrentInput(result.toString());
        setOperation(null);
        setPreviousInput("");
    };

    const clearAll = () => {
        setCurrentInput("");
        setPreviousInput("");
        setOperation(null);
    };

    return (
        <CalculatorContainer>
            <Display>
                {previousInput} {operation} {currentInput}
            </Display>
            <ButtonRow>
                <Button onClick={() => appendValue("1")}>1</Button>
                <Button onClick={() => appendValue("2")}>2</Button>
                <Button onClick={() => appendValue("3")}>3</Button>
                <Button onClick={() => handleOperation('+')}>+</Button>
            </ButtonRow>
            <ButtonRow>
                <Button onClick={() => appendValue("4")}>4</Button>
                <Button onClick={() => appendValue("5")}>5</Button>
                <Button onClick={() => appendValue("6")}>6</Button>
                <Button onClick={() => handleOperation('-')}>-</Button>
            </ButtonRow>
            <ButtonRow>
                <Button onClick={() => appendValue("7")}>7</Button>
                <Button onClick={() => appendValue("8")}>8</Button>
                <Button onClick={() => appendValue("9")}>9</Button>
                <Button onClick={() => handleOperation('*')}>*</Button>
            </ButtonRow>
            <ButtonRow>
                <Button onClick={() => appendValue("0")}>0</Button>
                <Button onClick={() => appendValue(".")}>.</Button>
                <Button onClick={calculate}>=</Button>
                <Button onClick={() => handleOperation('/')}>/</Button>
            </ButtonRow>
            <Button onClick={clearAll} style={{ width: "95%" }}>Limpar</Button>
        </CalculatorContainer>
    );
}

export default Calculator;
