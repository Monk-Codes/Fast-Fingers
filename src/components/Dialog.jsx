import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Dialog = forwardRef(function Dialog({ targetTime, remainingTime, onReset }, ref) {
 const dialog = useRef();
 const userLost = remainingTime <= 0;
 const formatTimeRemain = (remainingTime / 1000).toFixed(2);
 const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 10);

 useImperativeHandle(ref, () => {
  return {
   open() {
    dialog.current.showModal();
   },
  };
 });

 return createPortal(
  <dialog ref={dialog} className="result-modal">
   {userLost && <h2>You Lost</h2>}
   {!userLost && <h2>You Score : {score}</h2>}
   <p>
    The target time was <strong>{targetTime}</strong> seconds
   </p>
   <p>
    You stopped the timer with <strong>{formatTimeRemain}</strong> seconds left
   </p>
   <form action="dialog">
    <button onSubmit={onReset}>Close</button>
   </form>
  </dialog>,
  document.getElementById("modal")
 );
});

export default Dialog;
