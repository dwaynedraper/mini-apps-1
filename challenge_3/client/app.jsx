import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    state = {
      currView: 'checkout',
      userName: ''
    }
  }
  handleOnClick = (newView) => {
    this.setState({
      currView: newView
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'));