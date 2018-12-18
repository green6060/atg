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
            <Menu.Item name={user.firstName} />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
          <Link to="/account">
            <Menu.Item name="tokens 100" />
          </Link>
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

  render() {
    const { user } = this.props;

    if (user.level === 3) {
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
            <Link to="/admintools">
              <Menu.Item name="admin tools" />
            </Link>
            { this.rightNavs() }
          </Menu>
        </div>
      );
    } else {
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
            { this.rightNavs() }
          </Menu>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));

