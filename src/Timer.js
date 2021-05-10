import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isCountdownRunning, setIsCountdownRunning] = useState(false);
  const [shouldAlert, setShouldAlert] = useState(false);

  useEffect(() => {
    const secondsLeft = parseInt(seconds);

    if (isCountdownRunning && secondsLeft > 0) {
      setTimeout(() => {
        setSeconds(secondsLeft - 1);
      }, 1000);
    } else {
      if (shouldAlert) {
        alert("The countdown has ended");
        setShouldAlert(false);
      }
      setIsCountdownRunning(false);
    }
  }, [isCountdownRunning, seconds]);

  return (
    <div className="Timer">
      This is the timer
      <input
        disabled={isCountdownRunning} //if it is true then the countdown would be running so the input is then disabled
        type="number"
        value={seconds}
        onChange={(event) => {
          setSeconds(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setIsCountdownRunning(true);
          setShouldAlert(true);
        }}
      >
        Start Countdown
      </button>
    </div>
  );
};

export default Timer;
