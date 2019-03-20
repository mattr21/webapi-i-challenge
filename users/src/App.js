import React, { Component } from 'react';
import './css/App.css';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import UsersList from './components/UsersList.js';


class App extends Component {
  constructor() {
    super();    
    this.state = {
      users: [],
      error: '',
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/users')
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(error => {
        this.setState({ error: error })
      })
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
