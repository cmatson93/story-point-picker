import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './helpers/PrivateRoute';

import Home from './pages/Home';
import Session from './pages/Session';

import './style/global.css';

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <PrivateRoute exact path="/session/:session">
                    <Session />
                </PrivateRoute>
            </Switch>
        </div>
    </Router>
);

export default App;
