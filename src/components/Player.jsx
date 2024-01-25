import { useState, useRef } from "react";

export default function Player() {
 const playerName = useRef();

 const [pname, setpName] = useState(null);

 function handleClick() {
  setpName(playerName.current.value);
 }

 return (
  <section id="player">
   <header>
    <h1>
     The <em>Fastest</em> Finger First
    </h1>
    <p>Stop the timer once you estimate that time is (almost) up</p>
   </header>
   <h2>Welcome {pname ?? "unknown entity"}</h2>
   <p>
    <input type="text" ref={playerName} />
    <button onClick={handleClick}>Set Name</button>
   </p>
  </section>
 );
}
