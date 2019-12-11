import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './pages/Home';
import Cerveja from './pages/Cerveja';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} ></Route>
            <Route path="/beers/:id" component={Cerveja} ></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes