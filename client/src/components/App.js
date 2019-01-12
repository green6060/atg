import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar/NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home/Home';
import Announcements from './Announcements/Announcements';
import Announcement from './Announcements/Announcement';
import AnnouncementForm from './Announcements/AnnouncementForm';
import Tournaments from './Tournament/Tournaments'
import Coaching from './Coaching/Coaching'
import AdminDash from './AdminDash/AdminDash'
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
            <ProtectedRoute exact path="/announcement/:id" component={Announcement} />
            <ProtectedRoute exact path="/announcementForm" component={AnnouncementForm} />
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

