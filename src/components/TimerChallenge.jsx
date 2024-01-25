import { useRef, useState } from "react";
import Dialog from "./Dialog";

export default function TimerChallenge({ title, targetTime }) {
 const timer = useRef();
 const dialog = useRef();
 const [timeRemain, setTimeRemain] = useState(targetTime * 1000);
 const timeActive = timeRemain > 0 && timeRemain < targetTime * 1000;

 if (timeRemain <= 0) {
  clearInterval(timer.current);
  dialog.current.open();
 }

 function handleReset() {
  setTimeRemain(targetTime * 1000);
 }
 function handleStart() {
  timer.current = setInterval(() => {
   setTimeRemain((prevTremain) => prevTremain - 10);
  }, 10);
 }

 function handleStop() {
  dialog.current.open();
  clearInterval(timer.current);
 }
 return (
  <>
   <Dialog ref={dialog} targetTime={targetTime} remainingTime={timeRemain} onReset={handleReset} />
   <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
     {targetTime} second{targetTime > 1 ? "s" : ""}
    </p>
    <p>
     <button onClick={timeActive ? handleStop : handleStart}>{timeActive ? "Stop" : "Start"}</button>
    </p>
    <p className={timeActive ? "active" : undefined}>{timeActive ? "Time is Running..." : "Timer Inactive"}</p>
   </section>
  </>
 );
}
