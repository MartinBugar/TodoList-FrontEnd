import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';




function UserDetail({match}) {

    useEffect(() => {
     fetchItem();
     console.log(match);
          },[]);
        

  const[user,setItem] = useState({}
      
  );

  const fetchItem = async () => {
    const data = await fetch (`https://martyxtodolist.herokuapp.com/restuser/${match.params.id}`);
    const user = await data.json();
    const id = user.id;
    setItem(user);
    console.log(data);
 

};

  return (
    <div>
            <div class = "container mt-5">
              <div class="row">
                <div class="col-5 align-center">
                  <div class="card mb-3">
                      <div class="card-header bg-success text-white">User Details</div>
                        <div class="card-body">
                            <div class="table-responsive">
                              <table class="table table-striped table-responsive-sm">
                                <tbody>
                                   <tr>
                                      <th scope="row">ID</th>
                                      <td><a href="#">{user.id}</a></td>
                                      
                                  </tr>     

                                   <tr>
                                      <th scope="row">Name</th>
                                      <td><a href="#">{user.name}</a></td>
                                  </tr> 

                                  <tr>
                                      <th scope="row">Surname</th>
                                      <td><a href="#">{user.surname}</a></td>
                                  </tr> 

                                  <tr>
                                      <th scope="row">NickName</th>
                                      <td><a href="#">{user.nickName}</a></td>
                                  </tr> 

                                  <tr>
                                      <th scope="row">Email</th>
                                      <td><a href="#">{user.email}</a></td>
                                  </tr> 

                                  <tr>
                                      <th scope="row">Age</th>
                                      <td><a href="#">{user.age}</a></td>
                                  </tr> 

                                  <tr>
                                      <th scope="row">Password</th>
                                      <td><a href="#">{user.password}</a></td>
                                  </tr> 

                                </tbody>
                              </table>
                            </div>
                      </div>
                  </div>                 
                </div>
              </div>
               

          </div>

            
  

        
    </div>
  );
}

export default UserDetail;


//<th scope="row">User name</th>
//<td>{user.name}</td>