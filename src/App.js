import React, { Component } from 'react';
import ChangeStatus from './components/AddUser'
import {postsubmit} from './components/redux/actions/postaction'
import "./App.css"
import { Field, reduxForm } from 'redux-form';
import RemoteSubmitButton from './components/SubmitButton'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className="flexbox">
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);



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
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    const { handleSubmit } = this.props;
    const { firstname, lastname, status} = this.state
    const values = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      status: this.state.status
    }
    
    console.log(values)

    return (
      <div className="post_form">
      <form onSubmit={handleSubmit} className="submit_form">
      <Field
        name="firstname"
        type="text"
        component={renderField}
        label="Firstname"
        value={firstname}
        onChange={this.onChange}
      />
      <Field
        name="lastname"
        type="text"
        component={renderField}
        label="Lastname"
        value={lastname}
        onChange={this.onChange}
      />
      <label className="status">status </label>
        <Field name="status" component="select" className="select_status" value={status} onChange={this.onChange}>
         <option></option>
          <option value="Not Available">Not Available</option>
          <option value="Available">Available</option>
          <option value="Vacation">Vacation</option>
        </Field>
        
          <RemoteSubmitButton values={values}/>
        </form>      
          <ChangeStatus />
      </div>
    )}}



    export default reduxForm({
      form: 'remoteSubmit',
      onSubmit: postsubmit() 
    })(App)
