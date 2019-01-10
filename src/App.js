import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: [
      "Andrew",
      "Damiana",
      "Erin",
      "Raynaldo",
      "Franklin",
      "Kimberly",
      "Sudheer",
      "Joseph",
      "Karpagaraj",
      "Purushothaman",
      "Karthik"
    ]
  };

  removeUser = e => {
    const u = [...this.state.users];
    let index = u.indexOf(e.target.value);
    u.splice(index, 1);
    this.setState({ users: u });
  };

  render() {
    let users = this.state.users.map(user => {
      return (
        <button
          className="App-button"
          key={user}
          onClick={this.removeUser}
          value={user}
        >
          {user}
        </button>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>MUGA Standup Helper</h1>
        </header>
        {users}
      </div>
    );
  }
}

export default App;
