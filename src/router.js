import React from 'react';
import {
    Router,
    Route,
    hashHistory
} from 'react-router';
import List from './views/List';
import Topic from './views/Topic';
import Login from './views/Login';
class routes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={List}/>
                <Route path='/topic/:id' component={Topic}/>
                <Route path='/login' component={Login}/>
            </Router>
        )
    }
}
export default routes;