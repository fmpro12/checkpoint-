import React, { Component } from 'react';
import Select from 'react-select'
import './form.css'
import { connect } from 'react-redux';
import {deleteuser} from './redux/actions/deleteuser'
import {changestatus} from './redux/actions/changestatus'

const style = {
    witdth: 170
}

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: ''
        }
        this.onChangeStatus = this.onChangeStatus.bind(this)
    }    
    deleteuser(e, id){
        e.preventDefault();
        this.props.deleteuser(id)
    }

    changestatus (e, id, status){
        e.preventDefault()
        this.props.changestatus(id, status)
    }

    onChangeStatus = event => {
        this.setState({status: event});        
    }

    render() {
      const {id, options} = this.props;   
      const {status} = this.state
      return (
        <div className="option">
          <Select  
            className="select"
            style={style}
            value={this.state.status}
            options={options}          
            onChange={this.onChangeStatus}
            />
          <button onClick={(e) => this.changestatus(e, id, status)}>change status</button>    
         <button onClick={(e) => this.deleteuser(e, id)}>Delete</button>      
        </div>   
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {     
      deleteuser: id => dispatch(deleteuser(id)),
      changestatus: (id, status) => dispatch(changestatus(id, status))
    }
  };
  

  export default connect(null, mapDispatchToProps) (Form)