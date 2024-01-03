// Timer
// import { useRef, useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [mins, setMins] = useState(0);
//   const [seconds, setSeconds] = useState(58);
//   const timerRef = useRef(null);

//   const onStart = () => {
//     timerRef.current = setInterval(() => {
//       setSeconds((prevSeconds) => {
//         if (prevSeconds + 1 >= 60) {
//           setMins((prevMins) => prevMins + 1);
//           return 0;
//         } else {
//           return prevSeconds + 1;
//         }
//       });
//     }, 1000);
//   };
//   const onStop = () => {
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   };

//   const onReset = () => {
//     onStop();
//     setMins(0);
//     setSeconds(0);
//   };

//   return (
//     <div className="App">
//       {mins} {seconds}
//       <div style={{ display: "flex" }}>
//         <button onClick={onStart}>Start</button>
//         <button onClick={onStop}>Pause</button>
//         <button onClick={onReset}>Reset</button>
//       </div>
//     </div>
//   );
// }


// CSS Battle
/*
<div class='main'>
  <div class='wrapper'>
    <section class='keys'>
      <div class='key'>&nbsp;
       <div class='sub-key'></div>
      </div>
      <div class='key'>&nbsp;
      <div class='sub-key'></div>
      </div>
      <div class='key left'>&nbsp;</div>

      <div class='key'>
        &nbsp;
       <div class='sub-key'></div>
      </div>
      <div class='key'>&nbsp;
      <div class='sub-key'></div>
      </div>
      <div class='key'>&nbsp;
      <div class='sub-key'></div>
      </div>
      <div class='key'>&nbsp;</div>
    </section>
  </div>
</div>
<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .main {
    width: 100%;
    height: 100%;
    background: #998235;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper {
    width: 178px;
    height:100px;
    border-radius: 10px;
    background-color: #191919;
    padding: 20px 4px 4px 4px;
  }
  .keys {
   display: flex;
   gap: 5px;
  }
  .key {
    position: relative;
    background-color: #ffffff;
    border-radius: 5px;
    height: 70px;
    width: 20px;
  }
  .left {
    border-top-left-radius: 0;
  }
  .sub-key {
    background-color: #191919;
    height: 40px;
    width: 15px;
    top: 0;
    left: 15px;
    position: absolute;
    z-index: 2;
  }
</style>

<!-- OBJECTIVE -->
<!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is -->

<!-- SCORING -->
<!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. -->

<!-- IMPORTANT: remove the comments before submitting -->
https://cssbattle.dev/play/80
*/