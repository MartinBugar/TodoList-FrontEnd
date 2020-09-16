import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import User from './components/User';
import UserDetail from './components/UserDetail';
import UserDetailEdit from './components/UserDetailEdit';
import UserTasksCreate from './components/UserTasksCreate';
import UserTasksEdit from './components/UserTasksEdit';
import UserTasks from './components/UserTasks';
import CreateUser from './components/CreateUser';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
       <Nav />
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/about" component={About} />
               <Route path="/user" exact component={User} />
               <Route path="/user/create" exact component={CreateUser}/>
               <Route path="/user/:id/usertasks/create" exact component={UserTasksCreate}/>
               <Route path="/user/:id/usertasks/edit/:taskId" exact component={UserTasksEdit}/>
               <Route path="/user/:id/usertasks" exact component={UserTasks}/>
               <Route path="/user/:id/edit" exact component={UserDetailEdit}/> 
               <Route path="/user/:id" exact component={UserDetail}/>
                
            </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;


