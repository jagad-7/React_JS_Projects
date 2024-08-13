import React, { useState } from 'react'
import Keypad from './Keypad'
import './Calcultor.css'

function Calculator() {

    const [input, setInput] = useState('')

    function handleClick(value){
        setInput(input + value)
    }
    function calculate(value){
        let outputVal = eval(input)
            setInput(outputVal)
        }
        function handleClear(){
            setInput('')
        }

  return (
    <div className='container'>
        <h1>Calculator App in ReactJS</h1>
        <div className="calculator">
            <input type="text" value={input} className='output' />
        </div>
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate} />
    </div>
    
  )
}


export default Calculator