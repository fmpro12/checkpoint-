import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form'


class ChangeStatus extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        hits: [],
        isLoading: false
      }    

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
     
    render() {
      const {hits} = this.state 
      const options = [
        {status: "Available", label: 'Available'},
        {status: "Vacation", label: 'Vacation'},
        {status: "Not Available", label: 'Not Available'}
      ]
      
      
        return (
        <div>  
        <ul>        
          {hits.map(item => (
            <li key={item._id}> {item.firstname} {item.lastname} <br />  <strong> {item.status}</strong>                  
               <Form id={item._id} options={options}/>
            </li>
          ))}
        </ul>   
        </div>
      )}
    }


  
  
      export default ChangeStatus