import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetail from './UserDetail'



export default class UserDetailEdit extends React.Component {
 



  constructor(props){
super(props)
  this.state = {name: ''};
  this.state = {surname: ''};
  this.state = {nickName: ''};
  this.state = {email: ''};
  this.state = {age: ''};
  this.state = {password: ''};
  this.state = {user: ''};
  }

  
  
  componentDidMount() {
    axios.get(`http://localhost:8080/restuser/`+this.props.match.params.id)
      .then(res => {
        const user = res.data;
        this.setState( {user});
      })
  }

  

 
  handleChange = event => {
    this.setState({ [event.target.name] :  event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('user was submited ');

    
    

    axios.patch(`http://localhost:8080/restuser/`+this.props.match.params.id, {
      name : this.state.name,
      surname : this.state.surname,
      nickName : this.state.nickName,
      email : this.state.email,
      age : this.state.age,
      password : this.state.password

    })
      .then(res => {
        console.log(res);
        console.log(res.data)
        
      })


  }



  render() {
    let id = this.props.match.params.id;
    let url = this.props.location.search;
    let params = queryString.parse(url);
    console.log(params);

    return (

 
      <div class="container">
          
             <form onSubmit={this.handleSubmit}>

 
        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">NAME : <strong class="text-info">{ this.state.user.name}</strong></label>
            <div class="col-8">
              <input input  name="name" class="  form-5 form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user name" onChange={this.handleChange} />
            </div>  
        </div>

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">SURNAME :  <strong class="text-info">{ this.state.user.surname}</strong></label>
            <div class="col-8">
              <input input name="surname" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user surname" onChange={this.handleChange} />
            </div>  
        </div>

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">NICKNAME :  <strong class="text-info"> { this.state.user.nickName}</strong></label>
            <div class="col-8">
              <input input name="nickName" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user nickname" onChange={this.handleChange} />
            </div>  
        </div>

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">EMAIL :   <strong class="text-info">{ this.state.user.email}</strong></label>
            <div class="col-8">
              <input input name="email" type="email" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user email" onChange={this.handleChange} />
            </div>  
        </div>

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">AGE :   <strong class="text-info">{ this.state.user.age}</strong></label>
            <div class="col-8">
              <input input name="age" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user age" onChange={this.handleChange} />
            </div>  
        </div>

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">PASSWORD :   <strong class="text-info">{ this.state.user.password}</strong></label>
            <div class="col-8">
              <input input name="password" type="password" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user password" onChange={this.handleChange} />
            </div>  
        </div>

    
        <button type="submit" class="btn btn-primary btn-lg btn-block"><strong>Save changes</strong></button>


        
        </form>
      </div>
      
    

      
    )
  }
}




      
 



//<th scope="row">User name</th>
//<td>{user.name}</td>