
import { useEffect, useState, useRef } from 'react';
import './App.css';
import LocalBox from './LabelBox';
import Operator from './Operator';
import Timer from './Timer';

function App() {
  const [num1, setNum1]=useState(0);
  const [num2, setNum2]=useState(0);
  const [operator, setOperator]=useState('+');
  const [result, setResult]=useState("");
  const inputRef= useRef();

  
function loadFunc(){
  inputRef.current.focus();
  document.getElementById("msgText").style.backgroundColor="";
  document.getElementById("answer").value="";
  setResult("");
  document.getElementById("answer").setAttribute('autofocus', 'autofocus');

  setNum1(Math.floor(Math.random() * 100));
  setNum2(Math.floor(Math.random() * 100));

  setOperator(getSign());
}
  
  function getSign(){
    let n=Math.floor(Math.random() * 4);

    if(n===0){
      return '+';
    }else if(n===1){
      return '-';
    }else if(n===2){
      return '*';
    }else if(n===3){
      return '/';
    }

  }


  window.onload = (event) =>{
    loadFunc();
  };
  
  function resetBtn(){
    loadFunc();
   // remainingTime=30;
  }


  function calculate(){
      let number1=parseInt( document.getElementById("number1").innerText);
      let number2= parseInt( document.getElementById("number2").innerText);
      let oprtr= document.getElementById("opnd").innerText;
      let res= document.getElementById("answer").value;
      let resultValue=0;
     if(res != ""){

      switch(oprtr){
        case '+':  resultValue= (number1 + number2);  break;  
        case '-':  resultValue= (number1 - number2);  break; 
        case '*':  resultValue= (number1 * number2);  break; 
        case '/':  resultValue= (number1 / number2);  break; 
        }
        resultValue = Math.floor(resultValue);
      //alert(res+"     "+resultValue);
      if(res == resultValue){
        setResult("Currect Answer");
        document.getElementById("msgText").style.color="green";
        document.getElementById("msgText").style.backgroundColor="#56ea56";
    
        
      }else{
        setResult("Wrong Answer");
        document.getElementById("msgText").style.color="red";
        
        document.getElementById("msgText").style.backgroundColor="#f98585";
      
      }
    }
    else{
      setResult("Enter answer");
        document.getElementById("msgText").style.color="red";
        
        document.getElementById("msgText").style.backgroundColor="#f98585";
    }
  }
   
 

      
  return (
<>
<h1>Welcome to Maths Quiz</h1>
<button onClick={()=>resetBtn()}>Reset</button>
<div id="container">
<LocalBox num1={num1} id="number1"/>
<Operator operator={operator}/>
<LocalBox num1={num2} id="number2"/>
</div>
<div className='res_container'>
<input type="number" id="answer" inputMode='numeric' pattern="[0-9]*" ref={inputRef}/>
</div>
<div className='res_container'>
<button id="btn" onClick={()=>calculate()}>Check</button> 
<div id='WatchSpan'><Timer func={loadFunc} /></div>
</div>

<div className='res_container'>
<span id="msgText">{result}</span>

</div>
</>
  );
}

export default App;
