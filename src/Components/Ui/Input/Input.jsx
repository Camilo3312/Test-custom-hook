import React from 'react'
import './Input.css'

export const Input = ({ style='txt_default' ,type = 'text',...props}) => {
  return (
      <input className={`${style}`} type={type} {...props}></input>
  )
}
