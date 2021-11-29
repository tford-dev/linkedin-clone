import React from 'react'
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import './App.css';
import Login from './Components/Login';

function App() {
    return (
		<div>
			<Router>
				<Switch>
					<Route exact path="Login" element={<Login />} />
				</Switch>
			</Router>
		</div>
    );
}

export default App;
