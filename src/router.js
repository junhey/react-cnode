import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router';
import List from './views/List';
import Topic from './views/Topic';
import Login from './views/Login';
class routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<IndexRoute component={Topic}/>
                <Route path='/' component={List}></Route>
			    <Route path='/topic/:id' component={Topic}></Route>
				<Route path='/login' component={Login}></Route>
			</Router>

		)
	}
}
export default routes;