import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
    this.groupCall = this.groupCall.bind(this);
  }
  groupCall(e)
  {
    fetch('api/group')
    .then(res=>res.json())
    .then(data=>this.setState({username:data.username}));
  }

  render() {
    const {username} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {username ? `Hello ${username}` : 'Hello Wordl'}
        </header>
        <div>
          <button type="button" onClick={this.groupCall}>Group Call</button>
        </div>
      </div>    
    );
  }

  componentDidMount() {
    fetch('api')
      .then(res=>res.json())
      .then(data=>this.setState({username:data.username}));
  }
}

export default App;
