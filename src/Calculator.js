import './Calculator.css';
import { useState } from "react";

export default function () {
    const [input,setInput] = useState('');
    const [result,setResult] = useState('');

    const HandleButtonClick = (value) => {
        setInput(input + value);
        setResult('');
    }
    const HandleClear = () => {
        setInput('');
        setResult('');
    }
    const HandleCalculate = (input)=> {
        try{
            setInput('');
            setResult(eval(input));
        }catch(error){
            setResult('Error');
        }
    }
    return (
        <>
            <div className="calculator">
                <div className="calculator__output input result">{input}{result}</div>
                <div className="calculator__keys">
                    <button className="calculator__key calculator__key--operator" value="+" onClick={()=>{HandleButtonClick('+')}}>+</button>
                    <button className="calculator__key calculator__key--operator" value="-" onClick={()=>{HandleButtonClick('-')}}>-</button>
                    <button className="calculator__key calculator__key--operator" value="*" onClick={()=>{HandleButtonClick('*')}}>&times;</button>
                    <button className="calculator__key calculator__key--operator" value="/" onClick={()=>{HandleButtonClick('/')}}>÷</button>
                    <button className="calculator__key" value="7" onClick={()=>{HandleButtonClick('7')}}>7</button>
                    <button className="calculator__key" value="8" onClick={()=>{HandleButtonClick('8')}}>8</button>
                    <button className="calculator__key" value="9" onClick={()=>{HandleButtonClick('9')}}>9</button>
                    <button className="calculator__key" value="4" onClick={()=>{HandleButtonClick('4')}}>4</button>
                    <button className="calculator__key" value="5" onClick={()=>{HandleButtonClick('5')}}>5</button>
                    <button className="calculator__key" value="6" onClick={()=>{HandleButtonClick('6')}}>6</button>
                    <button className="calculator__key" value="1" onClick={()=>{HandleButtonClick('1')}}>1</button>
                    <button className="calculator__key" value="2" onClick={()=>{HandleButtonClick('2')}}>2</button>
                    <button className="calculator__key" value="3" onClick={()=>{HandleButtonClick('3')}}>3</button>
                    <button className="calculator__key" value="0" onClick={()=>{HandleButtonClick('0')}}>0</button>
                    <button className="calculator__key" value="." onClick={()=>{HandleButtonClick('0')}}>.</button>
                    <button className="calculator__key" value="a" onClick={()=>{HandleClear()}}>AC</button>
                    <button className="calculator__key calculator__key--enter" value="=" onClick={()=>{HandleCalculate(input)}}>=</button>
                </div>
            </div>
        </>
    );
}