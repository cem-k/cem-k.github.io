import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Benefits = () => {

    const [count, setCount] = useState(0);
    const [nums, setNums] = useState([0,1,2,3,4,5,6,7,8,9])
      
    const Counter = () => {
      
        useEffect(() => {
          if (count < nums.length) {
            const interval = setInterval(() => {
              setCount(count + 1);
            }, 200);
      
            return () => clearInterval(interval);
          } else {
            setCount(0);
          }
        }, [count, nums.length]);
    }

    Counter(10)

  return (
    <div className="benefits">
        <div>
            <h2>Hours saved</h2>
            <FontAwesomeIcon icon="fa-regular fa-clock" size="4x"/>
            <p>2{nums[(count + 0) % nums.length]}{nums[(count + 2) % nums.length]}</p>
        </div>
        <div>
            <h2>Money saved</h2>
            <FontAwesomeIcon icon="fa-solid fa-piggy-bank" size="4x"/>
            <p>€4{nums[(count + 0) % nums.length]}{nums[(count + 2) % nums.length]}{nums[(count + 5) % nums.length]}</p>
        </div>
        <div>
            <h2>Schools</h2>
            <FontAwesomeIcon icon="fa-solid fa-school" size="4x"/>
            <p>1{nums[(count + 0) % nums.length]}{nums[(count + 2) % nums.length]}</p>
        </div>
    </div>
  )
}

export default Benefits;