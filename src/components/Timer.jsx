import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => Math.max(0, prevTime - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalTime = 60 * 60;
  const percentageRemaining = (timeRemaining / totalTime) * 100;

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((100 - percentageRemaining) / 100) * circumference;

  const dotPosition = {
    left: `${100 + Math.cos((strokeDashoffset / circumference) * 2 * Math.PI) * radius}px`,
    top: `${100 - Math.sin((strokeDashoffset / circumference) * 2 * Math.PI) * radius}px`
  };

  return (
    <div style={{
      background: "teal",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      margin: "1.2rem",
      height: "200px",
      borderRadius: "10px",
      padding: "30px",
      position: "relative"
    }}>
      <svg width="200" height="200">
        <g transform="rotate(-90 100 100)">
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="green"
            stroke="#F7958E"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 0.7s',
            }}
          />
          <text x="50%" y="45%" textAnchor="middle" dy=".35em" fontSize="2rem" fontWeight="bold" fill="white" transform="rotate(90 100 100)">
            {Math.floor(timeRemaining / 60)}
            <tspan fontSize="1rem" dy="-.6em" dx=".2em" fontWeight="normal" baselineShift="sub">MINS</tspan>
          </text>
          <text x="50%" y="45%" textAnchor="middle" dy="2em" fontSize="1rem" fill="white" transform="rotate(90 100 100)">
            TO START
          </text>
        </g>
        <circle
          cx={dotPosition.left}
          cy={dotPosition.top}
          r="10"
          fill="red"
          transform="rotate(-90 100 100)"
          style={{
            transition: 'all 0.7s',
          }}
        />
      </svg>


    </div>
  );
}

export default Timer;
