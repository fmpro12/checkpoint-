import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      status: 'Available',
      hits: [],
      isLoading: false,
      error: null,
    };
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get('http://127.0.0.1:3010/api/users')
    .then(result => this.setState({
      hits: result.data,
      isLoading: false
    }))
    .catch(error => this.setState({
      error,
      isLoading: false
    }));
}


onChange (e) {
  this.setState({ [e.target.name]: e.target.value });
}



handleSubmit(event) {  
  event.preventDefault();
  // const {hits, firstname, lastname, status} = this.state

  axios.post('http://127.0.0.1:3010/api/users', {
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    status: this.state.status
  })
alert("User added")
  }

  render() {
    const {hits, firstname, lastname, status} = this.state
    return (
      <div>
            <form onSubmit={this.handleSubmit}> 
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={this.onChange}
        />
        <select value={status} onChange={this.onChange} name="status">        
          <option value="Not Available">Not Available</option>
          <option value="Vacation">Vacation</option>
          <option  value="Available">Available</option>          
        </select>
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {hits.map(item => <li>{item.firstname} {item.lastname} {item.status}</li>)}
      </ul>
      </div>
    )}}

export default App;
