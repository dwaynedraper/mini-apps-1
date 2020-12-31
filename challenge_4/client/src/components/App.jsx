import React from 'react';
import Row from './Row.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: null,
      board: [],
      isWinner: false,
      message: '',
      errorMessage: '',
      loaded: false
    }
    this.updateSquare = this.updateSquare.bind(this)
  }

  initializeBoard() {
    let initialBoard = [];
    for (let row = 0; row < 6; row++) {
      let row = []
      for (let i = 0; i < 7; i++) {
        row.push(0);
      }
      initialBoard.push(row);
    }
    this.setState({
      board: initialBoard,
      currentPlayer: 1,
      isWinner: false,
      message: 'It is Player One\'s turn. Please place a token'
    })
  }

  updateSquare(col) {
    //do stuff
    //can't set state directly. Variable to use to update board.
    console.log('updateSquare method fired', col)

    let board = this.state.board
    console.log(board)
    let position = [null, col];
    if (!this.state.isWinner) {
      for (let row = 5; row >= 0; row--) {
        if (board[row][col] === 0) {
          board[row][col] = this.state.currentPlayer;
          position[0] = row
          break; //was filling the entire col by accident - this prevents
        }
      }
    }//if

    this.checkForWinner(position) ?
    this.setState({message: `Player ${currentPlayer} won the game!!`}) :
    this.setState({currentPlayer: this.togglePlayer() })
  }

  checkForWinner(position) {
    return false;
  }

  togglePlayer() {
    this.state.currentPlayer === 1 ?
    this.setState({currentPlayer: 2}) :
    this.setState({currentPlayer: 1})
  }

  componentDidMount() {
    this.initializeBoard();
    this.setState({loaded: true})
  }

  render() {
    if (!this.state.loaded) {
      return (
        <h4>Connect Four game loading...</h4>
      )
    } else {
      return (
        <div className="container" >
          <h4>Connect Four</h4>
          <table>
            <thead></thead>
            <tbody>
              {this.state.board.map((row, i) => {
              return <Row key={i} row={row} updateSquare={this.updateSquare}/>
              })}
            </tbody>
          </table>
          <div className="message">{this.state.message}</div>
        </div>
      )
    }
  }
}

export default App;