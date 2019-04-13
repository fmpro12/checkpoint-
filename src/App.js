import React, { Component } from 'react';
import axios from 'axios';
import ChangeStatus from './components/AddUser'


import "./App.css"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      status: 'Available',   
      hits: [],   
    };
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)    
  }



onChange (e) {
  this.setState({ [e.target.name]: e.target.value });
}

  handleSubmit(event) {
    event.preventDefault();

    axios.post('http://127.0.0.1:3010/api/users', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      status: this.state.status
    })
    alert("User added")
  }

 

  render() {
    const {firstname, lastname, status} = this.state
    return (
      <div>
            <form onSubmit={this.handleSubmit}> 
            <label>First name: </label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={this.onChange}
        />
         <label> Last name: </label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={this.onChange}
        />
         <label> Status: </label>
        <select value={status} onChange={this.onChange} name="status">        
          <option value="Not Available">Not Available</option>
          <option value="Vacation">Vacation</option>
          <option  value="Available">Available</option>          
        </select>
        <input type="submit" value="Add User" />
      </form>      
      <ChangeStatus />
      </div>
    )}}


    export default App