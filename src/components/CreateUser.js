import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CreateUser extends React.Component {

 

  constructor(props){
    super(props);
  this.state = {name: ''};
  this.state = {surname: ''};
  this.state = {nickName: ''};
  this.state = {email: ''};
  this.state = {age: ''};
  this.state = {password: ''};
  }
  


  handleChange = event => {
    this.setState({ [event.target.name] :  event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('user was submited ');

    axios.post(`http://localhost:8080/restuser`,{
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
    return (
      <div class="container">
         
      <form onSubmit={this.handleSubmit}>

 <div class="form-group row mt-3">
   <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>NAME :</strong></label>
     <div class="col-sm-10">
       <input input  name="name" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user name" onChange={this.handleChange} />
     </div>  
 </div>

 <div class="form-group row mt-3">
   <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>SURNAME :</strong></label>
     <div class="col-sm-10">
       <input input name="surname" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user surname" onChange={this.handleChange} />
     </div>  
 </div>

 <div class="form-group row mt-3">
   <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>NICKNAME :</strong></label>
     <div class="col-sm-10">
       <input input name="nickName" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user nickname" onChange={this.handleChange} />
     </div>  
 </div>

 <div class="form-group row mt-3">
   <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>EMAIL :</strong></label>
     <div class="col-sm-10">
       <input input name="email" type="email" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user email" onChange={this.handleChange} />
     </div>  
 </div>

 <div class="form-group row mt-3">
   <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>AGE :</strong></label>
     <div class="col-sm-10">
       <input input name="age" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user age" onChange={this.handleChange} />
     </div>  
 </div>

 <div class="form-group row mt-3">
   <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>PASSWORD :</strong></label>
     <div class="col-sm-10">
       <input input name="password" type="password" class="form-control form-control-lg ml-2" id="colFormLabelLg" placeholder="new user password" onChange={this.handleChange} />
     </div>  
 </div>


 <button type="submit" class="btn btn-primary btn-lg btn-block"><strong>CREATE USER</strong></button>


 
 </form>
</div>
    )
  }
}




      
 



//<th scope="row">User name</th>
//<td>{user.name}</td>