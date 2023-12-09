import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function deleteTask(id) {
    if (window.confirm('Are you sure')) {
        fetch('http://localhost:8080/task/' + id, {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
}

export default class UserTasks extends React.Component {

    constructor(props) {
        super(props)
        this.state = {tasks: []};
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/task/usertask/` + this.props.match.params.id)
            .then(res => {
                const tasks = res.data;
                this.setState({tasks});
            })
    }

    render() {
        let id = this.props.match.params.id;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col ">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="text-center">Tasks List of User with ID: {id}</h4>
                                    <div class="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col"><strong>Id</strong></th>
                                                <th scope="col"><strong>UserId</strong></th>
                                                <th scope="col"><strong>Name</strong></th>
                                                <th scope="col"><strong>Status</strong></th>
                                                <th scope="col"><strong>Category</strong></th>
                                                <th scope="col"><strong>Description</strong></th>
                                                <th scope="col-5"></th>
                                            </tr>
                                            </thead>
                                            {this.state.tasks.map(task => (
                                                <tbody>
                                                <td>{task.id}</td>
                                                <td>{task.userId}</td>
                                                <td>{task.name}</td>
                                                <td>{task.status}</td>
                                                <td>{task.category}</td>
                                                <td>{task.description}</td>
                                                <td>
                                                    <Link to={`/user/${task.userId}/usertasks/edit/${task.id}`}><a
                                                        className="btn btn-sm btn-primary ">Edit Task<i
                                                        className="far fa-edit ml-1"></i></a> </Link>
                                                    <a onClick={() => deleteTask(task.id)}
                                                       className="btn btn-sm btn-danger ">Delete task<i
                                                        className="far fa-edit"></i></a></td>
                                                </tbody>
                                            ))}
                                        </table>

                                        <div class="col-3 text-left">
                                            <Link to={`/user/${id}/usertasks/create`}><a
                                                className="btn btn-sm btn-primary">Create
                                                new Task <i className="far fa-edit ml-1"></i></a> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
