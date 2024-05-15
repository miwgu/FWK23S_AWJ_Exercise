import React from 'react';
import {useState, useRef} from 'react';
import purify from 'dompurify';


const XssAttack = () => {
  /* "<img onError=alert('Hacked!') src='mi'>"
<script>alert("xss")</script> */
const [value, setValue] = useState("<img onError=alert('Hacked!') src='mi'>") 
const resultRef = useRef(null);

console.log('env file:', import.meta.env.VITE_SOME_KEY)

  return (
    <div>
        <h1>XssAttack</h1>
        <textarea className ="xss-textarea" value={value} onChange= {(e)=> setValue(e.target.value)}></textarea>
        <br />

        {/* Render a button to sanitize and display the input */}
        <button className="xss-btn" onClick={() => resultRef.current.innerHTML = purify.sanitize(value, {
        FORBID_TAGS: ['marquee']
      })}>Send</button>
      <button className="xss-btn" onClick={() => resultRef.current.innerHTML = value}>Send(hacked)</button>
      <br />

      <div ref ={resultRef}>

      </div>
    </div>

  )
}

export default XssAttack