import React, { Component } from 'react';
import Form from './Form'
import {fetchUsers} from "../components/redux/actions/fetchusers"
import { connect } from "react-redux";

const options = [
  {status: "Available", label: 'Available'},
  {status: "Vacation", label: 'Vacation'},
  {status: "Not Available", label: 'Not Available'}
]

class ChangeStatus extends Component {
  
    componentDidMount() {
    this.props.dispatch(fetchUsers())
  }
     
  fetchFunction() {
    if (this.props.users === undefined) {
      return <div>No users found...</div>
    }
    return this.props.users.map((item) => {
      return (
        <div>
          <ul>
            <li key={item._id}> {item.firstname} {item.lastname} <br />  <strong> {item.status}</strong>
            </li>
          </ul>
          <Form id={item._id} options={options} />
        </div>
      )
    })
  }


    render() {
        return (
        <div>  
            {this.fetchFunction()}
        </div>
        )}
}

    const mapStateToProps = state => ({
      users: state.users.hits,
      loading: state.users.loading,
      error: state.users.error
    });
  
  
      export default connect (mapStateToProps) (ChangeStatus)