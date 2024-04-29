import React, { Component } from "react";
import './User.css';

class users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: props.usersList
        }
    }
    render() {
        return (
            <div align="center">
                <h1>Users</h1>

                <table border={1}>
                    <thead>
                        <tr>
                            <th>GRID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Course</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user) => {
                        const { grid, name, email, password, course, city } = user
                            return (
                                <tr key={grid}>
                                    <td>{grid}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>{course}</td>
                                    <td>{city}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    </table>
            </div>
        )
    }
    }
export default users;