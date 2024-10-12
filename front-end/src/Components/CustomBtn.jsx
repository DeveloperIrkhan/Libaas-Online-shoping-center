import React from 'react'
import './index.css'
const CustomBtn = ({ className, onClickFun, text }) => {
  return (
    <button onClick={onClickFun} className={`${className}`}>{text}</button>
  )
}

export default CustomBtn