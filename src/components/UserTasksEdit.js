import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class UserTasksEdit extends React.Component {
 


//construktor
  constructor(props){
super(props)
  this.state = {name: ''};
  this.state = {status: ''};
  this.state = {category: ''};
  this.state = {description: ''};
  this.state = {task: ''};

  }

  
  
  componentDidMount() {
    axios.get(`http://localhost:8080/task/`+this.props.match.params.taskId)
      .then(res => {
        const task = res.data;
        this.setState( {task});
      })
  }

  

 
  handleChange = event => {
    this.setState({ [event.target.name] :  event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('user was submited ');

    
    

    axios.patch(`http://localhost:8080/task/`+this.props.match.params.taskId, {
      name : this.state.name,
      status : this.state.status,
      category : this.state.category,
      description : this.state.description,
    })
      .then(res => {
        console.log(res);
        console.log(res.data)
        
      })


  }



  render() {
    let taskId = this.props.match.params.taskId;
    let url = this.props.location.search;
    let params = queryString.parse(url);
    console.log(params);

    return (

     
      <div class="container">
           <h4 className= "text-center">Edit task with ID : {taskId}</h4>
             <form onSubmit={this.handleSubmit}>

    

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">NAME : <strong class="text-info">{ this.state.task.name}</strong></label>
            <div class="col-8">
              <input input  name="name" class="  form-5 form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user name" onChange={this.handleChange} />
            </div>  
        </div>

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">STATUS :  <strong class="text-info">{ this.state.task.status}</strong></label>
            <div class="col-8">
              <input input name="status" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user surname" onChange={this.handleChange} />
            </div>  
        </div>

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">CATEGORY :  <strong class="text-info"> { this.state.task.category}</strong></label>
            <div class="col-8">
              <input input name="category" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user nickname" onChange={this.handleChange} />
            </div>  
        </div>

        <div class="form-group row mt-3">
          <label for="colFormLabelLg" class="col-4 col-form-label col-form-label-lg text-left">DESCRIPTION :   <strong class="text-info">{ this.state.task.description}</strong></label>
            <div class="col-8">
              <input input name="description" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user email" onChange={this.handleChange} />
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