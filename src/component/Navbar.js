import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Navbar/Home.js';
import About from './Navbar/About.js';
import Friends from './Navbar/Friends.js';

const Navbar = () => {
    return (
        <div id="Navbar">
        <Router>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/friends" component={Friends}/>
            </Switch>
        </Router>
        </div>
    )
}

export default Navbar;

/*

    dans projets: mettre un buildback mars/create-react-app

    config var -> activer le cors, pour que l front puisse nous appeler, et coter front, elle sort a stocker l'url du back

*/