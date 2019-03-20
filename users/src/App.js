import React, { Component } from 'react';
import './css/App.css';
import { Route, NavLink } from 'react-router-dom';
import UsersList from './components/UsersList.js';


class App extends Component {
  state = {
    users: []
  }
  
  render() {
    return (
      <div className="App">
        {/* Links */}
        <NavLink to="/"><button>Home</button></NavLink>

        {/* Routes */}
        <Route exact path='/' render={ props => <UsersList {...this.state} {...props} /> } /> 

        {/* <Route exact path="/" render={ props => <FriendsList {...this.state} {...props} deleteFriend={this.deleteFriend} setUpdateForm={this.setUpdateForm} /> } /> */}
      </div>
    );
  }
}

export default App;
