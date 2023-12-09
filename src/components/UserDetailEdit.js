import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UserDetailEdit extends React.Component {

    constructor(props) {
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
        axios.get(`http://localhost:8080/restuser/` + this.props.match.params.id)
            .then(res => {
                const user = res.data;
                this.setState({user});
            })
    }

    handleChange = (event, value) => {
        this.setState({[event.target.name]: event.target.value === null ? value : event.target.value});
    }

    handleSubmit(defaultValue) {
        // event.preventDefault();
        alert('user was submited ');

        axios.patch(`http://localhost:8080/restuser/` + this.props.match.params.id, {
            name: this.state.name == null ? defaultValue.name : this.state.name,
            surname: this.state.surname == null ? defaultValue.name : this.state.surname,
            nickName: this.state.nickName == null ? defaultValue.name : this.state.nickName,
            email: this.state.email == null ? defaultValue.name : this.state.email,
            age: this.state.age == null ? defaultValue.name : this.state.age,
            password: this.state.password == null ? defaultValue.name : this.state.password,
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
            <div className="container">
                <form onSubmit={() => this.handleSubmit(this.state.user)}>
                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg"
                               className="col-4 col-form-label col-form-label-lg text-left">NAME</label>
                        <div className="col-8">
                            <input name="name"
                                   defaultValue={this.state.user.name}
                                   className="form-5 form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg"
                               className="col-4 col-form-label col-form-label-lg text-left">SURNAME</label>
                        <div className="col-8">
                            <input name="surname"
                                   defaultValue={this.state.user.surname}
                                   className="form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   placeholder="new user surname"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg"
                               className="col-4 col-form-label col-form-label-lg text-left">NICKNAME</label>
                        <div className="col-8">
                            <input name="nickName"
                                   defaultValue={this.state.user.nickName}
                                   className="form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   placeholder="new user nickname"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg"
                               className="col-4 col-form-label col-form-label-lg text-left">EMAIL</label>
                        <div className="col-8">
                            <input name="email"
                                   defaultValue={this.state.user.email}
                                   type="email"
                                   className="form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   placeholder="new user email"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div class="form-group row mt-3">
                        <label for="colFormLabelLg"
                               className="col-4 col-form-label col-form-label-lg text-left">AGE</label>
                        <div className="col-8">
                            <input name="age"
                                   defaultValue={this.state.user.age}
                                   className="form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   placeholder="new user age"
                                   onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label for="colFormLabelLg"
                               className="col-4 col-form-label col-form-label-lg text-left">PASSWORD</label>
                        <div className="col-8">
                            <input name="password"
                                   defaultValue={this.state.user.password}
                                   type="password"
                                   className="form-control form-control-lg ml-2"
                                   id="colFormLabelLg"
                                   placeholder="new user password"
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