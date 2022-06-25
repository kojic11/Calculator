import React from "react";
import './calc.css'

const Calculator = ({getValue, numValue, getResult, result, clear}) => {
    const operators = ['+','-','*','/'];
    const allValues=[7,8,9,4,5,6,1,2,3,0,'.'];
    return (
        <div className="wrapp">
            <div className="cbody">
                <form className="form">
                    <input className='values' defaultValue={numValue} type='text' placeholder="Enter numbers " readOnly></input>
                    <input className='result'defaultValue={result} type='text' placeholder="0 " readOnly></input>
                </form>
                
                <div className="buttons">
                    <div className="operators">
                    {  
                            operators.map((numOp, i) =>
                                <button className="btn-n" onClick={getValue} key={i} value={numOp}>{numOp}</button>
                            )
                        }
                        <button className="C btn-n" onClick={clear}>C</button>
                    </div>
                    <div className="numbers">
                        {  
                            allValues.map((numVal, i) =>
                                <button className="btn-n" onClick={getValue} key={i} value={numVal}>{numVal}</button>
                            )
                        }   
                        <button className='equal' value='equal' onClick={getResult}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Calculator;