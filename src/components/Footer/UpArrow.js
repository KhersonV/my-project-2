import React from "react";

function UpArrow() {
  return (
    <svg width="50" height="50">
      <rect x="0" y="0" width="50" height="50" fill="#000" />
      <path d="M 25 10 L 40 25 L 35 30 L 25 20 L 15 30 L 10 25 Z" fill="aquamarine">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0 0; 0 10; 0 0" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

export default UpArrow;
