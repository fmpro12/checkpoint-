import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select'

const options = [
  {value: "Available", label: 'Available'},
  {value: "Vacation", label: 'Vacation'},
  {value: "Not Available", label: 'Not Available'}
]




class ChangeStatus extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        hits: [],
        isLoading: false,   
        id: "",
        status: "",

      }    

      this.handleSubmit = this.handleSubmit.bind(this)
      // this.onChange = this.onChange.bind(this)
      this.onChangeId = this.onChangeId.bind(this)
      this.onChangeStatus = this.onChangeStatus.bind(this)
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
  

  
 onChangeId(e) {
    this.setState({
        id: e.target.value
    });
}
onChangeStatus = status => value => {
    this.setState({
        [status]: value
    });
}

  
  handleSubmit(event){
    const id = this.state.id
    const status = this.state.status 
    console.log(status)
    event.preventDefault()
    axios.put('http://127.0.0.1:3010/api/users/'+id, status)
    alert("Status Changed")
  }
  
  
   
  
    render() {
      const {hits} = this.state 
      const {status} = this.state
      return (
        <div>  
        <ul>        
          {hits.map(item => <li key={item._id}> {item.firstname} {item.lastname} <br />  <strong> {item.status}</strong>                  
           <form className="option" onSubmit={this.handleSubmit}>
          <Select  
          className="select"
          value={this.state.status}
          options={options}          
          onChange={this.onChangeStatus('status')}
                   />
       <button type="submit">Submit</button>
            </form>   
          </li>
          )}
        </ul>   
        </div>
      )}}
  
  
      export default ChangeStatus