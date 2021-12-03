import {React, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import {getUserAuth} from './actions';
import { connect } from 'react-redux';

function App(props) {
	useEffect(() => {
		props.getUserAuth();
	}, [])

    return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
				</Switch>
			</Router>
		</div>
    );
}

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = (dispatch) => ({
	getUserAuth: () => dispatch(getUserAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
