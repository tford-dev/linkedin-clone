import React from 'react'
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';

function App() {
    return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" element={<Login />} />
					<Route path="/home">
						<Header />
					</Route>
				</Switch>
			</Router>
		</div>
    );
}

export default App;
