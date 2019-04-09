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
    this.handleSubmit2 = this.handleSubmit2.bind(this)
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

    axios.post('http://127.0.0.1:3010/api/users', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      status: this.state.status
    })
    alert("User added")
  }


handleSubmit2 (event){
  event.preventDefault();

  axios.put('http://127.0.0.1:3010/api/users/userId', {
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
      <form onSubmit={this.handleSubmit2}>
      <ul>
        {hits.map(item => <li key={item._id}> {item.firstname} {item.lastname} {item.status} 
        <select key={item._id} value={status} onChange={this.onChange} name="status">
        <option value="Not Available">Not Available</option>
          <option value="Vacation">Vacation</option>
          <option  value="Available">Available</option>  
        </select>
          <input type="submit" value="Submit" />
        </li>
        )}
      </ul>
      </form>
      </div>
    )}}

export default App;
