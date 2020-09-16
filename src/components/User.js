import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import axios from 'axios';

function deleteUser (id) {
if (window.confirm('Are you sure')){
    fetch('http://localhost:8080/restuser/'+id, {
      method:'DELETE',
      header:{'Accept':'application/json',
      'Content-Type':'application/json'
        }
    } )
  }
}  


function User() {

  useEffect(() => {
fetchItems();
  },[]);


  const[users,setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch ('http://localhost:8080/restuser');

    const users = await data.json();
    console.log(data);
    setItems(users);  

}

  return (
<div class="container">
  <div class="row">
    <div class="col ">
      <div class="card">  
        <div class="card-body">
          <h4 className= "text-center">Users LisT</h4>
             <div class="table-responsive">
               <table className="table table-striped">
                 <thead>
                   <tr>
                          <th scope="col"><strong>Id</strong></th>
                          <th scope="col"><strong>nickname</strong></th>
                          <th scope="col"><strong>Name</strong></th>
                          <th scope="col"><strong>Surname</strong></th>
                          <th scope="col"><strong>Email</strong></th>
                          <th scope="col"><strong>Age</strong></th>
                          <th scope="col"><strong>Password</strong></th>
                          <th scope="col-5"></th>
                         
                          
                               
            </tr>
       
            </thead>
          {users.map(user => (
             
            <tbody>
            <tr key={user.id}>
             <th scope="row"><Link to={`/user/${user.id}`}>{user.id}</Link></th>
             <td>{user.nickName}</td>
             <td>{user.name}</td>
             <td>{user.surname}</td>
             <td>{user.email}</td>
             <td>{user.age}</td>
             <td>{user.password}</td>
             <td> 
             <Link to={`/user/${user.id}/usertasks`}><a  class="btn btn-sm btn-success ">Tasks<i class="far fa-edit ml-1"></i></a> </Link>
             <Link to={`/user/${user.id}/edit`}><a  class="btn btn-sm btn-primary ">Edit User<i class="far fa-edit ml-1"></i></a> </Link>
              <a onClick={()=> deleteUser(user.id)} class="btn btn-sm btn-danger ">Delete user<i class="far fa-edit"></i></a></td> 
              
         </tr> 
            
           
        </tbody>
       
       ))}
     </table>
     <div class="col-3 text-left">
     <Link to={`/user/create`}><a  class="btn btn-sm btn-primary">Create new Task <i class="far fa-edit ml-1"></i></a> </Link>
     
     </div>
    
                    </div>
                 </div>
              </div>
             </div>
           </div>
         </div>
  );
}


export default User;


