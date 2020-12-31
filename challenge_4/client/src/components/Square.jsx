import React from 'react'

const Square = (props) => {
  if (props.value === 1) {
    return (
      <td onClick={function() {props.updateSquare(props.column)}} >RED</td>
    )
  } else if (props.value === 2) {
    return (
      <td onClick={function() {props.updateSquare(props.column)}} >YEL</td>
    )
  } else {
    return (
      <td onClick={function() {props.updateSquare(props.column)}} ></td>
    )
  }
}

export default Square;