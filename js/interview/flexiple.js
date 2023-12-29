// Given an unsorted array, find the minimum absolute difference between the left 
// sum and the right sum of each element. The left sum includes the 
// element at the index.

// Example: Arr = [ 3, 1, 2, 4, 3 ]

// For index i = 0 => leftSum = 3,  rightSum = 10, abs diff = |3  - 10|  = 7  
// For index i = 1 => leftSum = 4,  rightSum = 9,  abs diff = |4  - 9 |  = 5
// For index i = 2 => leftSum = 6,  rightSum = 7,  abs diff = |6  - 7 |  = 1 
// For index i = 3 => leftSum = 10, rightSum = 3,  abs diff = |10 - 3 |  = 7 
// For index i = 4 => leftSum = 13, rightSum = 0,  abs diff = |13 - 0 |  = 13 

// Minimum Absolute Difference = 1

const minAbsDiff = (nums) => {
    let minDiff = Number.MAX_SAFE_INTEGER;

    // for(let i=0; i< nums.length; i++) {
    //     let left = 0;
    //     let right = 0;

    //     for(let j=i+1; j<=nums.length-1; j++) {
    //         right += nums[j]
    //     }
    //     for(let j=0; j<=i; j++) {
    //        left += nums[j]
    //     }
    //     const diff = Math.abs(left - right);
    //     minDiff = Math.min(diff, minDiff)
    // }
    
    let l = 0;
    let r = nums.length-1;

    let leftSum = 0;
    let rightSum = 0;
    const leftObj = {};
    const rightObj = {};

    while(l < nums.length && r >=0 ) {
        leftSum += nums[l];
        leftObj[l] = (leftObj[l] || 0) + leftSum;
        rightSum += nums[r+1] ?? 0;
        rightObj[r] = (rightObj[r] || 0) + rightSum;
        l++;
        r--;
    }

    for(let i=0; i<nums.length; i++) {
      const diff = Math.abs(leftObj[i] - rightObj[i]);
      minDiff = Math.min(diff, minDiff);
    }

    return minDiff
}

// T: O(n^2)
// T: O(n)

console.log(minAbsDiff([ 3, 1, 2, 4, 3 ]))
console.log(minAbsDiff([-6, 4, 1, -3, 2]))
console.log(minAbsDiff([ 8, 52, -41, -27, -53, -64, -38, 96, 32, 57 ]))


// CSS BATTLE
/*
<div>
  <div class='left'></div>
  <div class='right'></div>
</div>
<style>
  * {
    padding:0;
    margin: 0;
    box-sizing: border-box;
  }
  div {
    width: 100%;
    height: 100%;
    background: #AA445F;
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
  }
  .left {
      background-color: #F7EC7D;
      height: 200px;
      width: 100px;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
  }
  .right {
     background-color: #E38F66;
    height: 200px;
    width: 100px;
          border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
}
</style>

<!-- OBJECTIVE -->
<!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is -->

<!-- SCORING -->
<!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. -->

<!-- IMPORTANT: remove the comments before submitting -->
https://cssbattle.dev/play/31
*/


// React 
/*
React Timer

import { useState, useRef, useEffect } from "react";

const App = () => {
  // const { start, stop, reset, isRunning, count } = useTimer(0);
  const { start, stop, reset, isRunning, count } = useTimer(0);

  return (
    <div>
      <h1>Timer App</h1>
      <div>
        <h2>Time: {count}</h2>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

const useTimer = (time: number) => {
  const timerRef = useRef<number>(0);
  const [count, setCount] = useState<number>(time);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const start = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setCount((prev) => {
        localStorage.setItem("timer", `${prev + 1}`);
        return prev + 1;
      });
    }, 1000);
  };

  useEffect(() => {
    const timer = localStorage.getItem("timer");
    if (timer) {
      setCount(parseInt(timer));
    }
  }, []);

  const reset = () => {
    setCount(0);
    stop();
  };

  return { stop, count, start, reset, isRunning };
};

export default App;


*/


const maxSumSubArr = (nums, k) => {
  let max = 0;
  if(k === nums.length) return nums.reduce((total, curr) => total+curr, 0);
  const sumArr = [];
  let firstKSum = 0;

  for(let j=0; j<k; j++) {
      firstKSum += nums[j]
  }

  sumArr.push(firstKSum);

  for(let i=1; i<nums.length;i++) {
      if((nums.length-i-k) < 0) break
      sumArr[i] = sumArr[i-1] - nums[i-1]+ nums[i+k-1];
      max = Math.max(max, sumArr[i]);
  }

  return max;
}

console.log(maxSumSubArr([2, 1, 5, 1, 3, 2], 3))
// 215
//  151
//   513
//    132

