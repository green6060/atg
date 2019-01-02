import React, { Component } from 'react'
import { Button, Image, List, Menu, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Axios from 'axios';

class AdminDash extends React.Component {

  //Contstructor

  //State Declaration
  state = { 
    announcements: [], 
    games: [], 
    tournaments: [], 
    coaches: [], 
    users: [],
    announcementVisable: false,
    gamesVisable: false,
    tournamentsVisable: false,
    coachesVisable: false,
    usersVisable: false,
    miscellaneousVisable: false,
  }

  //Lifecycle Functions
  componentDidMount() {

    // Axios.get('/api/announcements')
    // .then( res => this.setState({ announcements: res.data }) )

    Axios.get('/api/games')
    .then( res => this.setState({ games: res.data }) )

    // Axios.get('/api/tournaments')
    // .then( res => this.setState({ tournaments: res.data }) )

    // Axios.get('/api/coaches')
    // .then( res => this.setState({ coaches: res.data }) )

    // Axios.get('/api/users')
    // .then( res => this.setState({ users: res.data }) )

    }

  //Functions

  showAnnouncements = () => {
    this.setState(
      { 
        announcementsVisable: !this.state.announcementVisable, 
        gamesVisable: false, 
        tournamentsVisable: false, 
        coachesVisable: false, 
        usersVisable: false, 
        miscellaneousVisable: false,     
      }
    )
  }

  showGames = () => {
    this.setState(
      { 
        gamesVisable: !this.state.gamesVisable, 
        announcementsVisable: false, 
        tournamentsVisable: false, 
        coachesVisable: false, 
        usersVisable: false,    
        miscellaneousVisable: false,  
      }
    )
  }

  showTournaments = () => {
    this.setState(
      { 
        tournamentsVisable: !this.state.tournamentsVisable, 
        announcementsVisable: false, 
        gamesVisable: false, 
        coachesVisable: false, 
        usersVisable: false, 
        miscellaneousVisable: false,     
      }
    )
  }

  showCoaches = () => {
    this.setState(
      { 
        coachesVisable: !this.state.coachesVisable, 
        announcementsVisable: false, 
        gamesVisable: false, 
        tournamentsVisable: false, 
        usersVisable: false,   
        miscellaneousVisable: false,   
      }
    )
  }

  showUsers = () => {
    this.setState(
      { 
        usersVisable: !this.state.coachesVisable, 
        announcementsVisable: false, 
        gamesVisable: false, 
        tournamentsVisable: false, 
        coachesVisable: false,
        miscellaneousVisable: false,
      
      }
    )
  }

  showMiscellaneous = () => {
    this.setState(
      { 
        miscellaneousVisable: !this.state.miscellaneousVisable,
        announcementsVisable: false, 
        gamesVisable: false, 
        tournamentsVisable: false, 
        coachesVisable: false,
        usersVisable: false,       
      }
    )
  }

  //Primary Render
  render() {
    return (
      <>
        <Menu>
          <Menu.Item>
            <Menu.Header>
              <Menu.Item
                  name='announcementSettings'
                  onClick={this.showAnnouncements}
                />
            </Menu.Header>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>
              <Menu.Item
                  name='gameSettings'
                  onClick={this.showGames}
                  
                />
            </Menu.Header>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>
              <Menu.Item
                  name='tournamentSettings'
                  onClick={this.showTournaments}
                />
            </Menu.Header>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>
              <Menu.Item
                  name='coachSettings'
                  onClick={this.showCoaches}
                />
            </Menu.Header>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>
              <Menu.Item
                  name='miscellaneousSettings'
                  onClick={this.showMiscellaneous}
                />
            </Menu.Header>
          </Menu.Item>
        </Menu>
        { this.state.announcementsVisable &&
          <List>
            <List.Item>Announcements 1</List.Item>
            <List.Item>Announcements 2</List.Item>
            <List.Item>Announcements 3</List.Item>
          </List>
        }
        { this.state.gamesVisable &&
          <List>
            <List.Item>Game 1</List.Item>
            <List.Item>Game 2</List.Item>
            <List.Item>Game 3</List.Item>
          </List>
        }

        { this.state.tournamentsVisable &&
          <List>
            <List.Item>Tournament 1</List.Item>
            <List.Item>Tournament 2</List.Item>
            <List.Item>Tournament 3</List.Item>
          </List>
        }

        { this.state.coachesVisable && 
          <List>
            <List.Item>Coach 1</List.Item>
            <List.Item>Coach 2</List.Item>
            <List.Item>Coach 3</List.Item>
          </List>       
        }

        { this.state.usersVisable && 
          <List>
            <List.Item>User 1</List.Item>
            <List.Item>User 2</List.Item>
            <List.Item>User 3</List.Item>
          </List>       
        }

        { this.state.miscellaneousVisable && 
          <List>
            <List.Item>Miscellaneous 1</List.Item>
            <List.Item>Miscellaneous 2</List.Item>
            <List.Item>Miscellaneous 3</List.Item>
          </List>       
        }

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AdminDash)