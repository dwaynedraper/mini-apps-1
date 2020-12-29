import React from 'react';
import Row from './Row';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: null,
      board = [],
      isWinner = false,
      message = '',
      errorMessage = ''
    }
  }

  initializeBoard() {
    //do stuff
  }
  updateSquare() {
    //do stuff
  }
  render() {
    let rows = this.board.map(//createRows)
    return (
      <div className="container" >
        {this.rows}
      </div>
    )
  }
}

export default App;