import React from 'react'

const Square = (props) => {
  if (props.value === 1) {
    return (
      <td>RED</td>
    )
  } else if (props.value === 2) {
    return (
      <td>YEL</td>
    )
  } else {
    return (
      <td onClick={function() {props.updateSquare(props.column)}} ></td>
    )
  }
}

export default Square;