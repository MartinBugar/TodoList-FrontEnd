import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class UserTasksEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {name: ''};
        this.state = {status: ''};
        this.state = {category: ''};
        this.state = {description: ''};
        this.state = {task: ''};

    }

    componentDidMount() {
        axios.get(`http://localhost:8080/task/` + this.props.match.params.taskId)
            .then(res => {
                const task = res.data;
                this.setState({task});
            })
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(defaultValue) {
        alert('user was submited ');
        axios.patch(`http://localhost:8080/task/` + this.props.match.params.taskId, {
            name: this.state.name == null ? defaultValue.name : this.state.name,
            status: this.state.status == null ? defaultValue.status : this.state.status,
            category: this.state.category == null ? defaultValue.category : this.state.category,
            description: this.state.description == null ? defaultValue.description : this.state.description,
        })
    }

    render() {
        let taskId = this.props.match.params.taskId;
        return (
            <div className="container">
                <h4 className="text-center">Edit task with ID : {taskId}</h4>
                <form onSubmit={() => this.handleSubmit(this.state.task)}>

                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg" className="col-4 col-form-label col-form-label-lg text-left">NAME
                            : <strong className="text-info"></strong></label>
                        <div className="col-8">
                            <input name="name"
                                   defaultValue={this.state.task.name}
                                   className="form-5 form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg" className="col-4 col-form-label col-form-label-lg text-left">STATUS
                            : <strong className="text-info"></strong></label>
                        <div className="col-8">
                            <input name="status"
                                   defaultValue={this.state.task.status}
                                   className="form-control form-control-lg ml-2" id="colFormLabelLg"
                                   placeholder="new user surname"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg" className="col-4 col-form-label col-form-label-lg text-left">CATEGORY
                            : <strong className="text-info"></strong></label>
                        <div className="col-8">
                            <input name="category"
                                   defaultValue={this.state.task.category}
                                   className="form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   placeholder="new user nickname"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg" className="col-4 col-form-label col-form-label-lg text-left">DESCRIPTION
                            : <strong className="text-info"></strong></label>
                        <div className="col-8">
                            <input name="description"
                                   defaultValue={this.state.task.description}
                                   className="form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   placeholder="new user email"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-block"><strong>Save changes</strong>
                    </button>
                </form>
            </div>
        )
    }
}