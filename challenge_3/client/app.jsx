function Checkout(props) {
  return  (
  <div>
    <h1>This is checkout</h1>
    <h2>Click the button already fool!</h2>
    <button onClick={props.handleOnClick}>Checkout</button>
  </div>
  )
}
function Account(props) {
  return (
    <div>
      <h1>This is account creation</h1>
      <form onSubmit={props.handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type='username'
        name='username'
        value={props.username}
        onChange={props.handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type='email'
        name='email'
        value={props.email}
        onChange={props.handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type='password'
        name='password'
        value={props.password}
        onChange={props.handleChange}
      />
      <input
        type='hidden'
        name='hidden'
        value={'Shipping'}
      />
      <button name='Shipping' onClick={props.handleSubmit}>Create Account</button>
      </form>
    </div>
  )
}
function Shipping(props) {
  return <h1>This is shipping details</h1>
}
function CreditCard(props) {
  return <h1>This is where I take your damn money!</h1>
}
function Summary(props) {
  return <h1>This is where the summary is</h1>
}

let components = ['Checkout', 'Account', 'Shipping', 'CreditCard', 'Summary']
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currView: 'Checkout',
      username: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      creditCard: '',
      exp: '',
      cvv: ''
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleOnClick(e) {
    e.preventDefault();
    console.log('handleOnClick function was fired')
    this.setState({
      currView: 'Account'
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    console.log('handleSubmit function was fired')
    e.preventDefault();
    this.setState({currView: e.target.name});
  }

  render() {
    if (this.state.currView === 'Checkout') {
      return (
        <Checkout handleOnClick={this.handleOnClick} />
      )
    } else if (this.state.currView === 'Account') {
      return (
        <Account
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
        />
      )
    } else if (this.state.currView === 'Shipping') {
      return (
        <div>
          <Account handleSubmit={this.handleSubmit}/>
        </div>
      )
    } else if (this.state.currView === 'CreditCard') {
      return (
        <div>
          <Account handleSubmit={this.handleSubmit}/>
        </div>
      )
    } else if (this.state.currView === 'Summary') {
      return (
        <div>
          <Account handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));