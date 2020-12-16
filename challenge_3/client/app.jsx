function Checkout(props) {
  return  (
    <div>
      <h1>This is checkout</h1>
      <h2>Click the button already fool!</h2>
      <button onClick={props.goToAccount}>Checkout</button>
    </div>
  )
}
function Account(props) {
  return (
    <div>
      <h1>This is account creation</h1>
      <form onSubmit={props.goToShipping}>
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
      <button onClick={props.goToShipping}>Create Account</button>
      </form>
    </div>
  )
}
function Shipping(props) {
  return (
    <div>
      <h1>Please enter your shipping address.</h1>
      <h4>We promise not to mail you a bomb.</h4>
      <form onSubmit={props.goToShipping}>
        <label htmlFor="address1">Address Line 1:</label>
        <input
          type='address1'
          name='address1'
          value={props.address1}
          onChange={props.handleChange}
        />
        <label htmlFor="address2">Address Line 2:</label>
        <input
          type='address2'
          name='address2'
          value={props.address2}
          onChange={props.handleChange}
        />
        <label htmlFor="city">City:</label>
        <input
          type='city'
          name='city'
          value={props.city}
          onChange={props.handleChange}
        />
        <label htmlFor="state">State:</label>
        <input
          type='state'
          name='state'
          value={props.state}
          onChange={props.handleChange}
        />
        <label htmlFor="zip">Zip Code:</label>
        <input
          type='zip'
          name='zip'
          value={props.zip}
          onChange={props.handleChange}
        />
        <button onClick={props.goToCreditCard}>Checkout</button>
      </form>
    </div>
  )
}
function CreditCard(props) {
  return (
    <div>
      <h1>This is where I take your damn money!</h1>
      <form>
        <label htmlFor="creditCard">Credit Card No.:</label>
        <input
          type='creditCard'
          name='creditCard'
          value={props.creditCard}
          onChange={props.handleChange}
        />
        <label htmlFor="exp">Exp. Date:</label>
        <input
          type='exp'
          name='exp'
          value={props.exp}
          onChange={props.handleChange}
        />
        <label htmlFor="cvv">CVV Code:</label>
        <input
          type='cvv'
          name='cvv'
          value={props.cvv}
          onChange={props.handleChange}
        />
        <button onClick={props.goToSummary}>Checkout</button>
      </form>
    </div>
  )
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
    this.goToAccount = this.goToAccount.bind(this);
    this.goToShipping = this.goToShipping.bind(this);
    this.goToCreditCard = this.goToCreditCard.bind(this);
    this.goToSummary = this.goToSummary.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  goToAccount(e) {
    e.preventDefault();
    console.log('gotoaccount function was fired')
    this.setState({
      currView: 'Account'
    });
  }
  goToShipping(e) {
    e.preventDefault();
    console.log('gotoshipping function was fired')
    this.setState({
      currView: 'Shipping'
    });
  }
  goToCreditCard(e) {
    e.preventDefault();
    console.log('gotocreditcard function was fired')
    this.setState({
      currView: 'CreditCard'
    });
  }
  goToSummary(e) {
    e.preventDefault();
    console.log('gotosummary function was fired')
    this.setState({
      currView: 'Summary'
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    if (this.state.currView === 'Checkout') {
      return (
        <Checkout goToAccount={this.goToAccount} />
      )
    } else if (this.state.currView === 'Account') {
      return (
        <Account
          goToShipping={this.goToShipping}
          handleChange={this.handleChange}
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
        />
      )
    } else if (this.state.currView === 'Shipping') {
      return (
        <div>
          <Shipping
            goToCreditCard={this.goToCreditCard}
            handleChange={this.handleChange}
            address1={this.state.address1}
            address2={this.state.address2}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
          />
        </div>
      )
    } else if (this.state.currView === 'CreditCard') {
      return (
        <div>
          <CreditCard
          goToSummary={this.goToSummary}
          handleChange={this.handleChange}
          creditCard={this.state.creditCard}
          exp={this.state.exp}
          cvv={this.state.cvv}
          />
        </div>
      )
    } else if (this.state.currView === 'Summary') {
      return (
        <div>
          <Summary/>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));