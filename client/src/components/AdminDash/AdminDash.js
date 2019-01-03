import React, { Component } from 'react'
import { Button, List, Menu, Grid, Dropdown} from 'semantic-ui-react'
import { connect } from 'react-redux'
import Axios from 'axios';
import GameForm from '../Game/GameForm'
import TournamentForm from '../Tournament/TournamentForm'
import Styles from './AdminDash.css'

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
    creatingGame: false,
    creatingTournament: false,
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
        announcementsVisable: !this.state.announcementsVisable,
        creatingTournament: false,
        creatingGame: false, 
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
        creatingTournament: false,
        creatingGame: false, 
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
        creatingTournament: false,
        creatingGame: false, 
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
        creatingTournament: false,
        creatingGame: false,
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
        usersVisable: !this.state.usersVisable,
        creatingTournament: false,
        creatingGame: false, 
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
        creatingTournament: false,
        creatingGame: false,
        announcementsVisable: false, 
        gamesVisable: false, 
        tournamentsVisable: false, 
        coachesVisable: false,
        usersVisable: false,       
      }
    )
  }

  toggleGameForm = () => {
    this.setState(
      { 
        creatingGame: !this.state.creatingGame,
        creatingTournament: false,
        miscellaneousVisable: false,
        announcementsVisable: false, 
        gamesVisable: false, 
        tournamentsVisable: false, 
        coachesVisable: false,
        usersVisable: false,
      }
    )
  }

  toggleTournamentForm = () => {
    this.setState(
      {
        creatingTournament: !this.state.creatingTournament,
        creatingGame: false,
        miscellaneousVisable: false,
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
      <div className={Styles.AdminDash}>
        
        <Menu>
          <Menu.Item>
            <Menu.Header onClick={this.showAnnouncements}>
              View Announcements
            </Menu.Header>
          </Menu.Item>

          <Dropdown item simple text='Game Tools'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.showGames}>View Games</Dropdown.Item>
              <Dropdown.Item onClick={this.toggleGameForm}>New Game</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown item simple text='Tournament Tools'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.showTournaments}>View Tournaments</Dropdown.Item>
              <Dropdown.Item onClick={this.toggleTournamentForm}>New Tournament</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Menu.Header onClick={this.showCoaches}>
              View Coaches
            </Menu.Header>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header onClick={this.showUsers}> 
              View Users
            </Menu.Header>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header> 
              Miscellaneous Tools
            </Menu.Header>
          </Menu.Item>
        
        </Menu>

        { this.state.announcementsVisable &&
          <List>
            <List.Item>Announcements Filler Text</List.Item>
            <List.Item>Announcements Filler Text</List.Item>
            <List.Item>Announcements Filler Text</List.Item>
          </List>
        }

        { this.state.gamesVisable &&
          <Grid>
              { this.state.creatingGame &&
                <GameForm toggleForm={this.toggleForm}/>
              }
              { this.state.games.map( game => {
                return(
                  <Grid.Column width={4}>
                    <List.Item>{game.game_name}</List.Item> 
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </Grid.Column>
                )})
              }
            </Grid>
        }

        { this.state.tournamentsVisable &&
          <List>
            <List.Item>Tournament Filler Text</List.Item>
            <List.Item>Tournament Filler Text</List.Item>
            <List.Item>Tournament Filler Text</List.Item>
          </List>
        }

        { this.state.coachesVisable && 
          <List>
            <List.Item>Coach Filler Text</List.Item>
            <List.Item>Coach Filler Text</List.Item>
            <List.Item>Coach Filler Text</List.Item>
          </List>       
        }

        { this.state.usersVisable && 
          <List>
            <List.Item>User Filler Text</List.Item>
            <List.Item>User Filler Text</List.Item>
            <List.Item>User Filler Text</List.Item>
          </List>       
        }

        { this.state.creatingGame &&
          <GameForm/>
        }

        { this.state.creatingTournament &&
          <TournamentForm/>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AdminDash)