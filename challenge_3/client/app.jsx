// import React from 'react';
// import ReactDOM from 'react-dom';

function Checkout(props) {
  return  <h1>Testing that this works</h1>
}
// Account
// Shipping
// CreditCard
// Something else
//Something else


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currView: 'Checkout',
      userName: ''
    }
  }
  handleOnClick
  (newView) {
    this.setState({
      currView: newView
    })
  }
  render() {
    return (
      <div>
        <Checkout />
        Some content will go here.
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));