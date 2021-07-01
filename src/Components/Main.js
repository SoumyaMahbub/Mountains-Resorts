import React from 'react'
import Navbar from './Navbar'
import Mid from './Mid'
import Rooms from './Rooms'
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

function Main() {
    return (
        <Router>
            <div className="main">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Mid />
                    </Route>
                    <Route path="/rooms">
                        <Rooms />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main
