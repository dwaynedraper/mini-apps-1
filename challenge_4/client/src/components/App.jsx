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
      message: 'It is Player One\'s turn. Please place a token.'
    })
  }

  updateSquare(col) {
    //do stuff
    //can't set state directly. Variable to use to update board.
    // console.log('updateSquare method fired', col)
    if (!this.state.isWinner) {
      let board = this.state.board
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

      if (this.checkForWinner(position)) {
        this.setState({isWinner: true, message: `Player ${this.state.currentPlayer} won the game!!`})
      } else {
        this.togglePlayer()
        this.setState({message: `It is player ${this.state.currentPlayer}'s turn. Please place a token.`})
      }
    }

  }

  checkForWinner(position) {
    let currentPlayer = this.state.currentPlayer;
    // console.log(currentPlayer, 'curr')
    if (this.checkVertical(position, currentPlayer)) {return true}
    if (this.checkHorizontal(position, currentPlayer)) {return true}
    if (this.checkBackDiagonal(position, currentPlayer)) {return true}
    if (this.checkDiagonal(position, currentPlayer)) {return true}
    return false;
  }

  checkHorizontal(position, currentPlayer) {
    let count = 1;
    let row = position[0];
    let col = position[1];
    let orig = [row, col];
    // console.log('Initial value', row, col)
    let board = this.state.board;
    // console.log('board during horizontal check', board)
    if (row > 0) {
      do {
        col--
        // console.log('Value after --', row, col)
        if (board[row][col] === currentPlayer) {
          count ++
          if (count === 4) {
            // console.log('Oh look, horizontal win!')
            return true;
          }
        } else {
          row = orig[0];
          col = orig[1];
          break
        }
      } while (row > 0)
    }
    if (row < 6) {
      do {
        // console.log('Initial value', row, col)
        col++
        // console.log('Value after ++', row, col)
        if (board[row][col] === currentPlayer) {
          count ++
          if (count === 4) {
            // console.log('Oh look, horizontal win!')
            return true;
          }
        } else {
          break
        }
      } while (row < 6)
    }
  }

  checkVertical(position, currentPlayer){
    let count = 1;
    let row = position[0];
    let col = position[1];
    let board = this.state.board;
    if (row < 3) {
      do {
        // console.log('initial row value', row, col);
        row++;
        // console.log('value after ++', row, col)
        // console.log('board that do loop is running:', board)
        if (board[row][col] === currentPlayer) {
          count++
          if (count === 4) {
            // console.log('Oh look, vertical winner!!')
            return true;
          }
        } else {
          break;
        }
      } while (row < 5)
    }

    return false;
  }

  checkDiagonal(position, currentPlayer) {
    // let count = 1;
    // let row = position[0];
    // let col = position[1];
    // let orig = [row, col];
    // console.log('Initial value', row, col)
    // let board = this.state.board;
    // console.log('board during diagonal check', board)
    // if (row > 0 && col > 0) {
    //   do {
    //     col--
    //     row--
    //     console.log('Value after reverse', row, col)
    //     if (board[row][col] === currentPlayer) {
    //       count ++
    //       if (count === 4) {
    //         console.log('Oh look, diagonal win!')
    //         return true;
    //       }
    //     } else {
    //       row = orig[0];
    //       col = orig[1];
    //       break
    //     }
    //   } while (row > 0 && col > 0)
    // }
    // if (row < 6 && col < 5) {
    //   do {
    //     // console.log('Initial value', row, col)
    //     col++
    //     row++
    //     console.log('Value after forward', row, col)
    //     if (board[row][col] === currentPlayer) {
    //       count ++
    //       if (count === 4) {
    //         console.log('Oh look, diagonal win!')
    //         return true;
    //       }
    //     } else {
    //       break
    //     }
    //   } while (row < 6 && col < 5)
    // }
  }

  checkBackDiagonal(position, currentPlayer){
    return false;
  }

  togglePlayer() {
    if (!this.state.isWinner) {
      this.state.currentPlayer === 1 ?
      this.setState({currentPlayer: 2}) :
      this.setState({currentPlayer: 1})
    }
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
          <div className="board">
          <table>
            <thead></thead>
            <tbody>
              {this.state.board.map((row, i) => {
              return <Row key={i} row={row} updateSquare={this.updateSquare}/>
              })}
            </tbody>
          </table>
          </div>
          <div className="message">{this.state.message}</div>
        </div>
      )
    }
  }
}

export default App;