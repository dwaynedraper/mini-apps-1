// import React from 'react';
// import ReactDOM from 'react-dom';

function Checkout(props) {
  return  <h1>This is checkout</h1>
}
function Account(props) {
  return  <h1>This is account creation</h1>
}
function Shipping(props) {
  return  <h1>This is shipping details</h1>
}
function CreditCard(props) {
  return  <h1>This is where I take your damn money!</h1>
}
function Summary(props) {
  return  <h1>This is where the summary is</h1>
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currView: 'Checkout',
      username: ''
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleOnClick(newView) {
    this.setState({
      currView: newView
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="username"
          name="username"
          value={this.state.value}
          onChange={this.handleChange}>

          </input>
        </form>
        Some content will go here.
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));