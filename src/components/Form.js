import React, { Component } from 'react';
import Select from 'react-select'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeStatus = this.onChangeStatus.bind(this)
    }    
    handleSubmit(id, e){
        e.preventDefault();
        const status = {status: this.state.status.status }
        console.log(status)
        axios.put('http://127.0.0.1:3010/api/users/'+id, status)
        alert("Status Changed")
    }

    // onChangeStatus = status => event => {
    //     this.setState({
    //         [status]: event
    //     });
    // }

    onChangeStatus = event =>{
        this.setState({status: event});
        
    }

    render() {
      const {id, options} = this.props;
      console.log(this.state);
      return (
        <form className="option" onSubmit={(e) => this.handleSubmit(id, e) }>
          <Select  
            className="select"
            value={this.state.status}
            options={options}          
            onChange={this.onChangeStatus}
            />
          <button type="submit">Submit</button>
        </form>   
      )
    }
  }

  export default Form