import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Users from "./pages/Users"
import Home from "./pages/Home"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
