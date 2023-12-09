import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string';

export default class UserTaskCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {userId: ''};
        this.state = {name: ''};
        this.state = {status: ''};
        this.state = {category: ''};
        this.state = {description: ''};
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        alert('user was submited ');

        axios.post(`http://localhost:8080/task`, {
            userId: this.props.match.params.id,
            name: this.state.name,
            status: this.state.status,
            category: this.state.category,
            description: this.state.description,


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
                        <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>NAME
                            :</strong></label>
                        <div class="col-sm-10">
                            <input input name="name" class="form-control form-control-lg ml-2" id="colFormLabelLg"
                                   placeholder="new user name" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div class="form-group row mt-3">
                        <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>STATUS
                            :</strong></label>
                        <div class="col-sm-10">
                            <input input name="status" class="form-control form-control-lg ml-2" id="colFormLabelLg"
                                   placeholder="new user surname" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div class="form-group row mt-3">
                        <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>CATEGORY
                            :</strong></label>
                        <div class="col-sm-10">
                            <input input name="category" class="form-control form-control-lg ml-2" id="colFormLabelLg"
                                   placeholder="new user nickname" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div class="form-group row mt-3">
                        <label for="colFormLabelLg" class="col-2 col-form-label col-form-label-lg"><strong>DESCRIPTION
                            :</strong></label>
                        <div class="col-sm-10">
                            <input input name="description" class="form-control form-control-lg ml-2"
                                   id="colFormLabelLg" placeholder="new user email" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg btn-block"><strong>CREATE TASK</strong></button>

                </form>
            </div>
        )
    }
}