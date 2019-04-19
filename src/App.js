import React, { Component } from 'react';
import ChangeStatus from './components/AddUser'
import {submit} from './components/redux/actions/postaction'
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

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="post_form">
      <form onSubmit={handleSubmit}>
      <Field
        name="firstname"
        type="text"
        component={renderField}
        label="firstname"
      />
      <Field
        name="lastname"
        type="text"
        component={renderField}
        label="lastname"
      />
      <label>status </label>
        <Field name="status" component="select">
         <option></option>
          <option value="Not Available">Not Available</option>
          <option value="Available">Available</option>
          <option value="Vacation">Vacation</option>
        </Field>
          {/* <button type="submit">Submit</button> */}
          <RemoteSubmitButton />
        </form>      
          <ChangeStatus />
      </div>
    )}}

    export default reduxForm({
      form: 'remoteSubmit',
      onSubmit: submit  // a unique identifier for this form
    })(App)
