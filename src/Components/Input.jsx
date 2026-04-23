import React from 'react'
import "../Components/Css/Input.css"

const Input = (props) => {
  return (
<input type="text" placeholder={props.text} className={ `inputOption ${props.className}`} />
  )
}

export default Input
