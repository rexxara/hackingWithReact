import React from 'react';
import Detail from './Detail';
import User from './User';
import List from './List';
import { Router, Route, IndexRoute } from 'react-router';

class App extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <h1>Unofficial GitHub Browser v0.1</h1>
                <Route exact path="/" component={List}/>
                <Route path="/detail/:repo" component={ Detail } />
                <Route path="/user/:user" component={ User } />
            </div>
        );
    }
}

export default App;