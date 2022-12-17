import React , {useEffect} from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./css/styles.css";



function Timer(props) {
  useEffect(() => {
    
  }, []);


  function TimeEnd(){
     props.func();
  }


  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      TimeEnd();
      return <div className="timer">Too lale...</div>;
    }
     
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  return (
    <>
    <h1>
      Time Left
    </h1>
    <div className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors={["#07CAE1","#004777", "#F7B801","#FFC300","#A30000", "#F3690A","#A30000"]}
        colorsTime={[23, 15, 10,7,4,2, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
    
  </>
  )
}

export default Timer