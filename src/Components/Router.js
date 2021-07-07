import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/tv" component={TV}></Route>
            <Route path="/search" component={Search}></Route>
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

//switch는  path 속성이 없는 Route(Redirect)가 같이 렌더링 되는 것을 방지하기 위해 쓴다.
