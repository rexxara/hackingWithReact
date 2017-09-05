import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './pages/App';
const history = createBrowserHistory()

ReactDOM.render(
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <div>
            <Route component={App}/>
        </div>
    </Router>,
    document.getElementById('app')
);