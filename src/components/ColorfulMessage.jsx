import React from 'react'

const ColorfulMessage = ({color, text}) => {
  const contentStyle = {
    color: color,
    fontSize: '18px',
  };
  return <p style={contentStyle}>{text}</p>;
}

export default ColorfulMessage
