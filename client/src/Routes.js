import React from 'react';
import Home from './Components/Home'
import Middle from './Components/Middle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/provider" component={Middle} />
                </Switch>

            </Router>

        </div>
    )
}


