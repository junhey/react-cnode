import React, { Component } from 'react';

import { Link } from 'react-router';

class Login extends Component {
    render() {
        return (
            <div className="App">
            <p className="App-intro">
                Login <Link to="/" >List</Link>
            </p>
            </div>
        );
    }
}

export default Login;
