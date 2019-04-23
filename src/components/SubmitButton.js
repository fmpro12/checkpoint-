import React, { Component } from 'react';
import { connect } from 'react-redux'
import './button.css'
import {postsubmit} from './redux/actions/postaction'
// import { reduxForm } from 'redux-form';
// import { submit } from 'redux-form';



class RemoteSubmitButton extends Component {
  render() {
    const {values}= this.props
    const {dispatch} = this.props
    console.log(values)
    return (
      <button
      className="submit_button"
        type="button"
        onClick={() => dispatch(postsubmit(values))}>Submit</button>
    )
}}


export default  connect()(RemoteSubmitButton)