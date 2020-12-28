import React from 'react'

class Square extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      player: null
    }
  }

  handleChange(e) {
    // handle change will take the current player and change state to match
  }

  render () {
    if (this.state.player === null) {
      return (
        <div className="square" ></div>
      )
    } else if (this.state.player === 'red') {
      return (
        <div className="square" >
          <RedToken />
        </div>
      )
    } else if (this.state.player === 'yellow') {
      return (
        <div className="square" >
          <YellowToken />
        </div>
      )
    }
  }

}