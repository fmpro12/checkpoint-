import React, { Component } from 'react';
import axios from 'axios';
import FormControl from "@material-ui/core/FormControl";

import "./App.css"

const _options = [
  { name: "newstatus", value: ["Available", "Not Available", "Vacation"] }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      status: 'Available',
      newstatus: 'Not Available',
      hits: [],
      isLoading: false,
      error: null,
      options: {
        change_status1: "Vacation",
        change_status2: "Not Available"
      }
    };
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loadoptions = this.loadoptions.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
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

changeStatus  = e => {
  let newstatus = this.state.newstatus
  let options = _options.map(item => item.value)
  console.log(options)
  options[e.target.name] = e.target.value;
  this.setState({ newstatus }, () => {});
};


  handleSubmit(event) {
    event.preventDefault();

    axios.post('http://127.0.0.1:3010/api/users', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      status: this.state.status
    })
    alert("User added")
  }


handleSubmit2(event){
  const body= {status: this.state.newstatus}
  event.preventDefault()
  axios.put('http://127.0.0.1:3010/api/users/:user_id',{body})

  alert("Status Changed")
}


  loadoptions = () => {
    const OptionsArray = [];
    let OptionsData = _options;
    let stateOptions = this.state.options;
    OptionsData.forEach((val, index) => {
      let OptionsDatavalue = val.value;
      let selectName = val.name

      OptionsArray.push(
        <div key={index}>
          <label>Select {val.name} </label>
          <select
            key={index}
            name={selectName}
            defaultValue={
              stateOptions[selectName] ? stateOptions[selectName] : ""
            }
            onChange={this.onChange}
          >
            {OptionsDatavalue.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    });
    return OptionsArray;
  };


 

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
        {hits.map(item => <li key={item._id}> {item.firstname} {item.lastname} <br />  <strong> {item.status}</strong> 
          <form autoComplete="off" className="new_status" onSubmit={this.handleSubmit2}>
        <FormControl>{this.loadoptions()}</FormControl>
        <input type="submit" value="Submit" className="input"/>
        <br />
          </form>
        </li>
        )}
      </ul>   
      </div>
    )}}


    

export default App;
