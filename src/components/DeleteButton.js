import React, { Component } from 'react';
import { connect } from 'react-redux'
import './button.css'
import {deleteuser} from './redux/actions/deleteuser'
// import { reduxForm } from 'redux-form';
// import { submit } from 'redux-form';



class DeleteButton extends Component {

    deleteuser(e, id){
        e.preventDefault();
        this.props.deleteuser(id)
    }

  render() {
    const {id}= this.props    
    return (
      <button
      className="submit_button"
        type="button"
        onClick={(e) => this.deleteuser(e, id)}>Delete</button>
    )
}}


const mapDispatchToProps = (dispatch) => {
    return {     
      deleteuser: id => dispatch(deleteuser(id))
    }
  };
  

export default  connect(null, mapDispatchToProps)(DeleteButton)