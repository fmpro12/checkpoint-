import React, { Component } from 'react';
import Select from 'react-select'
import axios from 'axios'
import './form.css'


const style = {
    witdth: 170
}

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeStatus = this.onChangeStatus.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }    
    handleSubmit(id, e){
        e.preventDefault();
        const status = {status: this.state.status.status }
        axios.put('http://127.0.0.1:3010/api/users/'+id, status)
        alert("Status Changed")
    }

    deleteUser(id, e){
        e.preventDefault();
        axios.delete('http://127.0.0.1:3010/api/users/'+id)
        alert("User Deleted")
    }

    onChangeStatus = event => {
        this.setState({status: event});
        
    }

    render() {
      const {id, options} = this.props;   
      return (
        <form className="option" onSubmit={(e) => this.handleSubmit(id, e) }>
          <Select  
            className="select"
            style={style}
            value={this.state.status}
            options={options}          
            onChange={this.onChangeStatus}
            />
          <button type="submit"className="submit">Change Status</button>
          <button onClick={(e) => this.deleteUser(id, e)}>Delete</button>
        </form>   
      )
    }
  }

  export default Form