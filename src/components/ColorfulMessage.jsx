import React from 'react'

export const ColorfulMessage = ({ color, text }) => {
  const contentStyle = {
    color: color,
    fontSize: '18px',
  };
  return <p style={contentStyle}>{text}</p>;
}
