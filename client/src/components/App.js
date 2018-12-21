import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Announcements from './Announcements';
import Tournaments from './Tournaments'
import Coaching from './Coaching'
import AdminDash from './AdminDash'
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/announcements" component={Announcements} />
            <ProtectedRoute exact path="/tournaments" component={Tournaments} />
            <ProtectedRoute exact path="/coaching" component={Coaching} />
            <ProtectedRoute exact path="/admindash" component={AdminDash} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;

