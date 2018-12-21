import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;
    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to="/account">
            <Menu.Item name={user.username} />
          </Link>
          <Link to="/account">
            <Menu.Item name="AT tokens 100" />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Link to="/register">
          <Menu.Item name="Register" />
        </Link>
        <Link to="/login">
          <Menu.Item name="Login" />
        </Link>
      </Menu.Menu>
    );
  }

  checkAdminTools = (user) => {
    if (user.level === 3) {
      return (
        <Link to="/admindash">
          <Menu.Item name="admin tools" />
        </Link>
      )
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
          <Link to="/announcements">
            <Menu.Item name="announcements" />
          </Link>
          <Link to="/tournaments">
            <Menu.Item name="tournaments" />
          </Link>
          <Link to="/coaching">
            <Menu.Item name="coaching" />
          </Link>
          { this.checkAdminTools(user) }
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));

