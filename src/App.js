import React from 'react'
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
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

export default App;
