import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';
import Header from 'Components/Header';
import Detail from 'Routes/Detail';

const RouterComponent = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/tv" exact component={TV}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
      <Route path="/show/:id" component={Detail}></Route>
      {/* <Route path="/search/popular" render={() => <h1>popular</h1>}></Route> */}
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default RouterComponent;
/* path는 어느 url에서 해당 Route를 render할 지 알려준다. component는 누군가 이 Route에 왔을 때 어떤 컴포넌트가 보여질 건지에 대한것이다. */

/* Router밖에서는 Route를 할 수 없다. 
        Router는 하나의 childe만 렌더링해준다.
    */

/* Composition은 두 개 이상의 Route를 동시에 렌더링하는 방식이다. */

/* Redirect는 일치하는 Route가 하나도 없다면 어느 페이지든 받아서 '/'로 보내준다.
예를 들어 
http://localhost:3000/adasdsadsad 라고 치면
'/'에 해당하는 Home으로 가게 된다.*/

/*
근데 Redirect를 쓰게 되면 '/'에 해당하는 Route를 Render하고, Redirect에 해당하는 Route도 Render하는데 이것을 막기 위해서는 Switch를 써주어야한다.
*/

/* Switch는 한번에 오직 하나의 Route만 Render하게 해준다. */

/* 
    exact는 주어진 경로와 정확히 맞아 떨어져야지만 설정한 컴포넌트를 보여준다. 
    exact를 쓰지 않으면 /search로 시작하는 뭐가 들어와도 일치가 되기 때문에 
    localhost:3000/search/popular를 써도 search만 보여진다.
*/
